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
import Stars from "@material-ui/icons/Stars";
import Redeem from "@material-ui/icons/Redeem";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserSegment from "views/UserSegment/UserSegment.js";
import ViewAll from "views/UserSegment/ViewAll";
import Uedit from "views/UserSegment/Uedit.js";
import Udelete from "views/UserSegment/Udelete.js";
import Ucreate from "views/UserSegment/Ucreate.js";
import Ublock from "views/UserSegment/Ublock.js";
import SiteAdmin from "views/SiteAdmin/SiteAdmin.js";

import Tview from "views/Tier/Tview.js";
import Tier1 from "views/Tier/Tier1.js";
import Tedit from "views/Tier/Tedit.js";
import Tcreate from "views/Tier/Tcreate.js";
import Tdelete from "views/Tier/Tdelete.js";
import Rewards from "views/Rewards/Rewards.js";
import RewardsAdd from "views/Rewards/RewardsAdd.js";
import RewardsViewAll from "views/Rewards/RewardsViewAll.js";
import Adminn from "views/Adminn/Adminn.js";
import AdminResetPassword from "views/Adminn/AdminResetPassword";
import ResetPwd from "views/UserSegment/ResetPwd.js";
import LoginScreen from "views/Dashboard/LoginScreen";
import ResetPwddd from "views/Dashboard/ResetPwddd.js";




const dashboardRoutes = [
  {
    path: "/tier1",
    name: "Tier",
    rtlName:"Tier",
    icon: Stars,
    component: Tier1,
    layout: "/admin"
  },
  
    
      {
        path: "/tierview",
        name: "View All",
        rtlName:"Tier",
        icon: Visible,
        component: Tview,
        layout: "/admin"
      },
    
      {
        path: "/tcreate",
        name: "Create",
        rtlName:"Tier/create",
        icon: Add,
        component: Tcreate,
        layout: "/admin"
      },

      
      {
        path: "/tdelete",
        name: "Delete",
        rtlName:"Tier/delete",
        icon: Delete,
        component: Tdelete,
        layout: "/admin"
      },
      {
        path: "/tedit",
        name: "Edit",
        rtlName:"Tier/edit",
        icon: Edit,
        component: Tedit,
        layout: "/admin"
      },
];

export default dashboardRoutes;
