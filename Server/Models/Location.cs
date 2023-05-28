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

        [Required]
        public string Zone { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        [Required]
        public int ExpansionId { get; set; }

        public Expansion? Expansion { get; set; }

        [Required]
        public int AllianceId { get; set; }
        
        public Alliance? Alliance { get; set; }
    }
}