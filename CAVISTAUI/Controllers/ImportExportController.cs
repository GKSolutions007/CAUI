using CAVISTAUI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAVISTAUI.Controllers
{
    public class ImportExportController : Controller
    {
        // GET: ImportExport
        public ActionResult Index()
        {
            if (Session["LoginUserID"] == null)
            {
                return RedirectToAction("Index", "Login");
            }
            else
            {
                SingleMasterModel dam = new SingleMasterModel();
                dam.FormName = "Import / Export";
                return View(dam);
            }
        }
    }
}