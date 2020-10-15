import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import RTLNavbarLinks from "./RTLNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";
import SearchRounded from "@material-ui/icons/SearchRounded";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [payload, setpayload] = useState(sessionStorage.getItem('payload'))
  const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    if (!payload) {
      setRedirect(true);
    }
    else {
      setRedirect(false);
    }
  })
  if (redirect) {
    return (<Redirect to="/" />)
  }


  function makeBrand() {
    var name;
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });



    props.routes1.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });

    props.routes2.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });

    props.routes3.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });

    props.routes4.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });

    props.routes7.map(prop => {
      console.log(prop);
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });

    props.routes5.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });

console.log(props.rtlActive)
  return (
    <AppBar className={classes.appBar + appBarClasses} style={{ background: 'white', }}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" style={{ color: 'black', fontSize: 20, fontWieght: "bold", textTransform: 'none' }}>
            {makeBrand()}
          </Button>
        </div>
        <div className={classes.searchWrapper} >
          <div style={{ background: 'transparent', width: 280, borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginLeft: -20, marginRight: 20, }}>
            <input placeholder="Search" style={{ background: 'transparent', paddingLeft: 10, borderColor: 'transparent', marginTop: 5, fontSize: 12, }} />
            <SearchRounded className={classes.icons} style={{ marginLeft: 245, marginTop: -55, fontSize: 18, color: "#bf891b" }} />
          </div>

        </div>
        <Hidden smDown implementation="css">
          {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
            style={{ marginLeft: -10 }}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
