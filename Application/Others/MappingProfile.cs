using Application.DTOs;
using AutoMapper;
using Domain;

namespace Application.Others
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Restaurant,RestaurantDTO>();

            CreateMap<RestaurantReview,RestaurantReviewDTO>()
            .ForMember(x =>x.DisplayName, y => y.MapFrom(r => r.AppUser.DisplayName))
            .ForMember(x => x.Username,y => y.MapFrom(u => u.AppUser.UserName));
        }
    }
}