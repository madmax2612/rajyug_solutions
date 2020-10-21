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
import SiteAdmin from "views/SiteAdmin/SiteAdmin.js";
import Tier from "views/Tier/Tier.js";
import Tview from "views/Tier/Tview.js";
import Tedit from "views/Tier/Tedit.js";
import Tcreate from "views/Tier/Tcreate.js";
import Rewards from "views/Rewards/Rewards.js";
import RewardsAdd from "views/Rewards/RewardsAdd.js";
import RewardsViewAll from "views/Rewards/RewardsViewAll.js";
import Adminn from "views/Adminn/Adminn.js";
import AdminResetPassword from "views/Adminn/AdminResetPassword";
import ResetPwd from "views/UserSegment/ResetPwd.js";
import LoginScreen from "views/Dashboard/LoginScreen";
import ResetPwddd from "views/Dashboard/ResetPwddd.js";
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";




const dashboardRoutes = [

  
  {
    path: "/user1",
    name: "Users",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserSegment,
    layout: "/admin"
  },

      {
        path: "/useruserview",
        name: "View All",
        rtlName: "User Segment",
        icon: Visible,
        component: ViewAll,
        layout: "/admin"
      },
    
      {
        path: "/ucreate",
        name: "Create",
        rtlName: "User Segment/create",
        icon: Add,
        component: Ucreate,
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
        path: "/uedit",
        name: "",
        rtlName: "User Segment/edit",
        icon: "",
        component: Uedit,
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
        icon:  "",
        component: ResetPwd,
        layout: "/admin"
      },
];

export default dashboardRoutes;
