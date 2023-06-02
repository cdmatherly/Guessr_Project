using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class Really : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locations_zones_ZoneId1",
                table: "locations");

            migrationBuilder.DropIndex(
                name: "IX_locations_ZoneId1",
                table: "locations");

            migrationBuilder.DropColumn(
                name: "ZoneId1",
                table: "locations");

            migrationBuilder.AlterColumn<int>(
                name: "ZoneId",
                table: "locations",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_locations_ZoneId",
                table: "locations",
                column: "ZoneId");

            migrationBuilder.AddForeignKey(
                name: "FK_locations_zones_ZoneId",
                table: "locations",
                column: "ZoneId",
                principalTable: "zones",
                principalColumn: "ZoneId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locations_zones_ZoneId",
                table: "locations");

            migrationBuilder.DropIndex(
                name: "IX_locations_ZoneId",
                table: "locations");

            migrationBuilder.AlterColumn<string>(
                name: "ZoneId",
                table: "locations",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "ZoneId1",
                table: "locations",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_locations_ZoneId1",
                table: "locations",
                column: "ZoneId1");

            migrationBuilder.AddForeignKey(
                name: "FK_locations_zones_ZoneId1",
                table: "locations",
                column: "ZoneId1",
                principalTable: "zones",
                principalColumn: "ZoneId");
        }
    }
}
