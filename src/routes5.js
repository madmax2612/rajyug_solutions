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
import Home from "@material-ui/icons/Home";
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Createe from "views/NUserseg/Createe";
import Deactivatee from 'views/NUserseg/Deactivatee';
import Editt from 'views/NUserseg/Editt';
import Add from "@material-ui/icons/AddCircleOutlineOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";
import Visible from "@material-ui/icons/VisibilityOutlined";
import { view } from "views/NUserseg/view";
const dashboardRoutes = [

  {
    path: "/view",
    name: "View All",
    rtlName: "",
    icon: Visible,
    component: view,
    layout: "/admin"
  },
  {
    path: "/create",
    name: "Create",
    rtlName: "لوحة القيادة",
    icon: Add,
    component: Createe,
    layout: "/admin"
  },

  {
    path: "/deact",
    name: "",
    rtlName: "لوحة القيادة",
    icon: "",
    component: Deactivatee,
    layout: "/admin"
  },

  {
    path: "/ediit",
    name: "",
    rtlName: "لوحة القيادة",
    icon: "",
    component: Editt,
    layout: "/admin"
  },
  
  
];

export default dashboardRoutes;