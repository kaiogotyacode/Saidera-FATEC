using CS_SaideraFatec.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CS_SaideraFatec.Controllers
{
    public class HomeController : Controller
    {                
        public IActionResult Index()
        {
            return View();
        }         
            
    }
}