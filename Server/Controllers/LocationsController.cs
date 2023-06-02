using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
namespace Server.Controllers
{
    [Route("api/guessr")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private MyContext db;
    	public LocationController(MyContext context)
    	{
    	    db = context;
    	}

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Location>>> GetAll()
        {
            return await db.Locations.Include(l => l.Expansion).Include(l => l.Alliance).Include(l => l.Zone).ToListAsync();
        }

        [HttpGet("locations")]
        public async Task<ActionResult<IEnumerable<Location>>> GetLocations()
        {
            return await db.Locations.ToListAsync();
        }

        [HttpGet("expansions")]
        public async Task<ActionResult<IEnumerable<Expansion>>> GetExpansions()
        {
            return await db.Expansions.ToListAsync();
        }

        [HttpGet("alliances")]
        public async Task<ActionResult<IEnumerable<Alliance>>> GetAlliances()
        {
            return await db.Alliances.ToListAsync();
        }

        [HttpGet("zones")]
        public async Task<ActionResult<IEnumerable<Zone>>> GetZones()
        {
            return await db.Zones.ToListAsync();
        }

        [HttpGet("locations/{LocationId}")]
        public async Task<ActionResult<Location>> GetLocation(int id)
        {
            Location? Location = await db.Locations.FindAsync(id);
            if (Location == null)
            {
                return NotFound();
            }
            return Location;
        }

        [HttpGet("expansions/{expansionId}")]
        public async Task<ActionResult<Expansion>> GetExpansion(int expansionId)
        {
            Expansion? Expansion = await db.Expansions.FirstOrDefaultAsync(e => e.ExpansionId == expansionId);
            Console.WriteLine(Expansion);
            
            if (Expansion == null)
            {
                return NotFound();
            }
            return Expansion;
        }

        [HttpGet("zone/{zoneId}")]
        public async Task<ActionResult<Zone>> GetZone(int zoneId)
        {
            Zone? Zone = await db.Zones.FirstOrDefaultAsync(e => e.ZoneId == zoneId);
            Console.WriteLine(Zone);
            
            if (Zone == null)
            {
                return NotFound();
            }
            return Zone;
        }

        [HttpGet("expansions/{expansionId}/locations")]
        public async Task<ActionResult<List<Location>>> GetExpansionWithLocations(int expansionId)
        {
            List<Location>? LocationCount = await db.Locations.Where(l => l.ExpansionId == expansionId).ToListAsync();
            Random rdm = new Random();
            int AmountToSkip = rdm.Next(0, LocationCount.Count);
            // List<Location>? Locations = await db.Locations.Skip(AmountToSkip).Take(5).Where(l => l.ExpansionId == expansionId).ToListAsync();
            List<Location>? Locations = await db.Locations.Include(l => l.Zone).Where(l => l.ExpansionId == expansionId).ToListAsync();
            if (Locations == null)
            {
                return NotFound();
            }
            
            Console.WriteLine("===============REQUEST=================");
            
            
            return Locations;
        }

        [HttpGet("alliances/{AllianceId}")]
        public async Task<ActionResult<Alliance>> GetAlliance(int id)
        {
            Alliance? Alliance = await db.Alliances.FindAsync(id);
            if (Alliance == null)
            {
                return NotFound();
            }
            return Alliance;
        }

        [HttpPost("locations")]
        public async Task<ActionResult<Location>> PostLocation([FromBody] Location newLocation)
        {
            if (ModelState.IsValid)
            {
                db.Locations.Add(newLocation);
                await db.SaveChangesAsync();
                // This uses the Get route we wrote above
                return CreatedAtAction(
                    nameof(GetLocation),
                    new { id = newLocation.LocationId },
                    newLocation);
            } else {
                // This is what will allow us to get error messages for our front end
                return BadRequest(ModelState);
            }
        }

        [HttpPost("expansions")]
        public async Task<ActionResult<Expansion>> PostExpansion([FromBody] Expansion newExpansion)
        {
            if (ModelState.IsValid)
            {
                db.Expansions.Add(newExpansion);
                await db.SaveChangesAsync();
                // This uses the Get route we wrote above
                return newExpansion;
            } else {
                // This is what will allow us to get error messages for our front end
                return BadRequest(ModelState);
            }
        }

        [HttpPost("alliances")]
        public async Task<ActionResult<Alliance>> PostAlliance([FromBody] Alliance newAlliance)
        {
            if (ModelState.IsValid)
            {
                db.Alliances.Add(newAlliance);
                await db.SaveChangesAsync();
                // This uses the Get route we wrote above
                return newAlliance;
            } else {
                // This is what will allow us to get error messages for our front end
                return BadRequest(ModelState);
            }
        }

        [HttpPost("zones")]
        public async Task<ActionResult<Zone>> PostZone([FromBody] Zone newZone)
        {
            if (ModelState.IsValid)
            {
                db.Zones.Add(newZone);
                await db.SaveChangesAsync();
                // This uses the Get route we wrote above
                return newZone;
            } else {
                // This is what will allow us to get error messages for our front end
                return BadRequest(ModelState);
            }
        }
        
    }
}