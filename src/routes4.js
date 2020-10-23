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
import Add from "@material-ui/icons/AddCircleOutlineOutlined";
import Delete from "@material-ui/icons/DeleteOutlineOutlined";
import Edit from "@material-ui/icons/EditOutlined";

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
import Tier from "views/Tier/Tier.js";
import Tview from "views/Tier/Tview.js";
import Tedit from "views/Tier/Tedit.js";
import Tcreate from "views/Tier/Tcreate.js";
import Rewards from "views/Rewards/RewardsViewAll";
import RewardsAdd from "views/Rewards/RewardsAdd.js";
import RewardsViewAll from "views/Rewards/RewardsViewAll.js";
import Rdel from "views/Rewards/Rdel.js";
import {RewardsEdit} from "views/Rewards/Redit";
import Adminn from "views/Adminn/Adminn.js";
import AdminResetPassword from "views/Adminn/AdminResetPassword";
import ResetPwd from "views/UserSegment/ResetPwd.js";
import LoginScreen from "views/Dashboard/LoginScreen";
import ResetPwddd from "views/Dashboard/ResetPwddd.js";



const dashboardRoutes = [

  
    {
        path: "/rewards",
        name: "Rewards",
        rtlName: "Rewards",
        icon: Redeem,
        component: Rewards,
        layout: "/admin"
      },
      {
        path: "/Rewardsview",
        name: "View All",
        rtlName: "Rewards",
        icon: Visible,
        component: RewardsViewAll,
        layout: "/admin"
      },
      
      {
        path: "/RAdd",
        name: "Add",
        rtlName: "Rewards",
        icon: Add,
        component: RewardsAdd,
        layout: "/admin"
      },
    
      {
        path: "/Rdel",
        name: "",
        rtlName: "Rewards",
        icon: "",
        component: Rdel,
        layout: "/admin"
      },
      {
        path: "/REdit",
        name: "",
        rtlName: "Rewards",
        icon: "",
        component: RewardsEdit,
        layout: "/admin"
      },
    
];

export default dashboardRoutes;
