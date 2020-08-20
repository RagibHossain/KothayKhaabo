using MediatR;

namespace Application.Restaurants
{
    public class EditRestaurant
    {
        public class Command : IRequest
        {
            
        public string RestaurantName { get; set; }
        public string Location  { get; set; }
        public int Rating { get; set; }
        public int StartingPrice { get; set; }
        public int MaxPrice { get; set; }
        public string Meals { get; set; }
        public string Image { get; set; }    
        }
    }
}