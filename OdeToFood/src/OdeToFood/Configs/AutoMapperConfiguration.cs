using AutoMapper;
using OdeToFood.Entities;
using OdeToFood.ViewModels;
using System.Collections.Generic;

namespace OdeToFood.Configs
{
    public class AutoMapperConfiguration : Profile
    {
        protected override void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<List<Restaurant>, HomePageViewModel>()
                    .ForMember(dest => dest.Restaurants, opt => opt.MapFrom(src => src))
                    .ForMember(dest => dest.CurrentMessage, opt => opt.Ignore())
                    .ReverseMap();
            });
            
        }
    }
}