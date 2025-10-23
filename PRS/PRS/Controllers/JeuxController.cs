using Microsoft.AspNetCore.Mvc;

namespace PRS.Controllers
{
    public class JeuxController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Emotions()
        {
            return View();
        }

        public IActionResult EmotionsSelect()
        {
            return View();
        }
    }
}
