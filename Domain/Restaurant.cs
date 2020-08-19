using System;

namespace Domain
{
    public class Restaurant
    {
        public Guid Id { get; set; }
        public string RestaurantName { get; set; }
        public string Location  { get; set; }
        public int Rating { get; set; }
        public int StartingPrice { get; set; }
        public int MaxPrice { get; set; }
        public string Meals { get; set; }
        
    }
}