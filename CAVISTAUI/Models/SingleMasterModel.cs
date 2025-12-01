using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CAVISTAUI.Models
{
    public class SingleMasterModel
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Active { get; set; }
        public string UserID { get; set; }
        public string Mode { get; set; }
        public string FormName { get; set; }
        public string FormID { get; set; }
        public string Add { get; set; }
        public string Modify { get; set; }
        public string Variant { get; set; }
        public string View { get; set; }
        public string Cancel { get; set; }
        public string ViewPassword { get; set; }
    }
}