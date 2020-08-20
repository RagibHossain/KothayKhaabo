using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Restaurants
{
    public class List
    {
        public class Query : IRequest<List<Restaurant>> { }

        public class Handler : IRequestHandler<Query, List<Restaurant>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Restaurant>> Handle(Query request, CancellationToken cancellationToken)
            {
                var restaurants = await _context.Restaurants.ToListAsync();

                return restaurants;
            }
        }

    }
}