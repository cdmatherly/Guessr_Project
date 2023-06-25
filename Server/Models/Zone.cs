#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("zones")]
    public class Zone
    {
        [Key]
        public int ZoneId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string ShortName { get; set; }
        [Required]
        public double Lat { get; set; }
        [Required]
        public double Lng { get; set; }
        public int AllianceId { get; set; }
        
        public Alliance? Alliance { get; set; }

        public int ExpansionId { get; set; }

        public Expansion? Expansion { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        
        public List<Location> Locations { get; set; } = new List<Location>();
    }
}