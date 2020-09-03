using System;

namespace Application.DTOs
{
    public class RestaurantReviewDTO
    {
        public Guid RestaurantId { get; set; }
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public DateTime TimePosted { get; set; }
        public int Rating { get; set; }
        public string Review { get; set; }
    }
}