import React, { useState }from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import '../../stylee.css';

import CustomTabs from "components/CustomTabs/CustomTabs.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar, DropdownButton, Dropdown, Modal} from 'react-bootstrap';
import ExpandMore from "@material-ui/icons/ExpandMore";
import Notifications from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";
import Person from "@material-ui/icons/Person";
import EditOutlined from "@material-ui/icons/EditOutlined";
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";
import Clear from "@material-ui/icons/Clear";
import Block from "@material-ui/icons/Block";
import { bugs, website, server } from "variables/general.js";
import Button from "components/CustomButtons/Button.js";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Lock from "@material-ui/icons/Lock";
import ExitToApp from "@material-ui/icons/ExitToApp";
import classNames from "classnames";
import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function UserSeg() {
    const classes = useStyles();
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

	return (
    <div class="row" style={{ display: "flex", flexDirection: "row", padding: 8, height:"100vh", width:'100%' }} >


			
				

		<div class="col-lg-8 col-sm-12" style={{ display: "flex", flexDirection: "column" , }}>
    <div   style={{ display: "flex", flexDirection: "row",marginTop:10  }}> 

         <div style={{marginLeft:15}}> 
         <div style={{  marginBottom:3, fontSize:22, fontWeight:'800'}}>Profile</div>
         <div style={{width:30, height:2, backgroundColor:'#bf891b', marginTop:3}}></div>
         </div>
				
          <div style={{ marginLeft:'auto',  height:35, width:35,borderRadius:150, backgroundColor:"#E2E3E2", marginBottom:-30}}> <MoreVertOutlined  style={{marginLeft:5, marginTop:4, color:'gray', fontWeight:'bold'}}/></div>
					</div>
          



    <div class="col-lg-12 col-sm-12 pr-0 p-1">
		<div class=" rounded m-2 mt-3 p-4 pl-5" style={{backgroundColor: '#fff' }}>
           

  <div style={{ display: "flex", flexDirection: "column", marginBottom:20 }}>
      <p style={{marginTop:10, marginBottom:3, fontSize:18, fontWeight:'500', color:'black'}}>Account Details</p>
      <span style={{width:30, height:2, backgroundColor:'#bf891b'}}></span>
  
  
<div className="row">

 <div className="col-lg-4 col-sm-4">
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}}> User Segment</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >Subcategory</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >User Id</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >Password</div>

 </div>


 <div className="col-lg-5 col-sm-5">
<div  style={{fontSize:16, color:'black',   paddingTop:20}}>Channel Partner</div>
<div style={{fontSize:16, color:'black',   paddingTop:20}} > Assistant Channel Partner</div>
<div style={{fontSize:16, color:'black',  paddingTop:20}} >SACH@123</div>
<div style={{fontSize:16, color:'black',   paddingTop:20}} >Rg@123</div>  
 </div>


 <div className="col-lg-3 col-sm-4" style={{display:'flex'  }}>

 <div style={{ height:150, width:150,borderRadius:150, backgroundColor:"#E2E3E2", marginBottom:10, marginLeft:-22}}>
 <img style={{ height: 150, width: 150, borderRadius: 150,}}
  src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
  alt="avatar"/>
  </div>
                              
   
 </div>


                 
</div>
<Divider light  style={{marginBottom:15, marginTop:30, }}/>


<p style={{marginTop:10, marginBottom:3, fontSize:18, fontWeight:'500', color:'black'}}>Personal Information</p>
      <span style={{width:30, height:2, backgroundColor:'#bf891b'}}></span>
  

<div className="row">

 <div className="col">
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} > Name</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >Date Of Birth</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}}>Gender</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >Mobile Number</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}}>Email ID</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >Address </div>

 </div>


 <div className="col">
<div style={{fontSize:16, color:'black', paddingTop:20}} >RamChandra Narayan</div>
<div style={{fontSize:16, color:'black',  paddingTop:20}}> 20/06/1998</div>
<div style={{fontSize:16, color:'black',   paddingTop:20}} >Male</div>
<div style={{fontSize:16, color:'black',  paddingTop:20}} >+91 9876543210</div>
<div style={{fontSize:16, color:'black', paddingTop:20}} > abc@gmail.com</div>  
<div style={{fontSize:16, color:'black',   paddingTop:20}} >172/2 Ghandi Marg, near Nucleus Mall <br />
  Pune, Maharashtra, India <br />
  411001
  </div>
 </div>


 <div className="col">


   
 </div>


                 
</div>


</div>
</div>
</div>




    </div>

<div class="col-lg-4 col-sm-12" style={{ display: "flex",  flexDirection: "column"}}>
  <div class="row">
<div class="col-lg-12 col-sm-12 pr-0 p-3">

<h style={{ marginTop: 30, fontSize:20 , fontWeight:'800'  , marginLeft:6,}}>Reports</h>
				<div style={{width:30, height:2, backgroundColor:'#bf891b', marginLeft:6, marginTop:3}}></div>
							<div class="p-3 rounded m-2 mt-3" style={{backgroundColor: '#fff' }}>
								

									<div style={{ margin: 10, marginTop: 20, marginBottom:20}}>
										<p style={{ fontSize: 15 }}>No. Of referrals:250</p>
										<ProgressBar variant="primary" now={50} style={{ height: 5, marginTop: -15, width: 210 }} />
									</div>

									<div style={{ margin: 10, marginTop: 30, marginBottom:20 }}>
										<p style={{ fontSize: 15 }}>Booking Amount Paid: 150</p>
										<ProgressBar variant="warning" now={30} style={{ height: 5, marginTop: -15, width: 210 }} />
									</div>

									<div style={{ margin: 10, marginTop: 30, marginBottom:20 }}>
										<p style={{ fontSize: 15 }}>First Cheque: 153</p>
										<ProgressBar variant="danger" now={15} style={{ height: 5, marginTop: -15, width: 210 }} />
									</div>
							</div>
						</div>
  </div>


  <div class="col-lg-12 col-sm-12 pr-0 p-1">
  <h style={{ marginTop: 30, fontSize:20 , fontWeight:'800'  , marginLeft:6}}>Reports</h>
				<div style={{width:30, height:2, backgroundColor:'#bf891b', marginLeft:6, marginTop:3}}></div>

    <div class="p-3 rounded m-2 mt-3" style={{backgroundColor: '#fff' }}>
        


                <CardHeader color="success" style={{ marginTop: 10, marginBottom:20, height:320 }}>
                    <ChartistGraph
                        style={{ marginTop: 20, height:"100%" , width:'100%',}}
                        className="ct-chart"
                        data={dailySalesChart.data}
                        type="Line"
                        options={dailySalesChart.options}
                        listener={dailySalesChart.animation}
                    />
                </CardHeader>
    </div>
</div>
  </div>

 
  <div class="col-lg-8 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'center', marginTop:30, marginBottom:20}}>
       <div className="graddred" onClick={() => setShow(true)} style={{ paddingBottom:30,width:150, height:35, borderWidth:1, borderColor:'red', borderRadius:30, borderStyle:'solid',justifyContent:'center' }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:30, marginTop:5}}> DEACTIVATE</div>
       </div>

       <Modal
        show={show}
        onHide={() => setShow(false)}
        
        style={{paddingTop:320, 
            backgroundColor: 'rgba(100,100,100,0.6)'}}>
          <div  style={{width:1500, height:340 ,}}>
          <Clear style={{color:'gray', fontSize:22, justifyContent:'flex-end', marginTop:20, marginLeft:455}} onClick={handleClose}  />
          <div  style={{backgroundColor:"red", height:33, width:33, borderRadius:80, marginTop:10, marginLeft:220, marginTop:4}}>   <VisibilityOffOutlined style={{color:'white', fontSize:25, marginLeft:4, marginTop:3,fontWieght:"1000"}} /></div>
		 <div style={{fontSize:22, color:"black", fontWeight:'bold', marginLeft:120, paddingTop:10}}> Deactivate Confirmation</div>
         <div style={{fontSize:16, color:"black",  marginLeft:60, paddingTop:30}}> This if you want to permanenttly deactivate a teammate. <br />
         <span style={{marginLeft:60}}> This acccount cannot be restored</span>
         </div>			
         
         <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:95, marginTop:40}}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>

       <div className="graddred" style={{ paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'red', zIndex:5, borderRadius:30, borderStyle:'solid', marginLeft:255, marginTop:-35 }}>
       <div  style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:25, marginTop:5}}> DEACTIVATE</div>
       </div>
              
     </div>
        
        
         
      </Modal>

       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>
       </div>      
</div>
	);
}
