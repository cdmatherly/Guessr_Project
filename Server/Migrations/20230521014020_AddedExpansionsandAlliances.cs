using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class AddedExpansionsandAlliances : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AllianceId",
                table: "Locations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "AllianceId1",
                table: "Locations",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Locations",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "ExpansionId",
                table: "Locations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ExpansionId1",
                table: "Locations",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Locations",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Alliance",
                columns: table => new
                {
                    AllianceId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alliance", x => x.AllianceId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Expansion",
                columns: table => new
                {
                    ExpansionId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expansion", x => x.ExpansionId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_AllianceId1",
                table: "Locations",
                column: "AllianceId1");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_ExpansionId1",
                table: "Locations",
                column: "ExpansionId1");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Alliance_AllianceId1",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Expansion_ExpansionId1",
                table: "Locations");

            migrationBuilder.DropTable(
                name: "Alliance");

            migrationBuilder.DropTable(
                name: "Expansion");

            migrationBuilder.DropIndex(
                name: "IX_Locations_AllianceId1",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Locations_ExpansionId1",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "AllianceId",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "AllianceId1",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "ExpansionId",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "ExpansionId1",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Locations");
        }
    }
}
