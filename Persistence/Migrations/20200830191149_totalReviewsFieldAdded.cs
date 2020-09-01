using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class totalReviewsFieldAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "review",
                table: "RestaurantReviews",
                newName: "Review");

            migrationBuilder.AddColumn<int>(
                name: "TotalReviews",
                table: "Restaurants",
                nullable: false,
                defaultValue: 0)
                .Annotation("Sqlite:Autoincrement", true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalReviews",
                table: "Restaurants");

            migrationBuilder.RenameColumn(
                name: "Review",
                table: "RestaurantReviews",
                newName: "review");
        }
    }
}
