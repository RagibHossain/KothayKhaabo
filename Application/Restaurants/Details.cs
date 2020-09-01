using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.DTOs;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Restaurants
{
    public class Details
    {
        public class Query : IRequest<RestaurantDTO>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, RestaurantDTO>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<RestaurantDTO> Handle(Query request, CancellationToken cancellationToken)
            {
                var restaurant = await _context.Restaurants.Include(x => x.RestaurantReviews).
                ThenInclude(x => x.AppUser)
                .FirstOrDefaultAsync(x => x.Id == request.Id);

                if (restaurant == null) throw new RestException(HttpStatusCode.NotFound, "Coudn't Find any Restaurant");

                return _mapper.Map<Restaurant,RestaurantDTO>(restaurant);
            }
        }
    }
}