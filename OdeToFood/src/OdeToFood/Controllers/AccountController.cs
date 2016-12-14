using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OdeToFood.Entities;
using OdeToFood.ViewModels;
using System.Threading.Tasks;

namespace OdeToFood.Controllers
{
    public class AccountController : Controller
    {
        private SignInManager<User> _singInManager;
        private UserManager<User> _userManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> singInManager)
        {
            _userManager = userManager;
            _singInManager = singInManager;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterUserViewModel entity)
        {
            if (ModelState.IsValid)
            {
                var user = new User
                {
                    UserName = entity.Username
                };
                var createResult = await _userManager.CreateAsync(user, entity.Password);
                if (createResult.Succeeded)
                {
                    await _singInManager.SignInAsync(user, false);
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    foreach (var error in createResult.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _singInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel entity)
        {

            var loginResult = await _singInManager.PasswordSignInAsync(entity.Username, entity.Password, entity.RememberMe, false);
            if (loginResult.Succeeded)
            {
                if (Url.IsLocalUrl(entity.ReturnUrl))
                {
                    return Redirect(entity.ReturnUrl);
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }

            return View();
        }
    }
}