using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Restaurants
{
    public class AddRestaurant
    {
        public class Command : IRequest
        {
        public Guid Id { get; set; }
        public string RestaurantName { get; set; }
        public string Location  { get; set; }
        public int Rating { get; set; }
        public int StartingPrice { get; set; }
        public int MaxPrice { get; set; }
        public string Meals { get; set; }
        }
         public class CommandValidator : AbstractValidator<Command>
            {
                public CommandValidator()
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
                

                 var restaurant = new Restaurant
                 {
                     RestaurantName = request.RestaurantName,
                     Location = request.Location,
                     Rating = request.Rating,
                     StartingPrice = request.StartingPrice,
                     MaxPrice = request.MaxPrice,
                     Meals = request.Meals
                 };

                 _context.Restaurants.Add(restaurant);
                 var result =await _context.SaveChangesAsync() > 0;
                 if(result) return Unit.Value;
                throw new Exception("Problem adding restaurant");
            }
        }
    }
}