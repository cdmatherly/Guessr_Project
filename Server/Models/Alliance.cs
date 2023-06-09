
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("alliances")]
    public class Alliance
    {
        [Key]
        public int AllianceId { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        [NotMapped]
        public List<Location> Locations { get; set; } = new List<Location>();
    }
}