#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("expansions")]
    public class Expansion
    {
        [Key]
        public int ExpansionId { get; set; }
        [Required]
        public string Name { get; set; }
        public Boolean isAvailable { get; set; } = false;
        public string LogoUrl { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // [NotMapped]
        public List<Location> Locations { get; set; } = new List<Location>();
    }
}