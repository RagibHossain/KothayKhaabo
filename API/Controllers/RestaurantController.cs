using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.DTOs;
using Application.Restaurants;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
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
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<List<RestaurantDTO>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<RestaurantDTO>> Details(Guid id)
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
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> EditRestaurant(EditRestaurant.Command command,Guid id)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }
        [HttpPost("{id}")]
        public async Task<ActionResult<Unit>> UploadReview(UploadReview.Command command,Guid id)
        {
            command.RestaurantId = id;
            return await _mediator.Send(command);
        }
    }
}