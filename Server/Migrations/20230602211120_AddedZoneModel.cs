using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class AddedZoneModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Alliances_AllianceId",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Expansions_ExpansionId",
                table: "Locations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Locations",
                table: "Locations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Expansions",
                table: "Expansions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Alliances",
                table: "Alliances");

            migrationBuilder.RenameTable(
                name: "Locations",
                newName: "locations");

            migrationBuilder.RenameTable(
                name: "Expansions",
                newName: "expansions");

            migrationBuilder.RenameTable(
                name: "Alliances",
                newName: "alliances");

            migrationBuilder.RenameColumn(
                name: "Zone",
                table: "locations",
                newName: "ZoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Locations_ExpansionId",
                table: "locations",
                newName: "IX_locations_ExpansionId");

            migrationBuilder.RenameIndex(
                name: "IX_Locations_AllianceId",
                table: "locations",
                newName: "IX_locations_AllianceId");

            migrationBuilder.AddColumn<int>(
                name: "ZoneId1",
                table: "locations",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_locations",
                table: "locations",
                column: "LocationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_expansions",
                table: "expansions",
                column: "ExpansionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_alliances",
                table: "alliances",
                column: "AllianceId");

            migrationBuilder.CreateTable(
                name: "zones",
                columns: table => new
                {
                    ZoneId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ShortName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Lat = table.Column<int>(type: "int", nullable: false),
                    Lng = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_zones", x => x.ZoneId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_locations_ZoneId1",
                table: "locations",
                column: "ZoneId1");

            migrationBuilder.AddForeignKey(
                name: "FK_locations_alliances_AllianceId",
                table: "locations",
                column: "AllianceId",
                principalTable: "alliances",
                principalColumn: "AllianceId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations",
                column: "ExpansionId",
                principalTable: "expansions",
                principalColumn: "ExpansionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_locations_zones_ZoneId1",
                table: "locations",
                column: "ZoneId1",
                principalTable: "zones",
                principalColumn: "ZoneId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locations_alliances_AllianceId",
                table: "locations");

            migrationBuilder.DropForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations");

            migrationBuilder.DropForeignKey(
                name: "FK_locations_zones_ZoneId1",
                table: "locations");

            migrationBuilder.DropTable(
                name: "zones");

            migrationBuilder.DropPrimaryKey(
                name: "PK_locations",
                table: "locations");

            migrationBuilder.DropIndex(
                name: "IX_locations_ZoneId1",
                table: "locations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_expansions",
                table: "expansions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_alliances",
                table: "alliances");

            migrationBuilder.DropColumn(
                name: "ZoneId1",
                table: "locations");

            migrationBuilder.RenameTable(
                name: "locations",
                newName: "Locations");

            migrationBuilder.RenameTable(
                name: "expansions",
                newName: "Expansions");

            migrationBuilder.RenameTable(
                name: "alliances",
                newName: "Alliances");

            migrationBuilder.RenameColumn(
                name: "ZoneId",
                table: "Locations",
                newName: "Zone");

            migrationBuilder.RenameIndex(
                name: "IX_locations_ExpansionId",
                table: "Locations",
                newName: "IX_Locations_ExpansionId");

            migrationBuilder.RenameIndex(
                name: "IX_locations_AllianceId",
                table: "Locations",
                newName: "IX_Locations_AllianceId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Locations",
                table: "Locations",
                column: "LocationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Expansions",
                table: "Expansions",
                column: "ExpansionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Alliances",
                table: "Alliances",
                column: "AllianceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Alliances_AllianceId",
                table: "Locations",
                column: "AllianceId",
                principalTable: "Alliances",
                principalColumn: "AllianceId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Expansions_ExpansionId",
                table: "Locations",
                column: "ExpansionId",
                principalTable: "Expansions",
                principalColumn: "ExpansionId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
