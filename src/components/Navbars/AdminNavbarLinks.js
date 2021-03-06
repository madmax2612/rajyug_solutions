import React, { useEffect, useState } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import EditOutlined from "@material-ui/icons/EditOutlined";
import Notifications from "@material-ui/icons/Notifications";
import Lock from "@material-ui/icons/Lock";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import {Link} from 'react-router-dom'
import { getNotification } from "utils/Services";
import { seenNotification } from "utils/Services";
const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const [userData,setUserData]=useState(sessionStorage.getItem('payload'))
  const [notification,setNotification]=useState('')

  const newPayload=JSON.parse(userData);
  // console.log(newPayload.UserProfile.ProfileImage);
  const Image=newPayload?newPayload.UserProfile.ProfileImage:''
   
  useEffect(()=>{
    const body={
      "UserId":newPayload?newPayload.UserProfile.UserId:''
    }
    getNotification(body).then((res)=>{
      console.log(res);
      setNotification(res.data.notification)
    })
  },[])



  const handleClickNotification = event => {
    
    const body={
      "UserId":newPayload.UserProfile.UserId
    }
    getNotification(body).then((res)=>{
      console.log(res);
      setNotification(res.data.notification)
    })
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = (res) => {
    console.log(res);
    const data={
      id:res.id
    }
    seenNotification(data).then((response)=>{
      console.log(response)
    })
    setOpenNotification(null);
    
  };
  const handleClickAway=()=>{
    setOpenNotification(null)
    
  }
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
   setOpenProfile(null)
  };
  
   
 const handlelogout=()=>{
   sessionStorage.clear();
 }
console.log(notification)
 
 
	console.log(newPayload);
  return (
    <div>
      
      <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}></span>
          <Hidden mdUp implementation="css">
            <p onClick={handleCloseNotification} className={classes.linkText}>
              Notification
            </p>
          </Hidden>
        </Button>
        
        <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <MenuList role="menu" >
                  
                   {notification && notification.map((res)=>{
                    //  console.log(res)
                    return(
                      <>
                      {res.SeenStatus===false
                      &&
                      <MenuItem
                      onClick={()=>handleCloseNotification(res)}
                      className={classes.dropdownItem}
                    >   
                    <small>{res.Notification}</small>
                    <br/>
                    <strong>{res.Description}</strong>
                     </MenuItem>}
                    
                    </>
                    )
                    })}
                  
               
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      </ClickAwayListener>
      <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}>
        <img style={{ height:30, width:30, borderRadius:30}} 
        src={Image} 
        alt="avatar" />
        <div style={{paddingLeft:'10px',marginTop:'15px'}}>
        <p>{newPayload?newPayload.UserProfile.Name:''}</p>
        </div>
        </Button>
      <div className={classes.manager}>

       <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                  <Link to="/admin/sadmin" >
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      
                      <EditOutlined style={{ fontSize:15, marginRight:10}}/>
                       My Profile                 
                    </MenuItem>
                    </Link>
                 <Divider light />

                 <Link to="resetpwdd">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      <Lock style={{ fontSize:15, marginRight:10}}/>
                      Change Password
                     
                    </MenuItem>
                    </Link>

                    <Divider light />

                    <Link to="/">
                    <MenuItem
                      onClick={handlelogout}
                      className={classes.dropdownItem}
                    >
                      <ExitToApp style={{ fontSize:15, marginRight:10}}/>
                      Logout
                    </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>

        
         <p style={{marginRight:30}}>{}</p>
           
          
        
      </div>
    </div>
  );
}