using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class ChangedLocation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Longitude",
                table: "Locations",
                newName: "Lng");

            migrationBuilder.RenameColumn(
                name: "Latitude",
                table: "Locations",
                newName: "Lat");

            migrationBuilder.AddColumn<string>(
                name: "PhotosphereUrl",
                table: "Locations",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Zone",
                table: "Locations",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotosphereUrl",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "Zone",
                table: "Locations");

            migrationBuilder.RenameColumn(
                name: "Lng",
                table: "Locations",
                newName: "Longitude");

            migrationBuilder.RenameColumn(
                name: "Lat",
                table: "Locations",
                newName: "Latitude");
        }
    }
}
