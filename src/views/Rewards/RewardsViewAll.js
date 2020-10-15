/*eslint-disable*/
import React, { useState } from "react";
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
import { Button, FormControl, Select, TextField } from "@material-ui/core";


const useStyles = makeStyles(styles);

export default function RewardsView() {
  const [segment, setSegment] = useState('');
  const [tier, setTier] = useState('')
  const [condition, setCondition] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

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
  return (
    <div style={{ height: "100vh", width: '100%' }}>


      <div className='row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20, paddingLeft: 0, marginTop: -10, marginBottom: 0 }} >
        <div style={{ dispaly: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> View</div>

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
            {/* <div style={{display:'flex', flexDirection:'row'}}>
    <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> Customer</div> 
      <div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
    </div> */}
          </div>
          <span style={{ marginLeft: 15 }}>
            Select Condition
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
                <MenuItem value="Customer">Sales Value</MenuItem>
                <MenuItem value="Employee">Booking Confirm</MenuItem>
                {/* <MenuItem value="Channel Partner"></MenuItem> */}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            From
         </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }}>
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

            <TextField
              id="date"
              // label="Birthday"
              type="date"
              // defaultValue="2017-05-24"
              // className={classes.textField}
              InputProps={{
                disableUnderline:true
              }}
              InputLabelProps={{
                shrink: true,
                disableUnderline:true
              }}
            />
            </FormControl>


            {/* <div style={{height:28, width:28, backgroundColor:'#bf891b', borderRadius:80, margin:5 }}>
                  <StarRate className={classes.icons}  style={{ color:'white', fontSize:28 }}/>
                  </div>
               
                <div style={{marginLeft:40, marginBottom:-23, fontSize:15, marginTop:-32, fontWeight:'bolder' }}> Bronze</div> 
                <div style={{display:'flex', justifyContent:'flex-end', padding:-6, marginRight:8}}>   	<ExpandMore /> </div>	 */}
          </div>
        


        
          <span style={{ marginLeft: 15 }}>
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
          </div>
          <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            To
          </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
            <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

            <TextField
              id="date"
              // label="Birthday"
              type="date"
              // defaultValue="2017-05-24"
              // className={classes.textField}
              InputProps={{
                disableUnderline:true
              }}
              InputLabelProps={{
                shrink: true,
                disableUnderline:true
              }}
            />
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
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
                <MenuItem value="Channel Partner">Channel Partner</MenuItem>
              </Select>
            </FormControl>
          </div>
          </div>
          <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
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
         
          </div>
          <Button 
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
          color="primary">
              +
            </Button>

      </div>






      <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "column" }}>

        <div class="row">

          <div class="col-lg-4 col-sm-12">
            <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>


              <div className="row" style={{ display: 'flex',padding:'10px' ,flexDirection: 'row' }}>
              <div class="col-lg-6  col-md-6 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
              <h6 style={{ color:"black", fontWeight: 'bold', marginBottom: 0}}>
              REWARDS 1
              </h6>
              </div>
              <div class="col-lg-6  col-md-6 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
                  <MoreHoriz style={{ marginLeft: 'auto', color: 'gray', fontWeight: 'bold', }} onClick={handleClick}/>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                  </div>
                <div class="col-lg-12  col-md-12 col-sm-12 " style={{ display: 'flex', flexDirection: 'column', }}>

                  <div style={{ height: 100, width: "100%", backgroundColor: "#E2E3E2", marginBottom: 10, display: 'flex', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                    <img style={{ height: 100, width: "100%", }}
                      src="https://pngriver.com/wp-content/uploads/2018/04/Download-Car-Transparent-Background.png" />
                  </div>


                  {/* <div style={{ height: 30, width: 30, backgroundColor: "#bf891b", borderRadius: 35, marginTop: -28, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 35 }}>
                    <StarRate className={classes.icons} style={{ color: 'white', fontSize: 35 }} />
                  </div> */}
                </div>


                
                <div class="col-lg-12  col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>

                  <h style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 0, marginLeft: 30 }}>Maruti Swift</h>
                  <div> <Divider light style={{ marginTop: 10, marginBottom: 10, marginLeft: 30 }} /> </div>

                  <div className="row" style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>

                    <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column' }} >
                      <p style={{ fontSize: 16, color: 'gray' }}> Segment</p>

                      <p style={{ fontSize: 18, color: 'blacks', marginTop: -15 }}>Customer</p>

                    </div>


                    <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', marginLeft: -10 }}>

                      <p style={{ fontSize: 16, color: 'gray' }}> Condition</p>

                      <p style={{ fontSize: 18, color: 'blacks', marginTop: -15 }}>Site Visit</p>
                    </div>
                  </div>
</div>
                
              </div>


            </div>
          </div>
        
        </div>




        <div class="row">

       

        </div>











      </div>
    </div>







  );
}
