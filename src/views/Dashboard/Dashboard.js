import React, { useEffect, useState } from "react";
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



import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar, DropdownButton, Dropdown, Row, Col, Container } from 'react-bootstrap';
import ExpandMore from "@material-ui/icons/ExpandMore";
import Notifications from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";


import { bugs, website, server } from "variables/general.js";

import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Redirect } from "react-router-dom";
import { getChannelPartner } from "utils/Services";

const useStyles = makeStyles(styles);

export default function Dashboard() {

	const [payload, setpayload] = useState(sessionStorage.getItem('payload'))
	const [redirect, setRedirect] = useState(false);
	const [channelCount,setChannelCount] =useState(null)
	const classes = useStyles();
	
	
	useEffect(() => {
		if (!payload) {
			return (<Redirect to="/" />)
		}
		getChannelPartner().then((res)=>{
			console.log(res)
			if(res){
			setChannelCount(res.data.Data)
			}
		}).catch((err)=>{
			console.log(err)
		})
	}, [])

	
		
	
	return (

		<div class="row" style={{ display: "flex", flexDirection: "row", padding: 8, height: "100vh", width: '100%', }}>


			<div class="col-lg-9 col-sm-12" style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ display: "flex", flexDirection: "column", }}>
					<p style={{ marginTop: 30, marginBottom: 3, fontSize: 20, paddingLeft: 5, fontWeight: 'bold' }}>Total No of Referrals</p>
					<div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginLeft: 10 }}></div>
					<div class="row">

						<div class="col-lg-4 col-sm-12">
							<div class="pl-3 pr-3 pt-3 rounded m-2 mt-3  " style={{ backgroundColor: '#fff' }}>
								<p >CUSTOMER</p>
								<div class="row ml-1" >
									<div class="col-2">
										<h3 style={{ marginTop: -5, marginLeft: -18, fontWeight: 'bold' }}>250</h3>
									</div>
									<div class="col-10 mt-2 text-right" style={{ marginTop: 10 }}>
										<br />
										<p style={{ color: 'green', alignItems: 'right', fontSize: '12px', marginTop: -37 }}>+40%</p>
										<p style={{ alignItems: 'right', fontSize: '12px', marginTop: -27, }}>This Quarter</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-sm-12">
							<div class="pl-3 pr-3 pt-3 rounded m-2 mt-3  " style={{ backgroundColor: '#fff' }}>
								<p >EMPLOYEES</p>
								<div class="row ml-1" >
									<div class="col-2">
										<h3 style={{ marginTop: -5, marginLeft: -18, fontWeight: 'bold' }}>250</h3>
									</div>
									<div class="col-10 mt-2 text-right" style={{ marginTop: 10 }}>
										<br />
										<p style={{ color: 'green', alignItems: 'right', fontSize: '12px', marginTop: -37 }}>+40%</p>
										<p style={{ alignItems: 'right', fontSize: '12px', marginTop: -27, }}>This Quarter</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-sm-12">
							<div class="pl-3 pr-3 pt-3 rounded m-2 mt-3  " style={{ backgroundColor: '#fff' }}>
								<p >CHANNEL PARTNER</p>
								<div class="row ml-1" >
									<div class="col-2">
										<h3 style={{ marginTop: -5, marginLeft: -18, fontWeight: 'bold' }}>{channelCount}</h3>
									</div>
									<div class="col-10 mt-2 text-right" style={{ marginTop: 10 }}>
										<br />
										<p style={{ color: 'red', alignItems: 'right', fontSize: '12px', marginTop: -37 }}>-40%</p>
										<p style={{ alignItems: 'right', fontSize: '12px', marginTop: -27, }}>This Quarter</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>




				<div class="mt-3" style={{ display: "flex", flexDirection: "column" }}>
					<p style={{ marginTop: 30, marginBottom: 3, fontSize: 20, paddingLeft: 5, fontWeight: 'bold' }}>Quarterly Report</p>
					<span style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginLeft: 10 }}></span>

					<div class="row">


						<div class="col-lg-4 col-sm-12 pr-0 ">
							<div class="p-3 rounded m-2 mt-3" style={{ backgroundColor: '#fff' }}>
								<div style={{ margin: 10, marginTop: 0 }}>
									<p style={{ fontSize: 18, fontWeight: '500' }}>Customer Reports</p>
									<p style={{ fontSize: 14, marginTop: -12, marginBottom: 40 }}>Show overview Jan 2019-March 2019</p>
								</div>

								<div style={{ margin: 10, marginTop: 20, marginBottom: 20 }}>
									<p style={{ fontSize: 15 }}>No. Of referrals: 250</p>
									<ProgressBar variant="primary" now={50} style={{ height: 5, marginTop: -15, width: 210 }} />
								</div>

								<div style={{ margin: 10, marginTop: 30, marginBottom: 20 }}>
									<p style={{ fontSize: 15 }}>Booking Amount Paid: 150</p>
									<ProgressBar variant="warning" now={30} style={{ height: 5, marginTop: -15, width: 210 }} />
								</div>

								<div style={{ margin: 10, marginTop: 30, marginBottom: 110 }}>
									<p style={{ fontSize: 15 }}>First Cheque: 153</p>
									<ProgressBar variant="danger" now={15} style={{ height: 5, marginTop: -15, width: 210 }} />
								</div>
							</div>
						</div>


						<div class="col-lg-8 col-sm-12 pl-0">
							<div class="p-3 rounded m-2 mt-3" style={{ backgroundColor: '#fff' }}>

								<div style={{ marginTop: 3, background: 'transparent', width: 140, borderStyle: 'solid', borderWidth: 1, borderColor: 'black', height: 30, borderRadius: 30, marginLeft: 'auto' }}>
									<span style={{ marginLeft: 10, fontSize: 12, padding: 10 }}> Select Quater</span>
									<ExpandMore className={classes.icons} style={{ marginLeft: 5 }} />
								</div>
								<CardHeader color="success" style={{ marginTop: 10, marginBottom: 50, height: 320 }}>
									<ChartistGraph
										style={{ marginTop: 20, height: "100%" }}
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
				</div>
			</div>

			<div class="col-lg-3 col-sm-12" style={{ display: "flex", flexDirection: "column", }}>
				<h style={{ marginTop: 30, fontSize: 20, paddingLeft: 5, fontWeight: 'bold' }}>Activities</h>
				<span style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginLeft: 10 }}></span>
				<div class="col-lg-12 col-sm-12 pl-0">
					<div class=" pt-3 pb-3 rounded  mt-3" style={{ backgroundColor: '#fff' }}>
						<div style={{ display: "flex", flexDirection: "row", }} >
							<img style={{ height: 35, width: 35, borderRadius: 60, margin: 10, marginLeft: 8, marginRight: 8, marginTop: 0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar" />
							<div>
								<p style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Rakesh Sharma just claimed a gift</p>
								<p style={{ marginTop: -20, fontSize: 10 }}>Rakesh Sharma just claimed a gift</p>
							</div>

						</div>
						<Divider light style={{ marginBottom: 20 }} />
						<div style={{ display: "flex", flexDirection: "row", }} >
							<img style={{ height: 35, width: 35, borderRadius: 60, margin: 10, marginLeft: 8, marginRight: 8, marginTop: 0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar" />
							<div>
								<p style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Rakesh Sharma just claimed a gift</p>
								<p style={{ marginTop: -20, fontSize: 10 }}>Rakesh Sharma just claimed a gift</p>
							</div>

						</div>
						<Divider light style={{ marginBottom: 20 }} />
						<div style={{ display: "flex", flexDirection: "row", }} >
							<img style={{ height: 35, width: 35, borderRadius: 60, margin: 10, marginLeft: 8, marginRight: 8, marginTop: 0 }}
								src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
								alt="avatar" />
							<div>
								<p style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Rakesh Sharma just claimed a gift</p>
								<p style={{ marginTop: -20, fontSize: 10 }}>Rakesh Sharma just claimed a gift</p>
							</div>

						</div>
						<Divider light style={{ marginBottom: 20 }} />
						<div style={{ display: "flex", flexDirection: "row", }} >
							<img style={{ height: 35, width: 35, borderRadius: 60, margin: 10, marginLeft: 8, marginRight: 8, marginTop: 0 }}
								src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
								alt="avatar" />
							<div>
								<p style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Rakesh Sharma just claimed a gift</p>
								<p style={{ marginTop: -20, fontSize: 10 }}>Rakesh Sharma just claimed a gift</p>
							</div>

						</div>

						<Divider light style={{ marginBottom: 20 }} />

						<div style={{ display: "flex", flexDirection: "row", marginBottom: 0 }} >
							<img style={{ height: 35, width: 35, borderRadius: 60, margin: 10, marginLeft: 8, marginRight: 8, marginTop: 0 }}
								src="https://i.imgur.com/C3EuAb2.jpg"
								alt="avatar" />
							<div>
								<p style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Rakesh Sharma just claimed a gift</p>
								<p style={{ marginTop: -20, fontSize: 10 }}>Rakesh Sharma just claimed a gift</p>
							</div>

						</div>
					</div></div>
			</div>
		</div>
	);
}
