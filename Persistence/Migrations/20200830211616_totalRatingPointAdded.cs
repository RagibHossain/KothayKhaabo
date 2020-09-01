using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class totalRatingPointAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TotalRatingPoints",
                table: "Restaurants",
                nullable: false,
                defaultValue: 0)
                .Annotation("Sqlite:Autoincrement", false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalRatingPoints",
                table: "Restaurants");
        }
    }
}
