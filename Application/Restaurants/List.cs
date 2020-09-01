using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Restaurants
{
    public class List
    {
        public class Query : IRequest<List<RestaurantDTO>> { }

        public class Handler : IRequestHandler<Query, List<RestaurantDTO>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<RestaurantDTO>> Handle(Query request, CancellationToken cancellationToken)
            {
                var restaurants = await _context.Restaurants.Include(x => x.RestaurantReviews)
                .ThenInclude(x => x.AppUser)
                .ToListAsync();
                 
                return _mapper.Map<List<Restaurant>,List<RestaurantDTO>>(restaurants);
            }
        }

    }
}