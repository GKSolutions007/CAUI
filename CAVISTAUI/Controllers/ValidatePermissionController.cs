using BusinessLayer;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using System.Configuration;

namespace CAVISTAUI.Controllers
{
    public class ValidatePermissionController : Controller
    {
        DataTable dtRes, dtParent, dtPermission, dtReportParent, dtReportPermission, dtAppconfig = new DataTable();
        // GET: ValidatePermission
        clsBusinessLayer bl = new clsBusinessLayer();
        public ActionResult Index(string ID)
        {
            //string APIurl = Session["APIurl"].ToString();
            string APIurl = bl.Decrypt(ConfigurationManager.AppSettings["apiurl"].ToString());
            HttpClient _client = new HttpClient();
            _client.BaseAddress = new Uri(APIurl);// APILink from app config
            _client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage result = _client.GetAsync("validatepermissions?UID=" + ID).Result;
            if (result.IsSuccessStatusCode)
            {
                var jsonString = result.Content.ReadAsStringAsync();

                string json = JsonConvert.DeserializeObject<string>(jsonString.Result);
                DataSet dtResult = JsonConvert.DeserializeObject<DataSet>(json);
                if (dtResult.Tables.Count > 0)
                {
                    dtAppconfig = dtResult.Tables[0];
                    dtRes = dtResult.Tables[1];
                    dtParent = dtResult.Tables[2];
                    dtPermission = dtResult.Tables[3];
                    dtReportParent = dtResult.Tables[4];
                    dtReportPermission = dtResult.Tables[5];
                }
            }
            //DataTable dtRes = bl.BL_ExecuteParamSP("uspManageUsers", 4, ID);            
            Session["LoginUserID"] = dtRes.Rows[0][0].ToString();
            Session["LoginUser"] = dtRes.Rows[0][1].ToString();
            Session["RoleID"] = dtRes.Rows[0]["RoleID"].ToString();
            Session["NavBarVisible"] = "UserPermission";           
            Session["dtParent"] = dtParent;
            Session["dtPermission"] = dtPermission;
            Session["dtReportParent"] = dtReportParent;
            Session["dtReportPermission"] = dtReportPermission;

            return RedirectToAction("Index", "Home");
        }
    }
}