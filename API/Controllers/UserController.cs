using System.Threading.Tasks;
using Application.Useraccount;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController
    {
        private readonly IMediator _mediator;
        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ActionResult<User>> Login(Login.Query query)
        {
            return await _mediator.Send(query);
        }
        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<ActionResult<User>> Register(Register.Command command)
        {
            return await _mediator.Send(command);
        }


    }
}