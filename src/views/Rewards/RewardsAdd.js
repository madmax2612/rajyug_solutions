/*eslint-disable*/
import React, { Fragment, useState } from "react";
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
import DateTimePicker from 'react-datetime-picker';
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Delete from '@material-ui/icons/Delete';
import Clear from '@material-ui/icons/Clear';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, FormControl, Grid, Select, TextField } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import '../../admin.css'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ImageUploader from "react-images-upload";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(styles);

export default function CreateReward() {
  const [segment, setSegment] = useState('');
  const [tier, setTier] = useState('')
  const [condition, setCondition] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addRow,setAddRow]=useState([])
  const [firstRow,setFirstRow]=useState(false)
  const [secondRow,setSecondRow]=useState(false)
  const [thirdRow,setThirdRow]=useState(false)
  const [conditionOne,setConditionOne]=useState('')
  const [count,setCount]=useState('');
  const [countOne,setCountOne]=useState('');
  const [countTwo,setCountTwo]=useState('');
  const [countThree,setCountThree]=useState('');
  const [conditionTwo,setConditionTwo]=useState('')
  const [conditionThree,setConditionThree]=useState('')
  const [amount,setAmount]=useState('')
  const [rewardName,setRewardName]=useState('')
  const [rewardDescription,setRewardDescription]=useState('')
  const [priority,setPriority]=useState('')

  const [from,setFrom]=useState(new Date('2014-08-18T21:11:54'))
  const [to,setTo]=useState(new Date('2014-08-18T21:11:54'))
  const [selectedDateTo, setSelectedDateTo] = React.useState(new Date('2014-08-18'));
  const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date('2014-08-18'));

  console.log(selectedDateFrom)
  console.log(JSON.stringify(selectedDateTo))
  console.log(selectedDateTo)
  console.log(JSON.stringify(selectedDateTo))

  const handleDateChange = (date) => {
    setSelectedDateTo(date)
    // console.log(selectedDateFrom)
    // console.log(selectedDateTo)

    console.log(date)
    // if(e==='from'){
    //   console.log(e.target.value)
    //   setFrom(e.target.value);
    // }
    // else if(e.target.name==='to'){
    //   console.log(e.target.value)
    //   setTo(e.target.value);
    // }
    
  };
  const handleDate = (date) => {
    setSelectedDateFrom(date)
    console.log(date)
    // if(e==='from'){
    //   console.log(e.target.value)
    //   setFrom(e.target.value);
    // }
    // else if(e.target.name==='to'){
    //   console.log(e.target.value)
    //   setTo(e.target.value);
    // }
    
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDrop = e => {
    setPictures([...picture,e]);
    console.log(e);       
console.log(e[0].name)
console.log(e.length===0)
if(e.length!==0){
// const data={
// 	"myFile":e,
// 	"UserId":userPayload.UserId

    // }
}
}

  const classes = useStyles();
  const handleChange = (e) => {
if(e.target.name==="segment"){
  setSegment(e.target.value);
}

else if(e.target.name==='conditionone'){
  setConditionOne(e.target.value);
}
else if(e.target.name==='conditiontwo'){
  setConditionTwo(e.target.value);
}
else if(e.target.name==='conditionthree'){
  setConditionThree(e.target.value);
}
else if(e.target.name==='condition'){
  console.log(e.target.value);
  setCondition(e.target.value)
}
else if(e.target.name==='amount'){
  console.log(e.target.value);
  setAmount(e.target.value)
}
else if(e.target.name==='rewardname'){
  console.log(e.target.value);
  setRewardName(e.target.value)
}
else if(e.target.name==='count'){
  console.log(e.target.value);
  setCount(e.target.value)
}else if(e.target.name==='countone'){
  console.log(e.target.value);
  setCountOne(e.target.value)
}else if(e.target.name==='counttwo'){
  console.log(e.target.value);
  setCountTwo(e.target.value)
}else if(e.target.name==='countthree'){
  console.log(e.target.value);
  setCountThree(e.target.value)
}
else if(e.target.name==='amount'){
  console.log(e.target.value);
  setAmount(e.target.value)
}
else if(e.target.name==='rewardDescription'){
  console.log(e.target.value);
  setRewardDescription(e.target.value)
}

else if(condition==="Sales Value"||conditionOne==="Sales Value"|| conditionTwo==="Sales Value" || conditionThree==="Sales Value"){
 setPriority()
}
  }
const Submit=()=>{
  const data={
    "Segment":segment ,
"RewardName": rewardName,
"RewardDiscription":rewardDescription,
"DateFrom":selectedDateFrom,
"DateTo":selectedDateTo,

"Condition1" :conditio,
 

"Count1":count,
"Count2":countOne,
"Count3":countTwo,
"Count4":countThree,

"ConditionPriority1":"",
"ConditionPriority2":"",
"ConditionPriority3":"",
"ConditionPriority4":"",

  }
}
console.log(selectedDateTo,selectedDateFrom)
  // console.log(condition);
  return (
    <div style={{ height: "100vh", width: '100%' }}>


      <div className='row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20, paddingLeft: 0, marginTop: -10, marginBottom: 0 }} >
        <div style={{ dispaly: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> ADD</div>

          <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30, }}></div>
        </div>
        <div style={{ marginTop: 30, display: 'flex', justifySelf: 'flex-end', height: 35, width: 35, borderRadius: 150, backgroundColor: "#E2E3E2", }}> <MoreVertOutlined style={{ marginLeft: 5, marginTop: 4, color: 'gray', fontWeight: 'bold' }} /></div>

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
          <span style={{ marginLeft: 15 }}>
            Select Condition
          </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={condition}
                onChange={(e)=>handleChange(e)}
                name="condition"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                { conditionOne!=='Sales Value'&&conditionTwo!=="Sales Value"&&
                conditionThree!=="Sales Value"?
                  <MenuItem value="Sales Value">Sales Value</MenuItem>
                :null}
                { conditionOne!=='Registeration'&&conditionTwo!=="Registeration"&&
                conditionThree!=="Registeration"?
                <MenuItem value="Registeration">Registeration</MenuItem>
                :null}
                 { conditionOne!=='Booking Confirmed'&&conditionTwo!=="Booking Confirmed"&&
                conditionThree!=="Booking Confirmed"?
                <MenuItem value="Booking Confirmed">Booking Confirmed</MenuItem>
                :null}
                { conditionOne!=='Site Visit' && conditionTwo!=="Site Visit"&&
                conditionThree!=="Site Visit"?
                <MenuItem value="Site Visit">Site Visit</MenuItem>
                :null}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            From
         </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }}>
          {/* <DatePicker 
          locale={false}
          format="yyyy/MM/dd"
          selected={selectedDateFrom} 
          style={{paddingLeft:'10px',borderBottom:'none',marginTop:'2px',marginBottom:"180px"}}
          onChange={date => setSelectedDateFrom(date)} 
          /> */}
   <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          value={selectedDateFrom}
          onChange={handleDate}
          style={{paddingLeft:'10px',marginTop:'2px',marginBottom:"180px"}}
          InputProps={{
            disableUnderline:true
          }}
          
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        </MuiPickersUtilsProvider>
          </div>
          {condition!=="Sales Value"&&condition!==''?<> <span style={{ marginLeft: 15 }}>
            Count
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="count"
            value={count}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
          :
          condition==="Sales Value"?
          <> <span style={{ marginLeft: 15 }}>
            Amount
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
         :null }

        
        
          </div>
         
          <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            To
          </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
          {/* <DatePicker 
         format="yyyy/MM/dd"
          selected={selectedDateTo} 
          style={{paddingLeft:'10px',borderBottom:'none',marginTop:'2px',marginBottom:"180px"}}
          value={selectedDateTo}
          onChange={date => setSelectedDateTo(date)} 
          
          /> */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          value={selectedDateTo}
          onChange={handleDateChange}
          style={{paddingLeft:'10px',marginTop:'2px',marginBottom:"180px"}}
          InputProps={{
            disableUnderline:true
          }}
          
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
     </MuiPickersUtilsProvider>
     
      
          </div>
          {condition!==""&&<Button 
          style={{
            border:'1px solid black',
            borderRadius:'20px',
            padding:"5px",
            height:'20px',
            minWidth:'0px',
            marginTop:'35px',
            fontSize:'20px',
            color:'black'
          }}
          color="primary"
          onClick={()=>setFirstRow(true)}
          >
              +
            </Button>}

          </div>
          
          <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
         
          </div>
        
          <div class="col-lg-12 col-sm-12" style={{  backgroundColor: 'white',display: "flex", flexDirection: "column" }}>
        <div class="row">
        {
        firstRow
         &&
          <>
          <div class="col-lg-4 col-sm-12 col-md-4">
            <span>
              Select Condition
            </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={conditionOne}
                onChange={(e)=>handleChange(e)}
                name="conditionone"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                { condition!=='Sales Value'&&conditionTwo!=="Sales Value"&&
                conditionThree!=="Sales Value"?
                  <MenuItem value="Sales Value">Sales Value</MenuItem>
                :null}
                { condition!=='Registeration'&&conditionTwo!=="Registeration"&&
                conditionThree!=="Registeration"?
                <MenuItem value="Registeration">Registeration</MenuItem>
                :null}
                 { condition!=='Booking Confirmed'&&conditionTwo!=="Booking Confirmed"&&
                conditionThree!=="Booking Confirmed"?
                <MenuItem value="Booking Confirmed">Booking Confirmed</MenuItem>
                :null}
                { condition!=='Site Visit' && conditionTwo!=="Site Visit"&&
                conditionThree!=="Site Visit"?
                <MenuItem value="Site Visit">Site Visit</MenuItem>
                :null}
              </Select>
            </FormControl>
          </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-md-4">
          {conditionOne!=="Sales Value"&& conditionOne!==''?<> <span style={{ marginLeft: 15 }}>
            Count
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="countone"
            value={countOne}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
          :
          conditionOne==="Sales Value"?
          <> <span style={{ marginLeft: 15 }}>
            Amount
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
         :null }
          </div>
          {conditionOne!==""&&<Button 
          style={{
            border:'1px solid black',
            borderRadius:'20px',
            padding:"5px",
            height:'20px',
            minWidth:'0px',
            marginTop:'35px',
            fontSize:'20px',
            color:'black'
          }}
          color="primary"
          onClick={()=>setSecondRow(true)}
          >
              +
            </Button>}
        </>
}      
{/* <div class="col-lg-4 col-sm-12 col-md-4">
          {conditionOne!=="Sales Value"&& conditionOne!==''?<> <span style={{ marginLeft: 15 }}>
            Count
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="rewards"
            // value={rewards}
            // onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
          :
          conditionOne==="Sales Value"?
          <> <span style={{ marginLeft: 15 }}>
            Amount
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="rewards"
            // value={rewards}
            // onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
         :null }
</div> */}

    </div>
          </div>
          <div class="col-lg-12 col-sm-12" style={{  backgroundColor: 'white',display: "flex", flexDirection: "column" }}>
        <div class="row">
        {
        secondRow
         &&
          <>
          <div class="col-lg-4 col-sm-12 col-md-4">
            <span>
              Select Condition
            </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={conditionTwo}
                onChange={(e)=>handleChange(e)}
                name="conditiontwo"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                { conditionOne!=='Sales Value'&&condition!=="Sales Value"&&
                conditionThree!=="Sales Value"?
                  <MenuItem value="Sales Value">Sales Value</MenuItem>
                :null}
                { conditionOne!=='Registeration'&&condition!=="Registeration"&&
                conditionThree!=="Registeration"?
                <MenuItem value="Registeration">Registeration</MenuItem>
                :null}
                 { conditionOne!=='Booking Confirmed'&&condition!=="Booking Confirmed"&&
                conditionThree!=="Booking Confirmed"?
                <MenuItem value="Booking Confirmed">Booking Confirmed</MenuItem>
                :null}
                { conditionOne!=='Site Visit' && condition!=="Site Visit"&&
                conditionThree!=="Site Visit"?
                <MenuItem value="Site Visit">Site Visit</MenuItem>
                :null}
              </Select>
            </FormControl>
          </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-md-4">
          {conditionTwo!=="Sales Value"&& conditionTwo!==''?<> <span style={{ marginLeft: 15 }}>
            Count
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="counttwo"
            value={countTwo}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
          :
          conditionTwo==="Sales Value"?
          <> <span style={{ marginLeft: 15 }}>
            Amount
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
         :null }
          </div>
          {conditionTwo!==""&&<Button 
          style={{
            border:'1px solid black',
            borderRadius:'20px',
            padding:"5px",
            height:'20px',
            minWidth:'0px',
            marginTop:'35px',
            fontSize:'20px',
            color:'black'
          }}
          color="primary"
          onClick={()=>setThirdRow(true)}
          >
              +
            </Button>}
        </>
}      

    </div>
          </div>

          <div class="col-lg-12 col-sm-12" style={{  backgroundColor: 'white',display: "flex", flexDirection: "column" }}>
        <div class="row">
        {
        thirdRow
         &&
          <>
          <div class="col-lg-4 col-sm-12 col-md-4">
            <span>
              Select Condition
            </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={conditionThree}
                onChange={(e)=>handleChange(e)}
                name="conditionthree"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                { conditionOne!=='Sales Value'&&conditionTwo!=="Sales Value"&&
                condition!=="Sales Value"?
                  <MenuItem value="Sales Value">Sales Value</MenuItem>
                :null}
                { conditionOne!=='Registeration'&&conditionTwo!=="Registeration"&&
                condition!=="Registeration"?
                <MenuItem value="Registeration">Registeration</MenuItem>
                :null}
                 { conditionOne!=='Booking Confirmed'&&conditionTwo!=="Booking Confirmed"&&
                condition!=="Booking Confirmed"?
                <MenuItem value="Booking Confirmed">Booking Confirmed</MenuItem>
                :null}
                { conditionOne!=='Site Visit' && conditionTwo!=="Site Visit"&&
                condition!=="Site Visit"?
                <MenuItem value="Site Visit">Site Visit</MenuItem>
                :null}
              </Select>
            </FormControl>
          </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-md-4">
          {conditionThree!=="Sales Value"&& conditionThree!==''?<> <span style={{ marginLeft: 15 }}>
            Count
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="countthree"
            value={countThree}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
          :
          conditionThree==="Sales Value"?
          <> <span style={{ marginLeft: 15 }}>
            Amount
          </span>
        
         
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>
            
          </div>
          </>
         :null }
          </div>
          
        </>
}      
    </div>
          </div>

      
      </div>






      <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "column" }}>

        <div class="row">
        <div class="col-lg-8 col-sm-12 col-md-8">
    <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>


      <div className="row" style={{ display: 'flex',padding:'20px' ,flexDirection: 'row' }}>
      <div class="col-lg-12  col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
      <p style={{ fontSize:'14px',color:"black", fontWeight: 'bold', marginBottom: 0}}>
      Rewards
      </p>
  <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: 0, }}></div>
      </div>
      
        <div class="col-lg-4  col-md-4 col-sm-12 " style={{ display: 'flex', flexDirection: 'column', }}>

          <div style={{ height: 150, width: "100%",border:'2px solid lightgray', borderRadius:'10px', marginBottom: 10,  marginTop: 10, alignItems: 'center' }}>
           <div style={{paddingLeft:'0px',paddingTop:'20px',paddingRight:'20px',fontSize:'14px'}}>
           <div style={{paddingLeft:'40px'}}>
           Drag & Drop to
            upload a file
            </div>
            <div >
            <ImageUploader
                    withLabel={false}
                withIcon={false}
                singleImage={true}
                buttonText="Select File" 
                buttonStyles={{color:'white',padding:'4px',marginTop:'-130px',fontSize:"14px",marginRight:'40px',borderRadius:'20px'}}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".svg",".png",".jpeg"]}
                    maxFileSize={5242880}
                />
           </div>
           </div>
          </div>
        </div>
        <div class="col-lg-8  col-md-8 col-sm-12 " style={{ display: 'flex', flexDirection: 'column', }}>
        <span>
          Reward Name
        </span>
        <div style={{ padding:'10px',background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', borderRadius: 40, marginBottom: 15 }}>
        <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="text"
            name="rewardname"
            value={rewardName}
            onChange={(e) => handleChange(e)}
            placeholder="45" 
            style={{ 
             fontSize: 15, 
             borderStyle:'none',
             background: 'transparent',  
             borderWidth: 1, 
             height: 40, 
             }}
              />
            
            </FormControl>

        </div>
        
        
        Terms & Conditions
            <div style={{ padding:'10px',background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', borderRadius: 40, marginBottom: 15 }}>
            <TextareaAutosize 
            rowsMin={3} 
            cols={43}
            name="rewardDescription"
            value={rewardDescription}
            style={{borderStyle:'none'}}
            placeholder="Minimum 3 rows" />
            </div>
           <div>
            <Button block style={{backgroundColor:'#000000',width:'40%',color:'white',margin:'10px',padding:'5px',borderRadius:'20px'}}>
                SAVE
            </Button>

            <Button style={{backgroundColor:'white',border:'2px solid #000000',color:'#fffff',borderRadius:'20px',width:'40%'}}>
                CANCEL
            </Button>
            </div> 
        </div>
        </div>
        </div>
        </div>

    
              <div class="col-lg-4 col-sm-12">
            <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>


              <div className="row" style={{ display: 'flex',padding:'10px' ,flexDirection: 'row' }}>
              <div className="row" style={{ display: 'flex',padding:'10px' ,flexDirection: 'row' }}>
      <div class="col-lg-12  col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
      <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Preview</div>
  <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -25, }}></div>
  <img style={{ height: 100,marginTop:20, width: "100%" }}
              src="https://pngriver.com/wp-content/uploads/2018/04/Download-Car-Transparent-Background.png" />

      </div>
      </div>
                </div>   

            </div>
          </div>
        
        </div>

        <div class="row">
        </div>
      </div>
      {/* <Button 
      
      style={{margin:'20px'}}>
      Add More Rewards
      </Button> */}

    </div>







  );
}
