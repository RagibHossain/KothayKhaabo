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
                    Meals = "Burgers",
                    Image ="chillox.jpg"
                },
                 new Restaurant{
                    RestaurantName = "Takeout",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 199,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image ="takeout.jpg"
                },
                 new Restaurant{
                    RestaurantName = "Mr.Manik",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 169,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image="mr.manik.jpg"
                },
                   new Restaurant{
                    RestaurantName = "American Burger",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 400,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image="americanburger.png"
                },
                   new Restaurant{
                    RestaurantName = "McDonald's",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 169,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image="mcdonalds.png"
                },
                      new Restaurant{
                    RestaurantName = "Domino's Pizza",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 500,
                    MaxPrice = 2000,
                    Meals = "Pizza",
                    Image="dominos.jpg"
                },
                      new Restaurant{
                    RestaurantName = "Cheez!",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 450,
                    MaxPrice = 200,
                    Meals = "Pizza",
                    Image="cheez.jpg"
                },
                      new Restaurant{
                    RestaurantName = "Pizza Hut",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 500,
                    MaxPrice = 2000,
                    Meals = "Pizza",
                    Image="pizzahut.png"
                },
                    new Restaurant{
                    RestaurantName = "Pizza Inn",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 600,
                    MaxPrice = 2500,
                    Meals = "Pizza",
                    Image="pizzain.png"
                }
             };

                context.Restaurants.AddRange(restaurants);

                var result = context.SaveChanges() > 0;
                if (!result) throw new System.Exception("Error Occured Seeding the database");
            }


        }
    }
}