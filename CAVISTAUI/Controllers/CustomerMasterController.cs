using CAVISTAUI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAVISTAUI.Controllers
{
    public class CustomerMasterController : Controller
    {
        // GET: CustomerMaster
        public ActionResult Index()
        {
            if (Session["LoginUserID"] == null)
            {
                return RedirectToAction("Index", "Login");
            }
            else
            {
                DataTable dtPermission = (System.Data.DataTable)Session["dtPermission"];
                string AddPerm = dtPermission.Select("MenuID = 3", null).Length > 0 ? "1" : "0";
                string ModPerm = dtPermission.Select("MenuID = 4", null).Length > 0 ? "1" : "0";
                string ViewPerm = dtPermission.Select("MenuID = 5", null).Length > 0 ? "1" : "0";
                string ViewPassword = dtPermission.Select("MenuID = 18", null).Length > 0 ? "1" : "0";
                string ViewAttach = dtPermission.Select("MenuID = 20", null).Length > 0 ? "1" : "0";
                string DeleteAttach = dtPermission.Select("MenuID = 21", null).Length > 0 ? "1" : "0";
                string DownloadAttach = dtPermission.Select("MenuID = 22", null).Length > 0 ? "1" : "0";
                
                SingleMasterModel dam = new SingleMasterModel();
                dam.FormName = "Customer";
                dam.Add = AddPerm;
                dam.Modify = ModPerm;
                dam.View = ViewPerm;
                dam.ViewPassword = ViewPassword;
                dam.ViewAttachment = ViewAttach;
                dam.DeleteAttachment = DeleteAttach;
                dam.DownloadAttachment = DownloadAttach;
                return View(dam);
            }
        }
    }
}