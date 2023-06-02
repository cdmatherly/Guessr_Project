#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace Server.Models;
public class MyContext : DbContext 
{
    public MyContext(DbContextOptions<MyContext> options) : base(options) { }

    public DbSet<Location> Locations { get; set; } = null!;
    public DbSet<Expansion> Expansions { get; set; } = null!;
    public DbSet<Alliance> Alliances { get; set; } = null!;
    public DbSet<Zone> Zones { get; set; } = null!;
}