using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Initialize
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                   new AppUser{
                       DisplayName = "Ashik",
                       UserName = "pervyMadara",
                       Email = "pervymadara@gmail.com"
                   },
                   new AppUser{
                       DisplayName = "Ninad",
                       UserName = "gayboy",
                       Email = "gayboy@gmail.com"
                   },
                   new AppUser{
                       DisplayName = "Ragib",
                       UserName = "princeofallsaiyan",
                       Email = "princeofallsaiyan@gmail.com"
                   }
            };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            if (!context.Restaurants.Any())
            {
                var restaurants = new List<Restaurant>{
                new Restaurant{
                    RestaurantName = "Chillox",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 149,
                    MaxPrice = 1000,
                    Meals = "Burgers Only",
                    Image ="chillox.jpg"
                },
                 new Restaurant{
                    RestaurantName = "Takeout",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 199,
                    MaxPrice = 1000,
                    Meals = "Burgers Only",
                    Image ="takeout.jpg"
                },
                 new Restaurant{
                    RestaurantName = "Mr.Manik",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 169,
                    MaxPrice = 1000,
                    Meals = "Burgers Only",
                    Image="mr.manik.jpg"
                }
             };

                context.Restaurants.AddRange(restaurants);

                var result = context.SaveChanges() > 0;
                if (!result) throw new System.Exception("Error Occured Seeding the database");
            }


        }
    }
}