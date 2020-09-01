using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Restaurants
{
    public class UploadReview
    {
        public class Command : IRequest
        {
            public Guid RestaurantId { get; set; }
            public int rating { get; set; }
            public string review { get; set; }
            public DateTime TimeUploaded { get; set; }
            public string Username { get; set; }

        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Username).NotEmpty();
                RuleFor(x => x.RestaurantId).NotNull();
                RuleFor(x => x.rating).NotNull();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly UserManager<AppUser> _userManager;

            public Handler(DataContext context, UserManager<AppUser> userManager)
            {
                _userManager = userManager;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                
                var restaurant = await _context.Restaurants.FindAsync(request.RestaurantId);
                if (restaurant == null) throw new RestException(HttpStatusCode.NotFound, "Restaurant doesn't exist");
                var user = await _userManager.FindByNameAsync(request.Username);

                if (user == null) throw new RestException(HttpStatusCode.NotFound, "User doesn't exist");

                var review = new RestaurantReview
                {
                    Restaurant = restaurant,
                    AppUser = user,
                    Rating = request.rating,
                    Review = request.review ?? null,
                    TimePosted = DateTime.Now
                };
                restaurant.Rating = (restaurant.TotalRatingPoints + review.Rating) / (restaurant.TotalReviews + 1);
                restaurant.TotalReviews = restaurant.TotalReviews + 1;
                restaurant.TotalRatingPoints = restaurant.TotalRatingPoints + review.Rating;
                _context.RestaurantReviews.Add(review);
                _context.Restaurants.Update(restaurant);

                var result = await _context.SaveChangesAsync() > 0;

                if (result) return Unit.Value;
                throw new RestException(HttpStatusCode.Forbidden, "Problem saving changes");

            }
        }
    }
}