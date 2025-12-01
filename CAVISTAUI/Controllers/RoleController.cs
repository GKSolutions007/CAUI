using CAVISTAUI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAVISTAUI.Controllers
{
    public class RoleController : Controller
    {
        // GET: Users
        public ActionResult Index()
        {
            if (Session["LoginUserID"] == null)
            {
                return RedirectToAction("Index", "Login");
            }
            else
            {
                DataTable dtPermission = (System.Data.DataTable)Session["dtPermission"];
                string AddPerm = dtPermission.Select("MenuID = 7", null).Length > 0 ? "1" : "0";
                string ModPerm = dtPermission.Select("MenuID = 8", null).Length > 0 ? "1" : "0";
                string ViewPerm = dtPermission.Select("MenuID = 9", null).Length > 0 ? "1" : "0";           
                SingleMasterModel dam = new SingleMasterModel();
                dam.FormName = "Users";
                dam.Add = AddPerm;
                dam.Modify = ModPerm;
                dam.View = ViewPerm;
                return View(dam);
            }
        }
    }
}