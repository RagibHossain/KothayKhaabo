using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Restaurants;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using static Application.Restaurants.List;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RestaurantController : ControllerBase
    {
        private readonly IMediator _mediator;
        public RestaurantController(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Restaurant>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Restaurant>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> AddRestaurant(AddRestaurant.Command command)
        {
              return await _mediator.Send(command);
        }
    }
}