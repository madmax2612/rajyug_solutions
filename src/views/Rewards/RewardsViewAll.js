/*eslint-disable*/
import React, { Fragment, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ExpandMore from "@material-ui/icons/ExpandMore";

import StarRate from "@material-ui/icons/StarRate";
import DateRangeOutlined from "@material-ui/icons/DateRangeOutlined";
import Divider from "@material-ui/core/Divider";
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Delete from '@material-ui/icons/Delete';
import Clear from '@material-ui/icons/Clear';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, FormControl, Grid, Popper, Select, TextField } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { getRewards } from "utils/Services";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function RewardsView() {
  const [segment, setSegment] = useState(null);
  const [tier, setTier] = useState('')
  const [condition, setCondition] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rewardData,setRewardData]=useState([]);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [editValue,setEditValue]=useState('')
  const [redirect,setRedirecttoedit]=useState(false);
  const [error,setError]=useState(false);
useEffect(()=>{
  const data={
    "Segment":segment,
    "Condition":condition
  }
  console.log(condition,segment)
getRewards(data).then((res)=>{
console.log(res);
if(res){
  
  if(res.data.reward_data){
    setRewardData(res.data.reward_data);
  }
}
}).catch((err)=>{
if(err){
  setError(true);
}
})
},[segment,condition])

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const handleChange = (e) => {
if(e.target.name==="segment"){
  setSegment(e.target.value);
}
else if(e.target.name==='tier'){
  setTier(e.target.value);
}
else if(e.target.name==='condition'){
  setCondition(e.target.value);
}
  }

  const handleEdit=(value)=>{
    console.log("hello",value)
    if(value){
      setRedirecttoedit(true)
     setEditValue(value);
     
    }
     setAnchorEl(null);
       }
       
    if(redirect){
     return( <Redirect to={{ pathname: "/admin/REdit", state: { data: editValue } }} />)}  
  return (
    <div style={{ height: "100vh", width: '100%' }}>


      <div className='row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20, paddingLeft: 0, marginTop: -10, marginBottom: 0 }} >
        <div style={{ dispaly: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> View</div>

          <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30, }}></div>
        </div>
        {/* <div style={{ marginTop: 30, display: 'flex', justifySelf: 'flex-end', height: 35, width: 35, borderRadius: 150, backgroundColor: "#E2E3E2", }}> <MoreVertOutlined style={{ marginLeft: 5, marginTop: 4, color: 'gray', fontWeight: 'bold' }} /></div> */}

      </div>



      <div className="row m-3 p-4 " style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', marginTop: 40 }}>

        <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            Select Segment
     </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={segment}
                onChange={handleChange}
                name="segment"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
                <MenuItem value="Channel Partner">Channel Partner</MenuItem>
              </Select>
            </FormControl>
          
          </div>
         
          
          </div>
          <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            Select Condition
          </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={condition}
                onChange={handleChange}
                name="condition"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Sales Value">Sales Value</MenuItem>
                <MenuItem value="Booking Confirmed">Booking Confirmed</MenuItem>
                <MenuItem value="Registration Done">Registration Done</MenuItem>
                <MenuItem value="Site Visit"> Site Visit</MenuItem>
              </Select>
            </FormControl>
          </div>
          
                    
          </div>
          
<div>

</div>
</div>
      <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "column" }}>

        <div class="row">

         {rewardData.length>0 ?rewardData.map((res)=>{
           return(
<div class="col-lg-4 col-sm-12">
            <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>


              <div className="row" style={{ display: 'flex',padding:'10px' ,flexDirection: 'row' }}>
              <div class="col-lg-6  col-md-6 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
              <h6 style={{ color:"black", fontWeight: 'bold', marginBottom: 0}}>
              REWARDS {res.id+1}
              </h6>
              </div>
              <div class="col-lg-6  col-md-6 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
                  <MoreHoriz style={{ marginLeft: 'auto', color: 'gray', fontWeight: 'bold', }} onClick={handleClick}/>
                  <Popper
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            style={{backgroundColor:'white',width:'200px',marginRight:'180px '}}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              
          >
            <MenuItem onClick={handleClose} style={{backgroundColor:'black',color:'white',display:'flex',justifyContent:'space-between'}}>
                <div>
                Options
                </div>
                <div onClick={handleClose}>
                   <CloseIcon/>
                </div>
                </MenuItem>
                
            <MenuItem onClick={()=>handleEdit(res)}><EditIcon/>&nbsp;  Edit</MenuItem>
        
            
            <MenuItem onClick={handleClose}><DeleteIcon/>&nbsp; Delete</MenuItem>
            
          </Popper>
                  </div>
                <div class="col-lg-12  col-md-12 col-sm-12 " style={{ display: 'flex', flexDirection: 'column', }}>

                  <div style={{ height: 100, width: "100%", backgroundColor: "#E2E3E2", marginBottom: 10, display: 'flex', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                    <img style={{ height: 100, width: "100%", }}
                      src={res.RewardImage} />
                  </div>
                </div>


                
                <div class="col-lg-12  col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>

                  <h style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 0, marginLeft: 30 }}>{res.RewardName}</h>
                  <div> <Divider light style={{ marginTop: 10, marginBottom: 10, marginLeft: 30 }} /> </div>

                  <div className="row" style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>

                    <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column' }} >
                <p style={{ fontSize: 16, color: 'gray' }}> {res.RewardDiscription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           )
         }) 
  :
  <div class="col-lg-12 col-sm-12">
            <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>
  <div>No Results Found</div>  
  </div>
  </div>     
}
        </div>
      </div>
    </div>
  );
}
