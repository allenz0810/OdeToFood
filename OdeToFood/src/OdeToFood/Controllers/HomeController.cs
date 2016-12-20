using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OdeToFood.Entities;
using OdeToFood.Services;
using OdeToFood.ViewModels;

namespace OdeToFood.Controllers
{
    public class HomeController : Controller
    {
        private IRestaurantData _restaurantData;
        private IGreeter _greeter;

        public HomeController(IRestaurantData restaurantData, IGreeter greeter)
        {
            _restaurantData = restaurantData;
            _greeter = greeter;
        }

        [AllowAnonymous]
        public IActionResult Index()
        {
            var model = _restaurantData.GetHomePageViewModel();
            model.CurrentMessage = _greeter.GetGreeting();
            return View(model);
        }

        [HttpGet]
        public IActionResult Details(int id)
        {
            var model = _restaurantData.Get(id);

            if (model == null)
            {
                return RedirectToAction(nameof(Index));
            }

            return View(model);
        }

        [HttpPost]
        public JsonResult Get(int restaurantId)
        {
            var model = _restaurantData.Get(restaurantId);

            return Json(new { data = model });
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public bool Create(string name, int cuisine)
        {
            var newRestaurant = new Restaurant();
            newRestaurant.Name = name;
            newRestaurant.Cuisine = (CuisineType)cuisine;
            newRestaurant = _restaurantData.Add(newRestaurant);
            _restaurantData.Commit();
            return true;
            //return RedirectToAction("Details", new { id = newRestaurant.Id });
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var model = _restaurantData.GetHomePageViewModel();
            return Json(new { data = model });
        }

        [HttpGet]
        [Authorize]
        public IActionResult Edit(int id)
        {
            var model = _restaurantData.Get(id);
            if (model == null)
            {
                return RedirectToAction("Index");
            }
            return View(model);
        }

        [HttpPost]
        public IActionResult Edit(int id, RestaurantEditViewModel entity)
        {
            var restaurant = _restaurantData.Get(id);
            if (ModelState.IsValid)
            {
                restaurant.Name = entity.Name;
                restaurant.Cuisine = entity.Cuisine;
                _restaurantData.Commit();
                return RedirectToAction("Details", new { id = restaurant.Id });
            }

            return View(restaurant);
        }
    }
}