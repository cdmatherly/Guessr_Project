using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class changeIdToString : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Alliances_AllianceId1",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Expansions_ExpansionId1",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Locations_AllianceId1",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Locations_ExpansionId1",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "AllianceId1",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "ExpansionId1",
                table: "Locations");

            migrationBuilder.AlterColumn<int>(
                name: "LocationId",
                table: "Locations",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn)
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "ExpansionId",
                table: "Expansions",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn)
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "AllianceId",
                table: "Alliances",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn)
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_AllianceId",
                table: "Locations",
                column: "AllianceId");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_ExpansionId",
                table: "Locations",
                column: "ExpansionId");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Alliances_AllianceId",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Expansions_ExpansionId",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Locations_AllianceId",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Locations_ExpansionId",
                table: "Locations");

            migrationBuilder.AlterColumn<string>(
                name: "LocationId",
                table: "Locations",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<string>(
                name: "AllianceId1",
                table: "Locations",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ExpansionId1",
                table: "Locations",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ExpansionId",
                table: "Expansions",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AlterColumn<string>(
                name: "AllianceId",
                table: "Alliances",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.CreateIndex(
                name: "IX_Locations_AllianceId1",
                table: "Locations",
                column: "AllianceId1");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_ExpansionId1",
                table: "Locations",
                column: "ExpansionId1");

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
    }
}
