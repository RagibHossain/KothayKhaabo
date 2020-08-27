using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Application.Useraccount
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string Email { get; set; }
            public string UserName { get; set; }
            public string DisplayName { get; set; }
            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Email).NotEmpty().EmailAddress();
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.UserName).NotEmpty();

                RuleFor(x => x.Password).NotEmpty().Matches("[A-Z]").WithMessage("Password must contain One Capital Letter")
                .MinimumLength(8).WithMessage("Password must contain 8 characters")
                .Matches("[a-z]").WithMessage("Password must contain one small letter")
                .Matches("[0-9]").WithMessage("Password must contain one number")
                .Matches("[^A-Za-z0-9]").WithMessage("Password must contain a non-alphanumeric character");
            }
        }

        public class Handler : IRequestHandler<Command,User>
        {
            private readonly IJwtGenerator _jwtGenerator;
            private readonly UserManager<AppUser> _userManager;
            public Handler(UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
           
                _userManager = userManager;
                _jwtGenerator = jwtGenerator;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if(await _userManager.Users.AnyAsync(x => x.Email == request.Email)) throw new RestException(HttpStatusCode.BadRequest,"Email already Exists");
                if(await _userManager.Users.AnyAsync(x => x.UserName == request.UserName)) throw new RestException(HttpStatusCode.BadRequest,"Username already exists");

                var user = new AppUser{
                    Email = request.Email,
                    UserName = request.UserName,
                    DisplayName = request.DisplayName
                };

                var result = await _userManager.CreateAsync(user,request.Password);

                if(result.Succeeded)
                {
                    return new User{
                      DisplayName = user.DisplayName,
                      Token = _jwtGenerator.CreateToken(user),
                      Username = user.UserName
                    };
                }
                throw new System.NotImplementedException();
            }
        }
    }
}