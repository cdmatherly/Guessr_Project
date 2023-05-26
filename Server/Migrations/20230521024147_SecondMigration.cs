using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Alliance_AllianceId1",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Expansion_ExpansionId1",
                table: "Locations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Expansion",
                table: "Expansion");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Alliance",
                table: "Alliance");

            migrationBuilder.RenameTable(
                name: "Expansion",
                newName: "Expansions");

            migrationBuilder.RenameTable(
                name: "Alliance",
                newName: "Alliances");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Expansions",
                table: "Expansions",
                column: "ExpansionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Alliances",
                table: "Alliances",
                column: "AllianceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Alliances_AllianceId1",
                table: "Locations",
                column: "AllianceId1",
                principalTable: "Alliances",
                principalColumn: "AllianceId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Expansions_ExpansionId1",
                table: "Locations",
                column: "ExpansionId1",
                principalTable: "Expansions",
                principalColumn: "ExpansionId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Alliances_AllianceId1",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Expansions_ExpansionId1",
                table: "Locations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Expansions",
                table: "Expansions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Alliances",
                table: "Alliances");

            migrationBuilder.RenameTable(
                name: "Expansions",
                newName: "Expansion");

            migrationBuilder.RenameTable(
                name: "Alliances",
                newName: "Alliance");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Expansion",
                table: "Expansion",
                column: "ExpansionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Alliance",
                table: "Alliance",
                column: "AllianceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Alliance_AllianceId1",
                table: "Locations",
                column: "AllianceId1",
                principalTable: "Alliance",
                principalColumn: "AllianceId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Expansion_ExpansionId1",
                table: "Locations",
                column: "ExpansionId1",
                principalTable: "Expansion",
                principalColumn: "ExpansionId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
