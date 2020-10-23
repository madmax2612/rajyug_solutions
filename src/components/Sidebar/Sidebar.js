/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { List, Collapse, Typography, Container } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import Home from "@material-ui/icons/Home";
import Stars from "@material-ui/icons/Stars";
import Redeem from '@material-ui/icons/Redeem';
import ListAltIcon from '@material-ui/icons/ListAlt';

import '../../stylee.css';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import TocIcon from '@material-ui/icons/Toc';
import UserSeg from "views/UserSegment/Ublock";
import { Link } from 'react-router-dom';
import '../../stylee.css';


const useStyles = makeStyles(styles);



export default function Sidebar(props) {
  const classes = useStyles();

  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);
  const [expanded11, setExpande11] = React.useState(false);

  // const [expanded7, setExpanded7] = React.useState(false);
  const [expanded6_1, setExpanded6_1] = React.useState(false);
  const [expanded6_2, setExpanded6_2] = React.useState(false);


  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded1(isExpanded ? panel : false);
  };

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };

  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
  };

  const handleChange4 = (panel) => (event, isExpanded) => {
    setExpanded4(isExpanded ? panel : false);
  };

  const handleChange5 = (panel) => (event, isExpanded) => {
    setExpanded5(isExpanded ? panel : false);
  };

  const handleChange6 = (panel) => (event, isExpanded) => {
    setExpanded6(isExpanded ? panel : false);
  };
  const handleChange6_1 = (panel) => (event, isExpanded) => {
    setExpanded6_1(isExpanded ? panel : false);
  };

  const handleChange6_2 = (panel) => (event, isExpanded) => {
    setExpanded6_2(isExpanded ? panel : false);
  };
  const handleChange7 = (panel) => (event, isExpanded) => {
    setExpanded7(isExpanded ? panel : false);
  };

  const handleChange11 = (panel) => (event, isExpanded) => {
    setExpanded11(isExpanded ? panel : false);
  };


  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;

  }

  const { color, logo, image, logoText, routes, routes1, routes2, routes3, routes4, routes5, routes6, routes7 } = props;


  var Dashboard = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });

        const display = prop.name === "Dashboard" ? { display:"none" } : {display: "block"}
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
              {typeof prop.icon && prop.name!==''?
            <ListItem style={display} button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
            :null}
          </NavLink>
        );
      })}
    </List>
  );



  var Users = (
    <List className={classes.list}>
      {routes1.map((prop, key) => {

        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        
        const display = prop.name === "Users" ? { display:"none" } : {display: "block"}
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
              {typeof prop.icon && prop.name!==''?
            <ListItem  style={display} button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
            :null}
          </NavLink>
        );
      })}
    </List>
  );


  var SiteAdmin = (
    <List className={classes.list}>
      {routes2.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });

        const display = prop.name === "Site Admin" ? { display:"none" } : {display: "block"}
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
              {typeof prop.icon && prop.name!==''?
            <ListItem  style={display}button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
            :null}
          </NavLink>
        );
      })}
    </List>
  );



  // var Tier = (
  //   <List className={classes.list}>
  //     {routes3.map((prop, key) => {
  //       var activePro = " ";
  //       var listItemClasses;
  //       if (prop.path === "/upgrade-to-pro") {
  //         activePro = classes.activePro + " ";
  //         listItemClasses = classNames({
  //           [" " + classes[color]]: true
  //         });
  //       } else {
  //         listItemClasses = classNames({
  //           [" " + classes[color]]: activeRoute(prop.layout + prop.path)
  //         });
  //       }
  //       const whiteFontClasses = classNames({
  //         [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
  //       });
  //       const display = prop.name === "Tier" ? { display:"none" } : {display: "block"}
  //       return (
  //         <NavLink
  //           to={prop.layout + prop.path}
  //           className={activePro + classes.item}
  //           activeClassName="active"
  //           key={key}
  //         >
  //           <ListItem  style={ display}button className={classes.itemLink + listItemClasses}>
  //             {typeof prop.icon === "string" ? (
  //               <Icon
  //                 className={classNames(classes.itemIcon, whiteFontClasses, {
  //                   [classes.itemIconRTL]: props.rtlActive
  //                 })}
  //               >
  //                 {prop.icon}
  //               </Icon>
  //             ) : (
  //                 <prop.icon
  //                   className={classNames(classes.itemIcon, whiteFontClasses, {
  //                     [classes.itemIconRTL]: props.rtlActive
  //                   })}
  //                 />
  //               )}
  //             <ListItemText
  //               primary={props.rtlActive ? prop.rtlName : prop.name}
  //               className={classNames(classes.itemText, whiteFontClasses, {
  //                 [classes.itemTextRTL]: props.rtlActive
  //               })}
  //               disableTypography={true}
  //             />
  //           </ListItem>
  //         </NavLink>
  //       );
  //     })}
  //   </List>
  // );

var Advertisement =(
  <List className={classes.list}>
      {routes7.map((prop, key) => {
        console.log(prop);
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });

        const display = prop.name === "Advertisement" ? { display:"none" } : {display: "block"}
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClass
            Name="active"
            key={key}
          >

            {typeof prop.icon && prop.name!==''?
            <ListItem  style={display} button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )}


              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>:null}
          </NavLink>
        );
      })}
    </List>

)
  var Rewards = (
    <List className={classes.list}>
      {routes4.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        const display = prop.name === "Rewards" ? { display:"none" } : {display: "block"}
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            { typeof prop.icon && prop.name!==''? 
            <ListItem  style={display} button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>:null}
          </NavLink>
        );
      })}
    </List>
  );





  var Useg = (
    <List className={classes.list}>
      {routes5.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });

        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
          {typeof prop.icon!=='' && prop.name!==''?
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
            :null}
          </NavLink>
        );
      })}
    </List>
  );








  var brand = (
    <div className={classes.logo}>
      <a

        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={"https://rajyugsolutions.com/wp-content/uploads/2020/04/soil_new.png"} alt="logo" className={classes.img} />
        </div>

      </a>
    </div>
  );
  return (


    <div>

      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}

            <ExpansionPanel className={classes.list1}
              expanded1={expanded1 === 'panel1'} onChange={handleChange1('panel1')} >
              <ExpansionPanelSummary
               
              >
              <Home style={{ color: 'white', marginRight: 15 }} />
              <Link to="admin/dashboard">   <Typography style={{ color: 'white' }} >Dashboard</Typography></Link>
            </ExpansionPanelSummary>

            {Dashboard}
            </ExpansionPanel>


            {/* <ExpansionPanel className={classes.list1}
              expanded7={expanded7 === 'panel1'} onChange={handleChange7('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DashboardIcon style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/ucreate">  <Typography style={{ color: 'white' }} >User Segment</Typography></Link>
              </ExpansionPanelSummary>
              {Useg}
            </ExpansionPanel> */}


            <ExpansionPanel className={classes.list1}
              expanded2={expanded2 === 'panel1'} onChange={handleChange2('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <PersonIcon style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/user1"> <Typography style={{ color: 'white' }} >Users</Typography> </Link>
              </ExpansionPanelSummary>
              {Users}
            </ExpansionPanel>

            <ExpansionPanel className={classes.list1}
              expanded3={expanded3 === 'panel1'} onChange={handleChange3('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <PersonIcon style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/sadmin"> <Typography style={{ color: 'white' }} >   Site Admin</Typography></Link>
              </ExpansionPanelSummary>
              {SiteAdmin}
            </ExpansionPanel>



            {/* <ExpansionPanel className={classes.list1}
              expanded4={expanded4 === 'panel1'} onChange={handleChange4('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Stars style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/tier1"> <Typography style={{ color: 'white' }} >Tier</Typography></Link>
              </ExpansionPanelSummary>
              {Tier}
            </ExpansionPanel> */}

            <ExpansionPanel className={classes.list1}
              expanded5={expanded5 === 'panel1'} onChange={handleChange5('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Redeem style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/advt">  <Typography style={{ color: 'white' }} >Advertisement</Typography></Link>
              </ExpansionPanelSummary>
              {Advertisement}
            </ExpansionPanel>

            <ExpansionPanel className={classes.list1}
              expanded5={expanded5 === 'panel1'} onChange={handleChange5('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Redeem style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/rewards">  <Typography style={{ color: 'white' }} >Rewards</Typography></Link>
              </ExpansionPanelSummary>
              {Rewards}
            </ExpansionPanel>
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>

      {/* ///////////////////// Sidebar For Web Start ////////////////////////////////////   */}
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}




          <div className={classes.sidebarWrapper}>
          <div className="makeStyles-item-16">
          <ExpansionPanel className={classes.list1}
              expanded1={expanded1 === 'panel1'} onChange={handleChange1('panel1')} >
              <ExpansionPanelSummary
               
              >
              <Home style={{ color: 'white', marginRight: 15 }} />
              <div >
              <Link to="admin/dashboard">   <Typography style={{ color: 'white'}} >Dashboard</Typography></Link>
              </div>
              
            </ExpansionPanelSummary>
            {Dashboard}
            </ExpansionPanel>
            </div>

            {/* <ExpansionPanel className={classes.list1}
              expanded7={expanded7 === 'panel1'} onChange={handleChange7('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DashboardIcon style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/view">  <Typography style={{ color: 'white' }} >User Segment</Typography></Link>
              </ExpansionPanelSummary>
              {Useg}
            </ExpansionPanel> */}


            <ExpansionPanel className={classes.list1}
              expanded2={expanded2 === 'panel1'} onChange={handleChange2('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <PersonIcon style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/user1"> <Typography style={{ color: 'white' }} >Users</Typography> </Link>
              </ExpansionPanelSummary>
              {Users}
            </ExpansionPanel>


            <ExpansionPanel className={classes.list1}
              expanded3={expanded3 === 'panel1'} onChange={handleChange3('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <PersonIcon style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/sadmin"> <Typography style={{ color: 'white' }} >Site Admin</Typography></Link>
              </ExpansionPanelSummary>
              {SiteAdmin}
            </ExpansionPanel>

            <ExpansionPanel className={classes.list1}
              expanded5={expanded5 === 'panel1'} onChange={handleChange5('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Redeem style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/advt">  <Typography style={{ color: 'white' }} >Advertisement</Typography></Link>
              </ExpansionPanelSummary>
              {Advertisement}
            </ExpansionPanel>

            {/* <ExpansionPanel className={classes.list1}
              expanded4={expanded4 === 'panel1'} onChange={handleChange4('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Stars style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/tier1"> <Typography style={{ color: 'white' }} >Tier</Typography></Link>
              </ExpansionPanelSummary>
              {Tier}
            </ExpansionPanel> */}


            <ExpansionPanel className={classes.list1}
              expanded5={expanded5 === 'panel1'} onChange={handleChange5('panel1')} >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                // aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Redeem style={{ color: 'white', marginRight: 15 }} />
                <Link to="/admin/rewards">  <Typography style={{ color: 'white' }} >Rewards</Typography></Link>
              </ExpansionPanelSummary>
              {Rewards}
            </ExpansionPanel>

          </div>  {/*  ////////// */}

          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>

    </div>

  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  routes1: PropTypes.arrayOf(PropTypes.object),
  routes2: PropTypes.arrayOf(PropTypes.object),
  routes3: PropTypes.arrayOf(PropTypes.object),
  routes4: PropTypes.arrayOf(PropTypes.object),


  open: PropTypes.bool
};