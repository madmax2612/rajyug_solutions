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
import MomentUtils from "@date-io/moment";
import moment from "moment";
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
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Select, TextField, Typography } from "@material-ui/core";
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
import { AddRewards } from "utils/Services";
import { createRewards } from "utils/Services";
import { Redirect } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import { preview } from "utils/Services";
import { check } from "prettier";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})
const useStyles = makeStyles(styles);

const TextFieldComponent = (props) => {
  return <TextField {...props} disabled={true} />
}
const  CreateReward=()=> {
  
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
  const [pictures,setPictures]=useState([])
  const [fileName,setFileName]=useState('')
  const [testCount,setTestCount]=useState('');
  const [testCountOne,setTestCountOne]=useState('');
  const [testCountTwo,setTestCountTwo]=useState('');
  const [testCountThree,setTestCountThree]=useState('');
  const [finalCount,setfinalCount]=useState(0);
  const [finalCountOne,setfinalCountOne]=useState(0);
  const [finalCountTwo,setfinalCountTwo]=useState(0);
  const [finalCountThree,setfinalCountThree]=useState(0);

  const [fileLength,setFileLength]=useState('')
  const [payload,setPayload]=useState(sessionStorage.getItem("payload"))
  const [from,setFrom]=useState(new Date('2014-08-18T21:11:54'))
  const [to,setTo]=useState(new Date('2014-08-18T21:11:54'))
  const [inputValue, setInputValue] = useState(moment().format("YYYY/MM/DD"));
  const [inputValue2, setInputValue2] = useState(moment().format("YYYY/MM/DD"));
  const [selectedDateTo, setSelectedDateTo] = React.useState(moment().format("YYYY/MM/DD"));
  const [selectedDateFrom, setSelectedDateFrom] = React.useState(moment("YYYY/MM/DD"));
  const [open, setOpen] = React.useState(false);
  const [redirect,setRedirect]=useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [CountArray,setCountArray]=useState([])
  console.log(selectedDateFrom)
  
  console.log(JSON.parse(payload));
  const UserId=JSON.parse(payload)
  console.log(UserId.UserProfile.UserId)
  console.log(moment(selectedDateTo).format("YYYY/MM/DD"))
  
  console.log(JSON.stringify(selectedDateTo))

  const handleDateChange = (date) => {
    setSelectedDateTo(moment(date).format("YYYY/MM/DD"))
    setInputValue(moment(date).format("YYYY/MM/DD"))
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
    setSelectedDateFrom(moment(date).format("YYYY/MM/DD"))
    setInputValue2(moment(date).format("YYYY/MM/DD"))
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
    // setPictures([...pictures,e]);
    

console.log(e[0].name)
console.log(e.length===0)
if(e.length!==0){
  // console.log(e);       
  // console.log(e[0].name)
setOpenUpload(true)
  setPictures([...pictures,e])
  if(e.length!==0){
    const formData = new FormData();
    formData.append("myFile",e[0],e[0].name);

    setFileName(e[0].name)
    setFileLength(e[0])
    
    preview(formData).then((res)=>{
        setPictures(res.data.Image)
    })
  }

// const data={
// 	"myFile":e,
// 	"UserId":userPayload.UserId

    // }
}
}

  const classes = useStyles();
  const handleChange = (e,value) => {
// console.log(value)
if(value==="Site Visit"){
  const value=1
  setCountArray([...CountArray,value]);
}
if(value==="Booking Confirmed"){
  const value=2
  setCountArray([...CountArray,value]);
}
if(value==="Registration Done"){
  const value=3
  setCountArray([...CountArray,value]);
}

  // setCountArray(e.target.value)  
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
  // console.log(e.target.value);
  setCondition(e.target.value)
}
else if(e.target.name==='amount'){
  // console.log(e.target.value);
  setAmount(e.target.value)
}
else if(e.target.name==='rewardname'){
  // console.log(e.target.value);
  setRewardName(e.target.value)
}
else if(e.target.name==='count' ){
  if(condition==="Site Visit"||conditionOne==="Site Visit"||
  conditionTwo==="Site Visit"||conditionThree==="Site Visit"&& e.target.name==='count'){
    setfinalCount(e.target.value)
  }
  else if
    (condition==="Booking Confirmed"||conditionOne==="Booking Confirmed"||
    conditionTwo==="Booking Confirmed"||conditionThree==="Booking Confirmed"&& e.target.name==='count'){
      setfinalCountOne(e.target.value)
    }
    else if
    (condition==="Registration Done"||conditionOne==="Registration Done"||
    conditionTwo==="Registration Done"||conditionThree==="Registration Done"&& e.target.name==='count'){
      setfinalCountTwo(e.target.value)
    }
  // console.log(e.target.name==='count'||e.target.name==='counttwo'|| e.target.name==='countone'|| e.target.name==='countthree' && value==='Site Visit');
  setCount(e.target.value)
}else if(e.target.name==='countone' ){
  if(condition==="Site Visit"||conditionOne==="Site Visit"||
  conditionTwo==="Site Visit"||conditionThree==="Site Visit"&&e.target.name==='countone'){
    setfinalCount(e.target.value)
  }
  else if
    (condition==="Booking Confirmed"||conditionOne==="Booking Confirmed"||
    conditionTwo==="Booking Confirmed"||conditionThree==="Booking Confirmed"&& e.target.name==='countone'){
      setfinalCountOne(e.target.value)
    }
    else if
    (condition==="Registration Done"||conditionOne==="Registration Done"||
    conditionTwo==="Registration Done"||conditionThree==="Registration Done"&& e.target.name==='countone'){
      setfinalCountTwo(e.target.value)
    }
  // console.log(e.target.name==='countone' && value==="Booking Confirmed");
  setCountOne(e.target.value)
}else if(e.target.name==='counttwo' ){
  if(condition==="Site Visit"||conditionOne==="Site Visit"||
  conditionTwo==="Site Visit"||conditionThree==="Site Visit"&& e.target.name==='counttwo'){
    setfinalCount(e.target.value)
  }
  else if
    (condition==="Booking Confirmed"||conditionOne==="Booking Confirmed"||
    conditionTwo==="Booking Confirmed"||conditionThree==="Booking Confirmed"&& e.target.name==='counttwo'){
      setfinalCountOne(e.target.value)
    }
    else if
    (condition==="Registration Done"||conditionOne==="Registration Done"||
    conditionTwo==="Registration Done"||conditionThree==="Registration Done"&& e.target.name==='counttwo'){
      setfinalCountTwo(e.target.value)
    }
  // console.log(e.target.name==='counttwo' && value==="Registration Done");
  setCountTwo(e.target.value)
}else if(e.target.name==='countthree'){
  if(condition==="Site Visit"||conditionOne==="Site Visit"||
  conditionTwo==="Site Visit"||conditionThree==="Site Visit"&& e.target.name==='countthree'){
    setfinalCount(e.target.value)
  }
  else if
    (condition==="Booking Confirmed"||conditionOne==="Booking Confirmed"||
    conditionTwo==="Booking Confirmed"||conditionThree==="Booking Confirmed"&& e.target.name==='countthree'){
      setfinalCountOne(e.target.value)
    }
    else if
    (condition==="Registration Done"||conditionOne==="Registration Done"||
    conditionTwo==="Registration Done"||conditionThree==="Registration Done"&& e.target.name==='countthree'){
      setfinalCountTwo(e.target.value)
    }
  // console.log(e.target.value ==="countthree");
  setCountThree(e.target.value)
}
else if(e.target.name==='amount'){
  // console.log(e.target.name==='amount' && value==="Sales Value");
  setAmount(e.target.value)
}
else if(e.target.name==='rewardDescription'){
  // console.log(e.target.value);
  setRewardDescription(e.target.value)
}

else if(condition==="Sales Value"||conditionOne==="Sales Value"|| conditionTwo==="Sales Value" || conditionThree==="Sales Value"){
 setPriority()
}
  }
console.log(CountArray)
const RedirectToView=()=>{
  setRedirect(true);
}
if(redirect){
return<Redirect to="/admin/Rewardsview"/>
}

console.log(finalCount,finalCountOne,finalCountTwo,finalCountThree,amount);

const Submit=()=>{
  
//   const data={
//     "Segment":segment ,
// "RewardName": rewardName,
// "RewardDiscription":rewardDescription,
// "DateFrom":selectedDateFrom,
// "DateTo":selectedDateTo,
// "UserId ": UserId.UserProfile.UserId,
// "Condition1" :condition,
// "Condition2" :conditionOne,
// "Condition3" :conditionTwo,
// "Condition4" :conditionThree,

// "Count1":finalCount?finalCount:0,
// "Count2":finalCountOne?finalCountOne:0,
// "Count3":finalCountTwo?finalCountTwo:0,


// "ConditionPriority1":condition==="Site Visit"||conditionOne==="Site Visit"||
// conditionTwo==="Site Visit"||conditionThree==="Site Visit" ? 4:condition==="Sales Value"||conditionOne==="Sales Value"||
// conditionTwo==="Sales Value"||conditionThree==="Sales Value"?1:condition==="Registration"||conditionOne==="Registration"||
// conditionTwo==="Registration"||conditionThree==="Registration"?2:condition==="Booking Confirmed"||conditionOne==="Booking Confirmed"||
// conditionTwo==="Booking Confirmed"||conditionThree==="Booking Confirmed"?3:0
//   }
  
  // console.log(fileLength,fileName)
  
  const formData = new FormData();
  if(fileLength!==''&&fileName!==''){
    formData.append("myFile",fileLength,fileName);

  // formData.append("myFile",pictures[0]);

  formData.append("Segment",segment);
  formData.append("RewardName",rewardName);
  formData.append("RewardDiscription",rewardDescription);
  formData.append("DateFrom",selectedDateFrom);
  formData.append("DateTo",selectedDateTo);
  formData.append("Condition1",
  condition==="Site Visit"||conditionOne==="Site Visit"||conditionTwo==="Site Visit"||conditionThree==="Site Visit"?"Site Visit":''
  );
  formData.append("Condition2",
  condition==="Booking Confirmed"||conditionOne==="Booking Confirmed"||conditionTwo==="Booking Confirmed"||conditionThree==="Booking Confirmed"?"Booking Confirmed":''
  );
  formData.append("Condition3",
  condition==="Registration Done"||conditionOne==="Registration Done"||conditionTwo==="Registration Done"||conditionThree==="Registration Done"?"Registration Done":''
  
  );
  formData.append("Condition4",
  condition==="Sales Value"||conditionOne==="Sales Value"||conditionTwo==="Sales Value"||conditionThree==="Sales Value"?"Sales Value":''

  );
  formData.append("Count1",finalCount?finalCount:0);
  formData.append("Count2",finalCountOne?finalCountOne:0);
  formData.append("Count3",finalCountTwo?finalCountTwo:0);
  // formData.append("Count4",countThree);
  formData.append("Amount",amount)

formData.append("UserId", UserId.UserProfile.UserId)     
createRewards(formData).then((res)=>{
  console.log(res);
  if(res.data.success==="200"){
    console.log("Status here!")
    setOpen(true);
  }
})
}

}
const dateFormatter = str => {
  return str;
};
const dateFormatter2 = str => {
  return str;
};
// console.log(selectedDateTo,selectedDateFrom)
  // console.log(condition);
  const newf=moment(selectedDateFrom).format("YYYY/MM/DD")
  // console.log(newf)
  const handleCloseModal=()=>{
    setOpen(false);
   }
   
  const handleClickSuccessOpen = () => {
    setOpenUpload(true);
  };

  const handleCloseSuccess = () => {
    setOpenUpload(false);
  };
  // console.log(condition,conditionOne,conditionTwo,conditionThree,
    // count,countOne,countTwo,countThree
    // )
  return (
    <div style={{ height: "100vh", width: '100%' }}>
      {<Dialog
        open={openUpload}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseSuccess}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Success Message</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Successfuly uploaded Image 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccess} color="primary">
            OK
          </Button>
          
        </DialogActions>
      </Dialog>}
{
  <Dialog
  onClose={handleCloseModal} 
  aria-labelledby="customized-dialog-title" 
  open={open}
  fullWidth={true}
  >
        <DialogTitle id="customized-dialog-title" 
        onClose={handleCloseModal}
        >
          Success
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Succesfully Submitted the Reward
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={RedirectToView} style={{backgroundColor:'green',color:'white'}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
}

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
            <FormControl    style={{ minWidth: "100%", padding: '5px' }}>

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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={condition}
                onChange={(e)=>handleChange(e)}
                name="condition"
                disableUnderline={true}
                style={{border:"none"}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                { conditionOne!=='Sales Value'&&conditionTwo!=="Sales Value"&&
                conditionThree!=="Sales Value"?
                  <MenuItem value="Sales Value">Sales Value</MenuItem>
                :null}
                { conditionOne!=='Registration Done'&&conditionTwo!=="Registration Done"&&
                conditionThree!=="Registration Done"?
                <MenuItem value="Registration Done">Registration Done</MenuItem>
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
         
   <MuiPickersUtilsProvider  libInstance={moment} utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          autoOk
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          inputValue={inputValue2}
          onChange={handleDate}
          error={false}
          onError={false}
          helperText={''}
          rifmFormatter={dateFormatter}
          
          style={{paddingLeft:'10px',marginTop:'2px',marginBottom:"180px"}}
          InputProps={{
            disableUnderline:true,
            "aria-disabled":true
          }}
          TextFieldComponent={TextFieldComponent}
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
            onChange={(e)=>handleChange(e,condition)}
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
            onChange={(e) => handleChange(e,condition)}
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
 
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          autoOK
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          error={false}
          helperText={''}
          inputValue={inputValue}
          onChange={handleDateChange}
          rifmFormatter={dateFormatter2}
          style={{paddingLeft:'10px',marginTop:'2px',marginBottom:"180px"}}
          InputProps={{
            disableUnderline:true,
            "aria-disabled":true
          }}
          
          TextFieldComponent={TextFieldComponent}
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>

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
                { condition!=='Registration Done'&&conditionTwo!=="Registration Done"&&
                conditionThree!=="Registration Done"?
                <MenuItem value="Registration Done">Registration Done</MenuItem>
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="countone"
            value={countOne}
            onChange={(e)=>handleChange(e,conditionOne)}
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>

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
                { conditionOne!=='Registration Done'&&condition!=="Registration Done"&&
                conditionThree!=="Registration Done"?
                <MenuItem value="Registration Done">Registration Done</MenuItem>
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="counttwo"
            value={countTwo}
            onChange={(e)=>handleChange(e,conditionTwo)}
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => handleChange(e,conditionTwo)}
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>

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
                { conditionOne!=='Registration Done'&&conditionTwo!=="Registration Done"&&
                condition!=="Registration Done"?
                <MenuItem value="Registration Done">Registration Done</MenuItem>
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
            <FormControl style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="countthree"
            value={countThree}
            onChange={(e) => handleChange(e,conditionThree)}
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
            <FormControl  style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => handleChange(e,conditionThree)}
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
                    maxFileSize={1000000000000}
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
        <FormControl  style={{ minWidth: "100%", padding: '5px' }}>
            <input
            className='col-lg-12 col-sm-12'
            type="text"
            name="rewardname"
            value={rewardName}
            onChange={(e) => handleChange(e)}
            
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
            onChange={handleChange}
            style={{borderStyle:'none'}}
            // placeholder="Minimum 3 rows" 
            />
            </div>
           <div>
            <Button 
            onClick={()=>Submit()}
            block style={{backgroundColor:'#000000',width:'40%',color:'white',margin:'10px',padding:'5px',borderRadius:'20px'}}>
                SAVE
            </Button>

            <Button 
            onClick={()=>RedirectToView()}
            style={{backgroundColor:'white',border:'2px solid #000000',color:'#fffff',borderRadius:'20px',width:'40%'}}>
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
              src={pictures} />

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
export default CreateReward;