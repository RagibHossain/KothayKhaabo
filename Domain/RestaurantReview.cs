using System;

namespace Domain
{
    public class RestaurantReview
    {
        public Guid RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }
        public string UserId { get; set; }
        public AppUser AppUser { get; set; }
        public DateTime TimePosted { get; set; }
        public int Rating { get; set; }
        public string Review { get; set; }
    }
}