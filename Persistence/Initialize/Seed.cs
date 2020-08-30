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
                    Rating = 4,
                    StartingPrice = 149,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image ="chillox.jpg",
                    Slogan="Chill and Eat Spicy Burgers"
                },
                 new Restaurant{
                    RestaurantName = "Takeout",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 199,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image ="takeout.jpg",
                    Slogan="Takeout and then Makeout"
                },
                 new Restaurant{
                    RestaurantName = "Mr.Manik",
                    Location = "Uttara",
                    Rating = 3,
                    StartingPrice = 169,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image="mr.manik.jpg",
                    Slogan="Manik Bhai's burger larger than american burger"
                },
                   new Restaurant{
                    RestaurantName = "American Burger",
                    Location = "Uttara",
                    Rating = 4,
                    StartingPrice = 400,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image="americanburger.png",
                    Slogan="America Loves Burgers and We're America's Burger King"
                },
                   new Restaurant{
                    RestaurantName = "McDonald's",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 169,
                    MaxPrice = 1000,
                    Meals = "Burgers",
                    Image="mcdonalds.png",
                    Slogan="I'm lovin it"
                },
                      new Restaurant{
                    RestaurantName = "Domino's Pizza",
                    Location = "Uttara",
                    Rating = 3,
                    StartingPrice = 500,
                    MaxPrice = 2000,
                    Meals = "Pizza",
                    Image="dominos.jpg",
                    Slogan="It's what we do"
                },
                      new Restaurant{
                    RestaurantName = "Cheez!",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 450,
                    MaxPrice = 200,
                    Meals = "Pizza",
                    Image="cheez.jpg",
                    Slogan="It's all about CHEEZ and RICHES."
                },
                      new Restaurant{
                    RestaurantName = "Pizza Hut",
                    Location = "Uttara",
                    Rating = 5,
                    StartingPrice = 500,
                    MaxPrice = 2000,
                    Meals = "Pizza",
                    Image="pizzahut.png",
                    Slogan ="No One Outpizzas the Hut"
                },
                    new Restaurant{
                    RestaurantName = "Pizza Inn",
                    Location = "Uttara",
                    Rating = 4,
                    StartingPrice = 600,
                    MaxPrice = 2500,
                    Meals = "Pizza",
                    Image="pizzain.png",
                    Slogan ="America's Hometown Pizza Place"
                }
             };

                context.Restaurants.AddRange(restaurants);

                var result = context.SaveChanges() > 0;
                if (!result) throw new System.Exception("Error Occured Seeding the database");
            }


        }
    }
}