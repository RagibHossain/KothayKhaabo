using System;
using System.Collections.Generic;

namespace Application.DTOs
{
    public class RestaurantDTO
    {
        public Guid Id { get; set; }
        public string RestaurantName { get; set; }
        public string Location { get; set; }
        public int Rating { get; set; }
        public int StartingPrice { get; set; }
        public int MaxPrice { get; set; }
        public string Meals { get; set; }
        public string Image { get; set; }
        public string Slogan { get; set; }
        public int TotalReviews { get; set; }
        public int TotalRatingPoints { get; set; }
        public ICollection<RestaurantReviewDTO> RestaurantReviews { get; set; }
    }
}