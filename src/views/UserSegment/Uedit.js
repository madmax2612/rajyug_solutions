import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DateRangeOutlined from "@material-ui/icons/DateRangeOutlined";
import avatar from "assets/img/faces/marc.jpg";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import { Modal } from 'react-bootstrap';
import Divider from "@material-ui/core/Divider";
import '../../stylee.css';
import { FormControl, Grid, MenuItem, Select, TextField } from "@material-ui/core";
import { editUsers } from "utils/Services";
import { getStates } from "utils/Services";
import { Redirect } from "react-router-dom";


//import {DropdownMultiple, Dropdown} from 'reactjs-dropdown-component';
const styles = {
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

export default function Ucreate(props) {
  console.log(props);
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.location.state && props.location.state.data?props.location.state.data.Name:'');
  const [segment, setSegment] = useState(props.location.state && props.location.state.data?props.location.state.data.Segment:'');
  const [email, setEmail] = useState(props.location.state && props.location.state.data?props.location.state && props.location.state.data.Email:'')
  const [gender, setGender] = useState(props.location.state && props.location.state.data? props.location.state.data.Gender:'')
  const [mobile, setMobile] = useState(props.location.state && props.location.state.data?props.location.state.data.MobileNo:'')
  const [errorShow, setErrorShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const [city, setCity] = useState(props.location.state && props.location.state.data?props.location.state.data.City:'')
  const [state, setState] = useState(props.location.state && props.location.state.data?props.location.state.data.State:'')
  const [pincode, setPincode] = useState(props.location.state && props.location.state.data?props.location.state.data.Pincode:'')
  const [dob, setDob] = useState(props.location.state && props.location.state.data?props.location.state.data.DOB:'')
  const [houseNo, setHouseNo] = useState(props.location.state && props.location.state.data?props.location.state.data.HouesNo:'')
  const [id,setId] = useState(props.location.state && props.location.state.data?props.location.state.data.UserId:'')
  const [stateData,setStateData]=useState('')
  const[redirect,setRedirect]=useState(false)
  const [country,setCountry]=useState('')

  useEffect(()=>{
getStates().then((res)=>{
console.log(res.data.States);
setStateData(res.data.States)
})
      },[])

      const RedirectToView = () => {
        setRedirect(true)
      }
    
      if (redirect) {
        return (<Redirect to="/admin/useruserview" />)
      }
    

  const handleDateChange = (date) => {
    // setSelectedDate(date);
  };
  const handleChange = (event) => {
    if (event.target.name === 'Name') {
      console.log(event.target.name)
      setName(event.target.value);
    }
    else if (event.target.name === 'Segment') {
      console.log(event.target.name);

      setSegment(event.target.value);
    }
    else if (event.target.name === 'Email') {
      console.log(event.target.name);

      setEmail(event.target.value);
    }
    else if (event.target.name === 'Gender') {
      console.log(event.target.name);

      setGender(event.target.value);
    }
    else if (event.target.name === 'MobileNo') {
      console.log(event.target.name);

      setMobile(event.target.value);
    }
    else if (event.target.name === 'City') {
      console.log(event.target.name);

      setCity(event.target.value);
    }
    else if (event.target.name === 'State') {
      console.log(event.target.name);

      setState(event.target.value);
    }
    else if (event.target.name === 'Pincode') {
      console.log(event.target.name);

      setPincode(event.target.value);
    }
    else if (event.target.name === 'DOB') {
      console.log(event.target.name);

      setDob(event.target.value);
    }
    else if (event.target.name === 'Country') {
      console.log(event.target.name);

      setCountry(event.target.value);
    }
    else {
      setHouseNo(event.target.value)
    }
  };

  const handleClose = () => setShow(false);



  const clearFunction = () => {
    setName('')
    setSegment('')
    setEmail('')
    setGender('')
    setMobile('')
    setPincode('')
    setCity('')
    setDob('')
    setHouseNo('')
    setState('')
  }

  const onSubmit = () => {
    const data = {
      "UserId":id,
      "Name": name,
      "Segment": segment,
      "Email": email,
      "Gender": gender,
      "MobileNo": mobile,
      "City": city,
      "State": state,
      "Pincode": pincode,
      "DOB": dob,
      "HouesNo": houseNo

    }
    editUsers(data).then((res)=>{
      console.log(res)
      if(res.data.success==="200"){
        setShow(true)
      }
      else{
        setErrorShow(true)
        setErrorMessage(res.data.message)
      }
    }).catch((err)=>{
      console.log(err)
      setErrorShow(true)
      console.log(err.response.data.message)
      setErrorMessage(err.response.data.message)
    })
  }

  console.log(dob);
  return (
    <div style={{ height: "100vh", width: '100%' }} >
      {
        errorShow &&
        <Modal show={errorShow} onHide={() => setErrorShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Error Occured</Modal.Title>
          </Modal.Header>
          <Modal.Body>{errorMessage?errorMessage:'Fill credentials Properly'}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>setErrorShow(false)}>
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
            Customer Partner
         </span>
         <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 30 }} >
        
          <FormControl variant="outlined" style={{ minWidth: "100%",paddingLeft:"10px",padding:"5px" }}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={segment}
              onChange={handleChange}
              name="Segment"
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



        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }} >
        <span style={{ marginLeft: 15 }}>
            Channel Partner
         </span>

          <input className='col-lg-12 col-sm-12'
            name=""
            type="text"
            placeholder="Assistant Channel Partner"
            style={{ paddingLeft: 10, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
        </div>

      </div>


      <div style={{ marginLeft: 15 }}>
        <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Personal Information</div>

        <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30 }}></div>

      </div>



      <div className="row m-3 p-4" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', marginTop: 40 }}>

        <div></div>
        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >


          <div style={{ marginLeft: 15 }}>
            First Name
        </div>

          <input
            value={name}
            name="Name"
            onChange={(e) => handleChange(e)}
            className='col-lg-12 col-sm-12' type="text" placeholder="RamChandra" style={{ paddingLeft: 10, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 30 }} />
        </div>
        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >
          <div style={{ marginLeft: 15 }}>
            Last Name
          </div>

          <input
          className='col-lg-12 col-sm-12' type="text" placeholder="Narayan" style={{ paddingLeft: 10, fontSize: 15, background: 'transparent', marginBottom: 30, borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
        </div>


        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            Date Of Birth
         </span>
          <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 30 }} >

            <form className={classes.container} noValidate>
              <TextField
                id="date"
                type="date"
                name="DOB"
                value={dob}
                onChange={(e)=>handleChange(e)}
                defaultValue="2017-05-24"
                style={{width:'100%',paddingRight:'15px',paddingLeft:"15px"}}
                className={classes.textField}
                InputProps={{disableUnderline:true}}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          
          </div>
        </div>

        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }}  >


          <div style={{ marginLeft: 15 }}>
            Gender
         </div>
         <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 30 }} >

         <FormControl variant="outlined" style={{ minWidth: "100%",padding:"5px",paddingLeft:'10px' }}>
         
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={gender}
              onChange={handleChange}
              name="Gender"
              disableUnderline={true}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          {/* <input className='col-lg-12 col-sm-12'
          name="Gender"
          onChange={handleChange}
          type="text" placeholder="Male" style={{ paddingLeft: 10, marginBottom: 20, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} /> */}
        </div>
</div>


        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }}  >


          <div style={{ marginLeft: 15 }}>
            Mobile No.
        </div>

          <input 
          type="number"
          value={mobile}
          onChange={handleChange}
          name="MobileNo"
          className='col-lg-12 col-sm-12' type="text" placeholder="+91 9876543210" style={{ paddingLeft: 10, marginBottom: 15, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
        </div>
        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >


          <div style={{ marginLeft: 15 }}>
            Email ID
         </div>

          <input 
          value={email}
          name="Email"
          onChange={handleChange}
          className='col-lg-12 col-sm-12' type="text" placeholder="abc@gmail.com" style={{ paddingLeft: 10, marginBottom: 15, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
        </div>


      </div>

      <div style={{ marginLeft: 15 }}>
        <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Address Details</div>

        <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30 }}></div>
      </div>
      <div className="row m-3 p-4 " style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', marginTop: 40, }}>

        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >


          <div style={{ marginLeft: 15 }}>
            House Number / Street Name
         </div>

          <input 
          value={houseNo}
          name="HouseNo"
          onChange={handleChange}
          className='col-lg-12 col-sm-12' type="text" placeholder="172/2 Ghandhi Marg, near Nucleus Mall" style={{ paddingLeft: 10, marginBottom: 30, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
        </div>



        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            City
         </span>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              
          <input className='col-lg-12 col-sm-12' 
          value={city}
          name="City"
          onChange={(e)=>handleChange(e)}
          type="text"  
          style={{ paddingLeft: 10, marginBottom: 30, 
          fontSize: 15, background: 'transparent', 
          borderStyle: 'solid', borderWidth: 1, 
          borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
                 
                 
              <div style={{ marginLeft: 'auto', padding: 6 }}>   </div>
            </div>
       
        </div>



        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >
          <span style={{ marginLeft: 15 }}>
            State
         </span>
         <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 30 }} >
        
        
       
            {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input className='col-lg-12 col-sm-12'
          name="State"
          value={state}
          onChange={handleChange}
          type="text" placeholder=""
           style={{ paddingLeft: 10, marginBottom: 30, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />

             
            </div> */}
           <FormControl variant="outlined" style={{ minWidth: "100%", padding: "5px",paddingLeft:'10px' }}>
              {/* <InputLabel id="demo-simple-select-outlined-label"></InputLabel> */}
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state}
                onChange={handleChange}
                name="State"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {stateData && stateData.map((res)=>{
                  return(
                  <MenuItem value={res.StateName}>{res.StateName}</MenuItem>
                  )})}
              </Select>
            </FormControl>
        </div>
        </div>

        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }}  >
        <span style={{ marginLeft: 15 }}>
            Country
         </span>
          <div style={{ background: 'transparent', marginBottom: 15, borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} >

          <div style={{ display: 'flex', flexDirection: 'row' }}>
          <FormControl variant="outlined" style={{ minWidth: "100%", padding: "5px" }}>
              {/* <InputLabel id="demo-simple-select-outlined-label"></InputLabel> */}
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={country}
                onChange={handleChange}
                name="Country"
                disableUnderline={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">India</MenuItem>
                
              </Select>
            </FormControl>
           
    
          </div>
          {/* </div> */}
        </div>          
        </div>


        <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >
          <div style={{ marginLeft: 15 }}>
            Pin Code
          </div>

          <input 
          value={pincode}
          name="Pincode"
          onChange={handleChange}
          className='col-lg-12 col-sm-12' type="text" placeholder="411007" style={{ paddingLeft: 10, marginBottom: 15, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
        </div>



        <div className='col-lg-4 col-sm-12 ' style={{ marginRight: 0 }} >

        </div>
      </div>
      <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-end', marginTop: 30, marginBottom: 20 }}>
        <div className="gradd" style={{ paddingBottom: 30, width: 140, height: 35, borderWidth: 1, borderColor: 'black', zIndex: 5, borderRadius: 30, borderStyle: 'solid', }}>
          <div onClick={()=>onSubmit()} style={{ fontSize: 15, fontWeight: 'bolder', color: 'white', letterSpacing: 10, marginLeft: 40, marginTop: 5 }}> EDIT</div>

          <Modal
            show={show}
            onHide={() => setShow(false)}

            style={{
             
              backgroundColor: 'rgba(100,100,100,0.6)'
            }}>
            <div style={{ width: 600 }}>
              <Clear style={{ color: 'gray', fontSize: 22, justifyContent: 'flex-end', marginTop: 20, marginLeft: 455 }} onClick={handleClose} />
              <div style={{ backgroundColor: "#4FF48E", height: 33, width: 33, borderRadius: 80, marginTop: 10, marginLeft: 240, marginTop: 4 }}>   <Check style={{ color: 'white', fontSize: 25, marginLeft: 4, marginTop: 3, fontWieght: "1000" }} /></div>
              <div style={{ fontSize: 22, color: "black", fontWeight: 'bold', marginLeft: 200, paddingTop: 10 }}> Successful</div>
              <div style={{ fontSize: 16, color: "gray", marginLeft: 60, paddingTop: 20 }}> Your user account has been Edited successfully
         </div>
              <Divider style={{ marginTop: 20, marginLeft: 30, marginRight: 30, width: 430 }} />
              <div style={{ display: "flex", alignItems: 'center',padding:'10px', justifyContent: 'center', marginTop: '10px',marginRight:'80px' }}>

                <div>
                  <Button
                    style={{
                      borderWidth: 1,
                      width: '150px',
                      borderColor: 'black',
                      borderRadius: 30
                    }}
                    onClick={RedirectToView}
                  >
                    OK
            </Button>
                </div>
              </div>

            </div>
          </Modal>

        </div>
        <div
        className="delete"
        onClick={()=>setRedirect(true)}
          style={{
            paddingBottom: 30, width: 140, height: 35,
            borderWidth: 1, borderColor: 'black', zIndex: 5, borderRadius: 30,
            borderStyle: 'solid', backgroundColor: 'white', marginLeft: 30,
          }}>
          <div           
            style={{ fontSize: 15, fontWeight: 'bolder', color: 'black', letterSpacing: 10, marginLeft: 40, marginTop: 5 }}> CANCEL</div>
        </div>
      </div>
    </div>
  );
}