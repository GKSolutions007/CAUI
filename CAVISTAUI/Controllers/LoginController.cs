using BusinessLayer;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace CAVISTAUI.Controllers
{
    public class LoginController : Controller
    {
        clsBusinessLayer bl = new clsBusinessLayer();
        // GET: Login
        public ActionResult Index(string Msg)
        {
            try
            {
                string nv = Convert.ToString(Session["NavBarVisible"]);
                string APIurl = bl.Decrypt(ConfigurationManager.AppSettings["apiurl"].ToString());
                Session["APIurl"] = APIurl;
                HttpContext.Session.Add("APIurl", APIurl);
                string URl = Request.Url.AbsoluteUri;
                string LASTVAL = URl.Substring(URl.Length - 1);
                string MU = LASTVAL != "/" ? URl + "/" : URl;
                Session["AbsURL"] = MU;// Request.Url.AbsoluteUri;
                if (string.IsNullOrEmpty(nv))
                {
                    Session["NavBarVisible"] = "LogOn";
                }
                if (!string.IsNullOrEmpty(Msg))
                {
                    ViewData["AlertMessage"] = Msg;
                }                
            }
            catch (Exception ex)
            {
                bl.BL_WriteErrorMsginLog("Login", "Index", ex.Message);
            }
            return View();
        }
        public ActionResult AACM(string AAlk)
        {
            try
            {
                string msg = "";
                if (!string.IsNullOrEmpty(AAlk))
                {
                    string APIurl = bl.Decrypt(ConfigurationManager.AppSettings["apiurl"].ToString());
                    string uid = bl.Decrypt(AAlk);
                    HttpClient _client = new HttpClient();
                    _client.BaseAddress = new Uri(APIurl);// APILink from app config
                    _client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage result = _client.GetAsync("signup/activateaccount?UID=" + uid).Result;
                    if (result.IsSuccessStatusCode)
                    {
                        // DataTable dtRes = bl.BL_ExecuteParamSP("uspManageUsers", 5, uid);
                        msg = "You Account is Activated. You can Login now.";
                        ViewData["AlertMessage"] = msg;
                    }
                    else
                    {
                        msg = "Account not activated. Try again later.";
                    }
                    return RedirectToAction("Index", "Login", new { Msg = msg });
                }
            }
            catch (Exception ex)
            {
            }
            return View();
        }
    }
}