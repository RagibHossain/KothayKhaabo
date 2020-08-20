using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Restaurants
{
    public class Details
    {
        public class Query : IRequest<Restaurant>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Restaurant>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Restaurant> Handle(Query request, CancellationToken cancellationToken)
            {
                var restaurant = await _context.Restaurants.FindAsync(request.Id);

                if(restaurant == null) throw new Exception("Coudn't Find any Restaurant");

                return restaurant;
            }
        }
    }
}