#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("locations")]
    public class Location
    {
        [Key]
        public int LocationId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Lat { get; set; }

        [Required]
        public double Lng { get; set; }

        [Required]
        public string PhotosphereUrl { get; set; }


        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public int ZoneId { get; set; }
        public Zone? Zone { get; set; }

        public int ExpansionId { get; set; }

        public Expansion? Expansion { get; set; }

        public int AllianceId { get; set; }
        
        public Alliance? Alliance { get; set; }
    }
}