using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    public partial class MoveExpansionId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations");

            migrationBuilder.AddColumn<int>(
                name: "ExpansionId",
                table: "zones",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "ExpansionId",
                table: "locations",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_zones_ExpansionId",
                table: "zones",
                column: "ExpansionId");

            migrationBuilder.AddForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations",
                column: "ExpansionId",
                principalTable: "expansions",
                principalColumn: "ExpansionId");

            migrationBuilder.AddForeignKey(
                name: "FK_zones_expansions_ExpansionId",
                table: "zones",
                column: "ExpansionId",
                principalTable: "expansions",
                principalColumn: "ExpansionId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations");

            migrationBuilder.DropForeignKey(
                name: "FK_zones_expansions_ExpansionId",
                table: "zones");

            migrationBuilder.DropIndex(
                name: "IX_zones_ExpansionId",
                table: "zones");

            migrationBuilder.DropColumn(
                name: "ExpansionId",
                table: "zones");

            migrationBuilder.AlterColumn<int>(
                name: "ExpansionId",
                table: "locations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_locations_expansions_ExpansionId",
                table: "locations",
                column: "ExpansionId",
                principalTable: "expansions",
                principalColumn: "ExpansionId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
