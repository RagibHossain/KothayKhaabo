using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    //This service should be added to Startup Class
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<RestaurantReview> RestaurantReviews { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<RestaurantReview>(x => x.HasKey(rr => new { rr.UserId, rr.RestaurantId }));
            builder.Entity<Restaurant>().Property(x => x.TotalReviews).HasDefaultValue(0);
            builder.Entity<Restaurant>().Property(x => x.TotalRatingPoints).HasDefaultValue(0);
            builder.Entity<RestaurantReview>()
            .HasOne(r => r.Restaurant)
            .WithMany(rr => rr.RestaurantReviews)
            .HasForeignKey(r => r.RestaurantId);
            builder.Entity<RestaurantReview>()
            .HasOne(u => u.AppUser)
            .WithMany(rr => rr.RestaurantReviews)
            .HasForeignKey(u => u.UserId);
        }
    }
}