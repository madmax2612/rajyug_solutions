import React, { useState } from "react";
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


import CustomTabs from "components/CustomTabs/CustomTabs.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar, DropdownButton, Dropdown, Alert} from 'react-bootstrap';
import ExpandMore from "@material-ui/icons/ExpandMore";
import Notifications from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";
import Person from "@material-ui/icons/Person";
import EditOutlined from "@material-ui/icons/EditOutlined";
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import ImageUploader from "react-images-upload";
import {profileUpload} from '../../utils/Services'

import { bugs, website, server } from "variables/general.js";

import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import '../../admin.css'
import { Snackbar } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function Adminn() {

	const [userData,setUserData]=useState(sessionStorage.getItem('payload'))
	const [image,setImage]=useState(sessionStorage.getItem('image'))
	const [imageError,setImageError]=useState(false);
	const [pictures, setPictures] = useState('');
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
	  setOpen(true);
	};
  
	const handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }
  
	  setOpen(false);
	};
	const newPayload=JSON.parse(userData);
	console.log(newPayload);
	const userPayload=newPayload.UserProfile
	const onDrop = e => {
		setPictures(e);
		// console.log(e[0].name)
		console.log(e.length===0)
		if(e.length!==0){
		const data={
			"myFile":e,
			"UserId":userPayload.UserId

		}
		const formData = new FormData();
		formData.append("myFile",e[0],e[0].name);
		formData.append("UserId",userPayload.UserId)
		profileUpload(formData).then((res)=>{
			console.log(res);
			if(res){
				setPictures(res.data.UserProfile.ProfileImage)
				sessionStorage.setItem('payload',JSON.stringify(res.data))
				window.location.reload();
			}
		}
		).catch((err)=>{
			if(err){
				console.log(err.response) 
			}
		})
	}
	else{
		setImageError(true)
		setOpen(true);
	}
		// console.log(e)
	  };
	  const classes = useStyles();

console.log(userPayload)
	return (
		<div class="row" style={{ display: "flex", flexDirection: "row", padding: 8, height:"100vh", width:'100%' }}>
			{
				imageError && 
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert severity="error">Image version not allowed</Alert>
				</Snackbar>
			}
			
		<div class="col-lg-8 col-sm-12" style={{ display: "flex", flexDirection: "column" , }}>
    <div   style={{ display: "flex", flexDirection: "row",marginTop:15  }}> 

         <div style={{marginLeft:15}}> 
         <div style={{  marginBottom:3, fontSize:22, fontWeight:'800'}}>Profile</div>
         <div style={{width:30, height:2, backgroundColor:'#bf891b', marginTop:3}}></div>
         </div>
				
          {/* <div style={{ marginLeft:'auto',  height:35, width:35,borderRadius:150, backgroundColor:"#E2E3E2", marginBottom:-30}}> <MoreVertOutlined  style={{marginLeft:5, marginTop:4, color:'gray', fontWeight:'bold'}}/></div> */}
					</div>
          



    <div class="col-lg-12 col-sm-12 pr-0 p-1">
		<div class=" rounded m-2 mt-3 p-4 pl-5" style={{backgroundColor: '#fff' }}>
           

  <div style={{ display: "flex", flexDirection: "column", marginBottom:20 }}>
      <p style={{marginTop:10, marginBottom:3, fontSize:18, fontWeight:'500', color:'black'}}>Account Details</p>
      <span style={{width:30, height:2, backgroundColor:'#bf891b'}}></span>
  
  
<div className="row">

 <div  className="col-lg-4 col-sm-4">
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}}> User Segment</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >Subcategory</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >User Id</div>
<div style={{fontSize:16, color:'black', fontWeight:'400',  paddingTop:20}} >Password</div>

 </div>


 <div  className="col-lg-5 col-sm-5">
<div  style={{fontSize:16, color:'black',   paddingTop:20}}>{userPayload.Segment}</div>
<div style={{fontSize:16, color:'black',   paddingTop:20}} > Assistant Channel Partner</div>
<div style={{fontSize:16, color:'black',  paddingTop:20}} >{userPayload.UserId}</div>
<div style={{fontSize:16, color:'black',   paddingTop:20}} >{userPayload.Password}</div>  
 </div>


 <div  className="col-lg-3 col-sm-4">

 <div style={{ height:150,backgroundSize:'150px 150px',backgroundImage:`url(${pictures?pictures:userPayload.ProfileImage})` ,backgroundPosition:'center', width:150,borderRadius:150, backgroundColor:"#E2E3E2", marginBottom:10, marginLeft:-22}}>
 <ImageUploader
	//   {...props}
	withLabel={false}
	  withIcon={false}
	  singleImage={true}
	  buttonText={<EditOutlined style={{color:'white', fontSize:18}} />}
	  buttonStyles={{color:'red',borderRadius:'20px'}}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".svg",".jpeg"]}
      maxFileSize={5242880}
    />
  
  
    {/* <Person   className={classes.icons}   style={{  marginTop:20, marginLeft:25, color:"white", fontSize:100}}/>
	<div onClick={editImage} style={{backgroundColor:"#28D179", height:32, width:32, borderRadius:35, marginTop:10, marginLeft:100, marginTop:-5}}>
		   <EditOutlined  onClick={()=>editImage()} style={{color:'white', fontSize:18, marginLeft:8, marginTop:4}} /></div> */}
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
	<div style={{fontSize:16, color:'black', paddingTop:20}} >{userPayload.Name}</div>
<div style={{fontSize:16, color:'black',  paddingTop:20}}> {userPayload.DOB}</div>
<div style={{fontSize:16, color:'black',   paddingTop:20}} >{userPayload.Gender}</div>
	<div style={{fontSize:16, color:'black',  paddingTop:20}} >{userPayload.MobileNo}</div>
<div style={{fontSize:16, color:'black', paddingTop:20}} > {userPayload.Email}</div>  
<div style={{fontSize:16, color:'black',   paddingTop:20}} > <br />{userPayload.HouesNo}<br/>
{userPayload.State}
  </div>
 </div>


 <div className="col">


   
 </div>


                 
</div>


</div>
</div>
</div>
</div>



{/* <div class="col-lg-4 col-sm-12" style={{ display: "flex",  flexDirection: "column"}}>
  <div class="row">
<div class="col-lg-12 col-sm-12 pr-0 p-3">

<h style={{ marginTop: 30, fontSize:20 , fontWeight:'800'  , marginLeft:6,}}>Reports</h>
				<div style={{width:30, height:2, backgroundColor:'#bf891b', marginLeft:6, marginTop:3}}></div>
							<div class="p-3 rounded m-2 mt-3" style={{backgroundColor: '#fff' }}>
								

							<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}>  <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}> <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}> <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}>  <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}>  <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>

						<div style={{display: "flex", flexDirection: "row", marginBottom:-20 }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://i.imgur.com/C3EuAb2.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:14, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:11 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#28D179", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:"auto", paddingRight:20,  marginTop:4}}>  <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
							</div>
						</div>
  </div>
  </div> */}


			
</div>










	);
}
