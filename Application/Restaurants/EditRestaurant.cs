using System;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Restaurants
{
    public class EditRestaurant
    {
        public class Command : IRequest
        {

            public Guid Id { get; set; }
            public string RestaurantName { get; set; }
            public string Location { get; set; }
            public int Rating { get; set; }
            public int StartingPrice { get; set; }
            public int MaxPrice { get; set; }
            public string Meals { get; set; }
            public string Image { get; set; }
        }
        public class ComandValidator : AbstractValidator<Command>
        {
            public ComandValidator()
            {
                RuleFor(x => x.RestaurantName).NotEmpty();
                RuleFor(x => x.Location).NotEmpty();
                RuleFor(x => x.Meals).NotEmpty();
                RuleFor(x => x.Rating).NotEmpty();
                RuleFor(x => x.StartingPrice).NotEmpty();
                RuleFor(x => x.MaxPrice).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                 var restaurant = await _context.Restaurants.FindAsync(request.Id);
                 if(restaurant == null) throw new Exception("No Restaurant Found");
                 
                restaurant.RestaurantName = request.RestaurantName ;
                restaurant.Location = request.Location ;
                restaurant.Image = request.Image ;
                restaurant.MaxPrice = request.MaxPrice ;
                restaurant.StartingPrice = request.StartingPrice;
                restaurant.Rating = request.Rating;
                restaurant.Meals = request.Meals;

                _context.Update(restaurant);
                var result = await _context.SaveChangesAsync() > 0 ;

                if(result) return Unit.Value;
                throw new Exception("Failed Updating data");
            }
        }
    }

}