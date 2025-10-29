using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace PRS.Controllers
{
    public class JeuxController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Emotions(int numberOfRounds, string selectedEmotions)
        {
            var emotions = JsonConvert.DeserializeObject<List<string>>(selectedEmotions);
            ViewBag.NumberOfRounds = numberOfRounds; 
            ViewBag.Emotions = emotions;

            return View();
        }

        public IActionResult EmotionsSelect()
        {
            return View();
        }
        [HttpPost]
        public IActionResult StartEmotionGame(int NumberOfRounds, string SelectedEmotions)
        {
            // Redirect to another page with query string
            return RedirectToAction("Emotions", new
            {
                numberOfRounds = NumberOfRounds,
                selectedEmotions = SelectedEmotions
            });
        }
    }
}
