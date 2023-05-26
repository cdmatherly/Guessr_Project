
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Server.Models
{
    public class Alliance
    {
        [Key]
        public int AllianceId { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        [Required]
        public List<Location> Locations { get; set; } = new List<Location>();
    }
}