using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class RemoveLocationList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations");

            migrationBuilder.DropIndex(
                name: "IX_locations_ExpansionId",
                table: "locations");

            migrationBuilder.DropColumn(
                name: "ExpansionId",
                table: "locations");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ExpansionId",
                table: "locations",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_locations_ExpansionId",
                table: "locations",
                column: "ExpansionId");

            migrationBuilder.AddForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations",
                column: "ExpansionId",
                principalTable: "expansions",
                principalColumn: "ExpansionId");
        }
    }
}
