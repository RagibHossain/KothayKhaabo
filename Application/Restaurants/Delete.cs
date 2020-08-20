using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Restaurants
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                 var restuarant = await _context.Restaurants.FindAsync(request.Id);

                 if(restuarant == null) throw new Exception("No Restaurant Found");
                 
                 _context.Restaurants.Remove(restuarant);

                 var result = await _context.SaveChangesAsync() > 0 ;

                 if(result) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}