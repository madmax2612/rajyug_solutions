import React, { useEffect, useState } from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
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

// import {
// 	dailySalesChart,
// 	emailsSubscriptionChart,
// 	completedTasksChart,
// } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Redirect } from "react-router-dom";
import { getChannelPartner ,getQuaterlyDropDown,getQuaterlyReport,getGraphQuaterly} from "utils/Services";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Bar, Line } from "react-chartjs-2";

const useStyles = makeStyles(styles);


export default function Dashboard() {

	const [payload, setpayload] = useState(sessionStorage.getItem('payload'))
	const [redirect, setRedirect] = useState(false);
	const [channelCount, setChannelCount] = useState(null)
	const [graphSelect, setGraphSelect] = useState('')
	const [percentage,setPercentage]=useState('')
	const [color,setColor]=useState('');
	const [quaterlyDropDown,setQuaterlyDropDown]=useState([])
	const [qauterReport,setQuaterReport]=useState('');
	const [graphData,setGraphData]=useState([])
	const [labels,setLabels]=useState([])
	const classes = useStyles();
	

	const state = {
		labels: [graphData.quarter,"Current Quarter"],
		datasets: [
		  {
			fill: true,
			lineTension: 0.5,
			backgroundColor: 'rgb(19,239,143)',
			borderColor: 'rgb(6,188,109)',
			borderWidth: 2,
			tooltip:'rgb(255,255,255)',
			data: [graphData.previous,graphData.Current]
		  },
		  
		],
	  }
	useEffect(() => {

		if (!payload) {
			setRedirect(true);
			return;
		}
		getChannelPartner().then((res) => {
			console.log(res)
			if (res) {
				setChannelCount(res.data.Data)
				setPercentage(res.data.PrevData);
				let percentage=res.data.PrevData
			if(percentage&& percentage > 0){
				console.log(percentage > 0)
				setColor('green')
			}
				else{
				setColor('red')}
			}
		}).catch((err) => {
			console.log(err)
		})
	}, [])
	
	useEffect(()=>{
		const graphData ={
			"quarters":graphSelect
		}
		getGraphQuaterly(graphData).then((res)=>{
			console.log(res.data);
			setGraphData(res.data);
		})

		getQuaterlyDropDown().then((res)=>{
			console.log(res.data);
			if(res.data){
				setQuaterlyDropDown(res.data.data)
				const data1=res.data.data

				// const last5 = data1.filter((el, index)=> {
				// 	console.log(data1.length)
				// 	return index >= data1.length - 5
				//   });
				//   setQuaterlyDropDown(last5)
			}
		})

		const data={
			"quarters":graphSelect
		}
			getQuaterlyReport(data).then((res)=>{
			console.log(res.data);
			if(res.data){
				setQuaterReport(res.data);
			}
			})
	},[graphSelect])

	const handleChange = (e) => {
		if (e) {
			setGraphSelect(
				e.target.value
			)
			
		// const data={
		// 	"quarters":e.target.value
		// }
		// 	getQuaterlyReport(data).then((res)=>{
		// 	console.log(res.data);
		// 	if(res.data){
		// 		setQuaterReport(res.data);
		// 	}
		// 	})
		}
	}
	if (redirect) {
		return (<Redirect to="/" />)
	}
	console.log(qauterReport)
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
										<h3 style={{ marginTop: -5, marginLeft: -18, fontWeight: 'bold' }}>0</h3>
									</div>
									<div class="col-10 mt-2 text-right" style={{ marginTop: 10 }}>
										<br />
										<p style={{ color: 'green', alignItems: 'right', fontSize: '12px', marginTop: -37 }}>0%</p>
										<p style={{ alignItems: 'right', fontSize: '12px', marginTop: -27, }}>This Quarter</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-sm-12">
							<div class="pl-3 pr-3 pt-3 rounded m-2 mt-3  " style={{ backgroundColor: '#fff' }}>
								<p>EMPLOYEES</p>
								<div class="row ml-1" >
									<div class="col-2">
										<h3 style={{ marginTop: -5, marginLeft: -18, fontWeight: 'bold' }}>0</h3>
									</div>
									<div class="col-10 mt-2 text-right" style={{ marginTop: 10 }}>
										<br />
										<p style={{ color: 'green', alignItems: 'right', fontSize: '12px', marginTop: -37 }}>0%</p>
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
										<p style={{ color: color, alignItems: 'right', fontSize: '12px', marginTop: -37 }}>{percentage}%</p>
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
							<div class="p-2 rounded m-2 mt-3" style={{ backgroundColor: '#fff' }}>
								<div style={{ margin: 10, marginTop: 0 }}>
									<p style={{ fontSize: 18, fontWeight: '500' }}>Customer Reports</p>
									<p style={{ fontSize: 14, marginTop: -12, marginBottom: 40 }}>{qauterReport.overview}</p>
								</div>

								<div style={{ margin: 10, marginTop: 20, marginBottom: 20 }}>
									<p style={{ fontSize: 15 }}>No. Of referrals: {qauterReport.TotalReferrals}</p>
									{/* <ProgressBar variant="primary" now={50} style={{ height: 5, marginTop: -15, width: 210 }} /> */}
								</div>
								<div style={{ margin: 10, marginTop: 30, marginBottom: 20 }}>
									<p style={{ fontSize: 15 }}>Booking Amount Paid: {qauterReport.Book}</p>
									{/* <ProgressBar variant="warning" now={30} style={{ height: 5, marginTop: -15, width: 210 }} /> */}
								</div>
								<div style={{ margin: 10, marginTop: 30, marginBottom: 20 }}>
									<p style={{ fontSize: 15 }}>Registration Done: {qauterReport.Registration}</p>
									{/* <ProgressBar variant="danger" now={15} style={{ height: 5, marginTop: -15, width: 210 }} /> */}
								</div>
								<div style={{ margin: 10, marginTop: 30, marginBottom: 110 }}>
									<p style={{ fontSize: 15 }}>Site Visit: {qauterReport.SiteVisit}</p>
									{/* <ProgressBar variant="danger" now={15} style={{ height: 5, marginTop: -15, width: 210 }} /> */}
								</div>	
							</div>
						</div>

						<div class="col-lg-8 col-sm-12 pl-0">
							<div class="p-3 rounded m-2 mt-3" style={{ backgroundColor: '#fff' }}>

								<div style={{  background: 'transparent', width: 140, borderStyle: 'solid', borderWidth: 1, borderColor: 'black', height: 30, borderRadius: 30, marginLeft: 'auto' }}>
									<FormControl style={{width:'100%',paddingLeft:'5px'}} className={classes.formControl}>			
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={graphSelect}
											onChange={handleChange}
											disableUnderline={true}
											
										>
											<MenuItem value="">
												<>None</>
											</MenuItem>
										{quaterlyDropDown && quaterlyDropDown.map((res)=>
										{
											return(
											
											<MenuItem value={res.QuarterDate}>{res.QuarterDate}</MenuItem>
										)})}

										</Select>
									</FormControl>
								</div>
								<CardHeader color="" style={{ marginTop: 10,width:"100%" }}>
									{/* <ChartistGraph
										style={{ marginTop: 20, height: "100%" }}
										className="ct-chart"
										data={dailySalesChart.data}
										type="Line"
										options={dailySalesChart.options}
										listener={dailySalesChart.animation}
									/> */}
									<Line
									data={state}
									style={{height:'500px'}}
									options={{
										
										legend:{
										display:false,
										position:'right'
										}
									}}
									/>
								</CardHeader>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
