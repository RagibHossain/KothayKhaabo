using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    //This service should be added to Startup Class
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Restaurant> Restaurants { get; set; }

    }
}