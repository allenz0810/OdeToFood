using OdeToFood.Entities;
using System.Collections.Generic;
using System.Linq;
using System;
using OdeToFood.ViewModels;
using AutoMapper;

namespace OdeToFood.Services
{
    public interface IRestaurantData
    {

        Restaurant Add(Restaurant entity);

        IEnumerable<Restaurant> GetAll();

        Restaurant Get(int id);

        HomePageViewModel GetHomePageViewModel();

        void Commit();
    }

    public class SqlRestaurantData : IRestaurantData
    {
        private OdeToFoodDBContext _context;

        public SqlRestaurantData(OdeToFoodDBContext context)
        {
            _context = context;
        }

        public Restaurant Add(Restaurant entity)
        {
            _context.Add(entity);
            return entity;
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public Restaurant Get(int id)
        {
            return _context.Restaurants.FirstOrDefault(r => r.Id == id);
        }

        public HomePageViewModel GetHomePageViewModel()
        {
            return Mapper.Map<HomePageViewModel>(GetAll().ToList());
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return _context.Restaurants;
        }
    }


    public class InMemoryRestaurantData : IRestaurantData
    {
        static InMemoryRestaurantData()
        {
            _restaurants = new List<Restaurant>
            {
                new Restaurant { Id= 1, Name = "First Restaurant" },
                new Restaurant { Id= 2, Name = "Second Restaurant" },
                new Restaurant { Id= 3, Name = "Third Restaurant" }
            };
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return _restaurants;
        }

        public Restaurant Get(int id)
        {
            return _restaurants.FirstOrDefault(r => r.Id == id);
        }

        public Restaurant Add(Restaurant entity)
        {
            entity.Id = _restaurants.Max(r => r.Id) + 1;
            _restaurants.Add(entity);
            return entity;
        }

        public void Commit()
        {
            throw new NotImplementedException();
        }

        public HomePageViewModel GetHomePageViewModel()
        {
            throw new NotImplementedException();
        }

        static List<Restaurant> _restaurants;
    }
}