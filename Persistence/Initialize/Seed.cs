using System.Collections.Generic;
using System.Linq;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Initialize
{
    public static class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(context.Restaurants.Any())
            {
                return;
            }

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

            var result =  context.SaveChanges() > 0;
            if(!result) throw new System.Exception("Error Occured Seeding the database"); 
        }
    }
}