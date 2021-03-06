/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Visible from "@material-ui/icons/VisibilityOutlined";
import Person from "@material-ui/icons/Person";
import Add from "@material-ui/icons/AddCircleOutlineOutlined";
import Delete from "@material-ui/icons/DeleteOutlineOutlined";
import Edit from "@material-ui/icons/EditOutlined";
import Block from "@material-ui/icons/BlockOutlined";
import Lock from "@material-ui/icons/LockOutlined";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserSegment from "views/UserSegment/UserSegment.js";
import ViewAll from "views/UserSegment/ViewAll";
import Uedit from "views/UserSegment/Uedit.js";
import Udelete from "views/UserSegment/Udelete.js";
import Ucreate from "views/UserSegment/Ucreate.js";
import Ublock from "views/UserSegment/Ublock.js";
//import Lock from "@material-ui/icons/LockOutlined";
import ResetPwd from "views/UserSegment/ResetPwd.js";
import Redeem from "@material-ui/icons/Redeem";
import Tier from "views/Tier/Tier.js";
import Tview from "views/Tier/Tview.js";
import Tedit from "views/Tier/Tedit.js";
import Tcreate from "views/Tier/Tcreate.js";
import Tdelete from "views/Tier/Tdelete.js";
// core components/views for Admin layout

import SiteAdmin from "views/SiteAdmin/SiteAdmin.js";
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";
import AResetPwd from "views/SiteAdmin/Aresetpwd.js";
import SiteView from "views/SiteAdmin/ViewAll";
import SiteCreate from "views/SiteAdmin/CreateAdmin";
import SiteEdit from "views/SiteAdmin/EditAdmin";




const dashboardRoutes = [

    {
        path: "/sadmin",
        name: "",
        rtlName: "Site Admin",
        icon: "",
        component: SiteAdmin,
        layout: "/admin",
        display:'none'
      },


      

      {
        path: "/adminview",
        name: "View All",
        rtlName: "User Segment",
        icon: Visible,
        component: SiteView,
        layout: "/admin"
      },
    
      {
        path: "/adminCreate",
        name: "Create",
        rtlName: "User Segment/create",
        icon: Add,
        component: SiteCreate,
        layout: "/admin"
      },
    
    
      {
        path: "/udelete",
        name: "",
        rtlName: "User Segment/delete",
        icon: "",
        component: Udelete,
        layout: "/admin"
      },
      {
        path: "/adminEdit",
        name: "",
        rtlName: "User Segment/edit",
        icon: "",
        component: SiteEdit,
        layout: "/admin"
      },
      {
        path: "/ublock",
        name: "",
        rtlName: "User Segment/block",
        icon: "",
        component: Ublock,
        layout: "/admin"
      },
      {
        path: "/resetpwdd",
        name: "",
        rtlName: "Reset Password",
        icon: "",
        component: ResetPwd,
        layout: "/admin"
      },

     
];

export default dashboardRoutes;
