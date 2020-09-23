import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Divider from "@material-ui/core/Divider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import ExpandMore from "@material-ui/icons/ExpandMore";
import StarRate from "@material-ui/icons/StarRate";
import DateRangeOutlined from "@material-ui/icons/DateRangeOutlined";

import '../../stylee.css';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { addTier } from 'utils/Services';
import Rewards from 'views/Rewards/Redit';
import { Redirect } from 'react-router-dom';
const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Tier() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [customer, setCustomer] = useState('');
  const [values, setValues] = useState('');
  const [select, setSelect] = useState('');
  const [tierName, setTierName] = useState('')
  const [description, setDescription] = useState('')
  const [rewards, setRewards] = useState('')
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === 'customerpartner') {
      console.log(event.target.name)
      setCustomer(event.target.value);
    }
    else if (event.target.name === 'values') {
      console.log(event.target.name);

      setValues(event.target.value);
    }
    else if (event.target.name === 'select') {
      console.log(event.target.name);

      setSelect(event.target.value);
    }
    else if (event.target.name === 'tierName') {
      console.log(event.target.name);

      setTierName(event.target.value);
    }
    else if (event.target.name === 'rewards') {
      console.log(event.target.name);

      setRewards(event.target.value);
    }
    else {
      setDescription(event.target.value)
    }
  };

  const onSubmit = () => {
    const data = {
      "TierName": tierName,
      "Description": description,
      "Segment": select,
      "Value": values,
      "Rewards": rewards,

    }
    console.log(data);

    addTier(data).then((res) => {
      console.log(res);
      if (res.data.message === "Tier Add successfully") {
        setShow(true);

      }
      else {
        setErrorShow(true);
        setErrorMessage(res.data.message)
      }
    }).catch((err) => {
      console.log(err);
      setErrorShow(true);
      setErrorMessage(err.response.data.message)
    })
  }

  const RedirectToView = () => {
    setRedirect(true)
  }

  const handleClose = () => {
    setShow(false)

  };

  const clearFunction = () => {
    setCustomer('');
    setValues('');
    setSelect('');
    setTierName('');
    setRewards('')
    setDescription('')
  }

  if (redirect) {
    return (<Redirect to="/admin/tierview" />)
  }
  return (
    <div style={{ height: "100vh", width: '100%' }} >
      {
        errorShow &&
        <Modal show={errorShow} onHide={() => setErrorShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Error Occured</Modal.Title>
          </Modal.Header>
          <Modal.Body>{errorMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setErrorShow(false)}>
              Close
          </Button>

          </Modal.Footer>
        </Modal>
      }
      <div style={{ marginLeft: 15, marginTop: -10 }}>

        <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> User Segment</div>

        <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30 }}></div>
      </div>






      <div className="row m-3 p-4 " style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', marginTop: 40 }}>

        <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
        
        <span style={{ marginLeft: 15 }}>
            Select
        </span>
        <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 30 }} >
        
          <FormControl variant="outlined" style={{ minWidth: "100%" ,padding:'5px'}}>
         
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={select}
              onChange={handleChange}
              label="Age"
              name="select"
              disableUnderline={true}          
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Customer">Customer</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
              <MenuItem value="ChannelPartner">Channel Partner</MenuItem>
            </Select>
          </FormControl>
</div>

        </div>


        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }} >
          <span style={{ marginLeft: 15 }}>
            Select
        </span>
          <input className='col-lg-12 col-sm-12' type="text"
            name="select"
            // value={select}
            // onChange={(e) => handleChange(e)}
            placeholder="Assistant Channel Partner"
            style={{
              paddingLeft: 10, fontSize: 15, background: 'transparent',
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: '#bf891b',
              height: 40, borderRadius: 40,
            }} />
        </div>


      </div>





      <div style={{ marginLeft: 15, marginTop: -20 }}>
        <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Tier Information</div>

        <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30 }}></div>

      </div>



      <div className="row m-3 p-4 pl-4 pr-5 " style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', marginTop: 40 }}>

        <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            Tier Name
        </span>

          <StarRate className={classes.icons} style={{ color: 'white', fontSize: 28 }} />

          <input className='col-lg-12 col-sm-12'
            onChange={(e) => handleChange(e)}
            name="tierName"
            type="text"
            value={tierName}
            placeholder="Tier Name"
            style={{ paddingLeft: 10, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />


        </div>


        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }} >
        <span style={{ marginLeft: 15 }}>
            Select
        </span>
        <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 30 }} >
        
          <FormControl variant="outlined" style={{ padding: '5px', minWidth: "100%" }}>
          
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={values}
              onChange={handleChange}
              disableUnderline={true}
             
              name="values"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="10000000-50000000">1- 5 Cr</MenuItem>
              <MenuItem value="50000000-15000000">5-15 Cr</MenuItem>
              <MenuItem value="150000000-300000000">15-30 Cr</MenuItem>
            </Select>
          </FormControl>
</div>

        </div>


        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }} >
          <span style={{ marginLeft: 15 }}>
            Available Rewards
 </span>
          <input
            className='col-lg-12 col-sm-12'
            type="number"
            name="rewards"
            value={rewards}
            onChange={(e) => handleChange(e)}
            placeholder="45" style={{ paddingLeft: 10, marginBottom: 15, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
        </div>

        <div className='col-lg-12 col-sm-12 mt-3' style={{ marginRight: 0 }} >
          <div style={{ marginLeft: 15 }}>
            Description
</div>

          <textarea className='col-lg-12 col-sm-12'
            name="description"
            value={description}
            onChange={handleChange}
            rows="4" cols="50" style={{ background: 'transparent', marginBottom: 20, padding: 10, height: 130, borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', borderRadius: 25, }} >

          </textarea>
        </div>

      </div>




      <Modal
        show={show}
        onHide={() => setShow(false)}
        style={{
          backgroundColor: 'rgba(100,100,100,0.6)'
        }}>
        <div style={{ padding:'20px'}}>
          {/* <Clear style={{ color: 'gray', fontSize: 22, justifyContent: 'flex-end', marginTop: 20, marginLeft: 455 }} onClick={handleClose} /> */}
          <div style={{ backgroundColor: "#4FF48E", height: 33, width: 33, borderRadius: 80, marginTop: 10, marginLeft: 220, marginTop: 4 }}>   
          <Check style={{ color: 'white', fontSize: 25, marginLeft: 4, marginTop: 3, fontWieght: "1000" }} /></div>
          <div style={{ fontSize: 22, color: "black", fontWeight: 'bold', marginLeft: 180, paddingTop: 10 }}> Successful</div>
          <div style={{ fontSize: 16, color: "gray", marginLeft: 100, paddingTop: 20 }}> Your Tier has been created successfully
         </div>

          <div style={{marginTop:'10px',display:'flex',alignItems:'center',justifyContent:'center'  }}>

            <div>
              <Button
                style={{
                  borderWidth: 1,
                  width: '150px',
                  borderColor: 'black',
                  borderRadius: 30,
                  color:'white',
                  backgroundColor:'black'
                }}
                onClick={RedirectToView}
              >
                OK
            </Button>
            </div>
          </div>
        </div>
      </Modal>



      <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-end', marginTop: 30, marginBottom: 20 }}>
        <div
          //  onClick={() => setShow(true)}
          onClick={onSubmit}
          className="gradd" style={{ paddingBottom: 30, width: 140, height: 35, borderWidth: 1, borderColor: 'black', zIndex: 5, borderRadius: 30, borderStyle: 'solid', }}>
          <div style={{ fontSize: 15, fontWeight: 'bolder', color: 'white', letterSpacing: 10, marginLeft: 45, marginTop: 5 }}> CREATE</div>



        </div>
        <div 
        onClick={()=>RedirectToView()}
        className="gradd" style={{ background: 'white', paddingBottom: 30, width: 140, height: 35, borderWidth: 1, borderColor: 'black', zIndex: 5, borderRadius: 30, borderStyle: 'solid', backgroundColor: 'white', marginLeft: 30, }}>
          <div 
            style={{
              fontSize: 15, fontWeight: 'bolder', color: 'black',
              letterSpacing: 10, marginLeft: 40, marginTop: 5
            }}> CANCEL</div>
        </div>
      </div>

    </div>



  );
}
