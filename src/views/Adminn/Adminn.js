import React from "react";
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
import {ProgressBar, DropdownButton, Dropdown} from 'react-bootstrap';
import ExpandMore from "@material-ui/icons/ExpandMore";
import Notifications from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";
import Person from "@material-ui/icons/Person";
import EditOutlined from "@material-ui/icons/EditOutlined";
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";



import { bugs, website, server } from "variables/general.js";

import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Adminn() {
	const classes = useStyles();
	return (
		<div style={{ display: "flex", flex: "1", flexDirection: "row",  height:"100vh", width:'100%'}}>
			
			
			<div style={{ display: "flex", flex: "0.7", flexDirection: "column",}}>
				<div style={{ display: "flex", flexDirection: "column",  }}>
					<div   style={{ display: "flex", flexDirection: "row",  }}> 
					<p style={{marginTop:30, marginBottom:3, fontSize:22, fontWeight:'bold'}}>Profile</p>
					<div style={{marginLeft:980, marginTop:30, height:35, width:35,borderRadius:150, backgroundColor:"#E2E3E2", marginBottom:-30}}> <MoreVertOutlined  style={{marginLeft:5, marginTop:4, color:'gray', fontWeight:'bold'}}/></div>
					</div>
					
					<span style={{width:30, height:2, backgroundColor:'#bf891b'}}></span>
					<GridContainer>
						<GridItem >
						
                        <Card style={{width:1090}}>
           

                        <div style={{ display: "flex", flexDirection: "column", marginBottom:20 }}>
                            <p style={{marginTop:10, marginBottom:3, fontSize:18, fontWeight:'500'}}>Account Details</p>
                            <span style={{width:30, height:2, backgroundColor:'#bf891b'}}></span>
                        
                         <div style={{display:"flex", flexDirection:'row'}}>
						 <div style={{ display: "flex", flexDirection: "column" , marginBottom:20}}>
							<div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

								<div style={{marginRight:130, fontSize:16, fontWeight:"400"}}> User Segment</div>

								<div  style={{fontSize:14}}>Administrator</div>

							</div>   


							<div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

							<div style={{marginRight:175, fontSize:16, fontWeight:"400"}}> User ID</div>

							<div  style={{fontSize:14}}>SACH123</div>

							</div>


							<div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

								<div style={{marginRight:155, fontSize:16, fontWeight:"400"}}> Password</div>

								<div  style={{fontSize:14}}>Rg@325</div>

							</div> 
                              
                       </div>

					   <div style={{marginLeft:540, marginTop:-10, height:150, width:150,borderRadius:150, backgroundColor:"#E2E3E2"}}>
                        <Person   className={classes.icons}   style={{  marginTop:20, marginLeft:25, color:"white", fontSize:100}}/>
                        <div  style={{backgroundColor:"#4FF48E", height:32, width:32, borderRadius:35, marginTop:10, marginLeft:100, marginTop:-5}}>   <EditOutlined  style={{color:'white', fontSize:18, marginLeft:8, marginTop:4}} /></div>
						  
					   </div>
					   
                      </div>


					

					   </div>
                       <Divider light  style={{marginBottom:20}}/>

                       <div style={{ display: "flex", flexDirection: "column", marginBottom:20 }}>
                            <p style={{marginTop:10, marginBottom:3, fontSize:18, fontWeight:'500'}}>Personal Information</p>
                            <span style={{width:30, height:2, backgroundColor:'#bf891b'}}></span>
                        
                         
                        <div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

                            <div style={{marginRight:185, fontSize:16, fontWeight:"400"}}> Name</div>

                            <div  style={{fontSize:14}}>RamChandra Narayan</div>

                         </div>   


                         <div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

                        <div style={{marginRight:135, fontSize:16, fontWeight:"400"}}> Date Of Birth</div>

                        <div  style={{fontSize:14}}>20/06/1998</div>

                        </div>


                         <div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

                            <div style={{marginRight:175, fontSize:16, fontWeight:"400"}}> Gender</div>

                            <div  style={{fontSize:14}}>Male</div>

                         </div> 

                         <div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

                            <div style={{marginRight:115, fontSize:16, fontWeight:"400"}}> Mobile Number</div>

                            <div  style={{fontSize:14}}>+91 9876543210</div>

                         </div> 

                         <div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

                            <div style={{marginRight:165, fontSize:16, fontWeight:"400"}}> Email ID</div>

                            <div  style={{fontSize:14}}>abc@gmail.com</div>

                         </div> 

                         <div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

                            <div style={{marginRight:165, fontSize:16, fontWeight:"400"}}> Address</div>

                            <div  style={{fontSize:14}}>172/2 Ghandi Marg, near Nucleus Mall <br />
                            Pune, Maharashtra, India <br />
                            411001
                            </div>

                         </div> 
                              
                       </div>

                      </Card>

         
						</GridItem>
					</GridContainer>
				</div>
				
			</div>


			<div style={{ display: "flex", flex: "0.3", flexDirection: "column",}}>
				<h style={{ marginTop: 30, fontSize:20 }}>Activities</h>
				<span style={{width:30, height:2, backgroundColor:'#bf891b'}}></span>
				<GridItem>
					<Card style={{marginLeft: -10, }}>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>
						<div style={{display: "flex", flexDirection: "row", }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						<Divider light  style={{marginBottom:20}}/>

						<div style={{display: "flex", flexDirection: "row", marginBottom:-20 }} >
							<img style={{ height: 40, width: 40, borderRadius: 60, margin: 10, marginTop:0 }}
								src="https://i.imgur.com/C3EuAb2.jpg"
								alt="avatar"/>
								<div>
								<p style={{  marginTop:0, fontSize:16, fontWeight:'bold' }}>Don Dyes</p>
							    <p style={{  marginTop:-20, fontSize:12 }}>Ask to change reset password</p>
								</div>
								
								<div  style={{backgroundColor:"#4FF48E", height:23, width:23, borderRadius:80, marginTop:10, marginLeft:60, marginTop:4}}>   <Check style={{color:'white', fontSize:18, marginLeft:3, marginTop:-2,fontWieght:"1000"}} /></div>
								<div  style={{backgroundColor:"red", height:22, width:22, borderRadius:80, marginTop:10, marginLeft:10, marginTop:4}}>   <Clear style={{color:'white', fontSize:18, marginLeft:2, marginTop:-4,fontWieght:"1000"}} /></div>
							</div>
						
					</Card>
				</GridItem>
			</div>
		</div>
	);
}
