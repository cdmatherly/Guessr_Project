#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Server.Models
{
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

        [Required]
        public List<Location> Locations { get; set; } = new List<Location>();
    }
}