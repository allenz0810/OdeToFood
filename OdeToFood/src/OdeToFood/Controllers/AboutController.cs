using Microsoft.AspNetCore.Mvc;

namespace OdeToFood.Controllers
{
    [Route("[Controller]/[Action]")]
    public class AboutController
    {
        public string Phone()
        {
            return "555 555 5555";
        }

        public string Address()
        {
            return "USA";
        }
    }
}