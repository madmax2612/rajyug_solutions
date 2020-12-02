import React, { useState } from 'react'
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, FormControl, Menu, MenuItem, Popper, Select, TextField, Typography, withStyles } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, Redirect } from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageUploader from "react-images-upload";
import {addAdvertisment, editAdvertisment, preview} from '../../utils/Services'
import { EditOutlined, PictureAsPdfSharp } from '@material-ui/icons';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})
// const MenuItems = withStyles({
//     root: {
//       justifyContent: "flex-end"
//     }
//   })();

export const AdEdit = (props) => {
    
    const [terms,setTerms]=useState(props.location.state?props.location.state.data.TermAndConditions:'')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [picture,setPictures]=useState(props.location.state.data.AdvImage?props.location.state.data.AdvImage:[])
    const [addArray,setAddArray]=useState([]);
    const [disableBtn,setDisableBtn]=useState(0)
    const [id,setId]=useState(props.location.state?props.location.state.data.id:'')
    const [segment,setSegment]=useState(props.location.state?props.location.state.data.Segment:'')
    const [Advertisement,setAdvertisment]=useState(props.location.state?props.location.state.data.AdvertisementPlacement:'')
    const [location,setLocation]=useState(props.location.state?props.location.state.data.Location:'')
    const [fileName,setFileName]=useState('')
    const [fileLength,setFileLength]=useState('')
    const[imgurl,setImgUrl]=useState(props.location.state?props.location.state.data.AdvImage:'')
    const [redirect,setRedirect]=useState(false)
    const [askOpen, setAskOpen] = React.useState(false);
    const [errorMessage,setErrorMessage]=useState('')
    const [error,setError]=useState(false);
    const [openUpload,setOpenUpload]=useState(false)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
   console.log(props.location.state.data.AdvImage)
    const handleClose = () => {
        setAnchorEl(null);
      };
      const onDrop = e => {
        setPictures([...picture,e]);
        console.log(e);  
         setOpenUpload(true)
		// console.log(e[0].name)
		// console.log(e.length===0)
		if(e.length>0){
      setFileName(e[0].name)
      setFileLength(e[0])
      const formData = new FormData();
      formData.append("myFile",e[0],e[0].name);
		preview(formData).then((res)=>{
console.log(res)
setPictures(res.data.Image);
    })
    }
}
const handleChange =(e)=>{
  if(e.target.name==="segment"){
    setSegment(e.target.value)
  }
  if(e.target.name==="advertisment"){
    setAdvertisment(e.target.value)
  }
  if(e.target.name==="location"){
    setLocation(e.target.value)
  }
  if(e.target.name==="terms"){
    setTerms(e.target.value)
  }
  
 }
 const handleClickSuccessOpen = () => {
  setOpenUpload(true);
};

const handleCloseSuccess = () => {
  setOpenUpload(false);
};
console.log(picture)
const Submit=()=>{
  console.log("here Edit")
  console.log(fileLength,fileLength)
        const formData = new FormData();
        if (Advertisement && location && segment && terms &&id)
          // userId
          
          if(fileLength!==''&& fileName!==''){
          formData.append("myFile",fileLength,fileName);
            }
            formData.append("myFile",props.location.state.data.AdvImage);  
          formData.append("id",id)
          formData.append("AdvertisementPlacement",Advertisement)
          formData.append("Location",location)
          formData.append("Segment",segment)
          formData.append("TermAndConditions",terms)     
         
          editAdvertisment(formData).then((res)=>{
          console.log("here Edit")
          console.log(res)
              if(res.data.success==="200"){
                // showAdButton(true)
                // setRedirect(true);
                setAskOpen(true);
              }
              else{
                setRedirect(false)
              }
         }).catch((err)=>{
           
           console.log(err)
          if(err){
            setError(true);
            setAskOpen(true);
            console.log(err.response)
            setErrorMessage(err.response)
          }
         })
      }
      if(redirect){
        return <Redirect to="/admin/adview"/>
      }
      console.log(props);
      const handleCloseAskModal=()=>{
        
       setAskOpen(false);
      setRedirect(true);
      }
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
  onClose={handleCloseAskModal} 
  aria-labelledby="customized-dialog-title" 
  open={askOpen}
  fullWidth={true}
  >
        <DialogTitle id="customized-dialog-title" 
        onClose={handleCloseAskModal}
        >
          Success
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Succesfully Submitted the Advertisement
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseAskModal} style={{backgroundColor:'green',color:'white'}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
}

        <div className='row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20, paddingLeft: 0, marginTop: -10, marginBottom: 0 }} >
          <div style={{ dispaly: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Edit</div>
  
            <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30, }}></div>
          </div>
          <div style={{ marginTop: 30, display: 'flex', justifySelf: 'flex-end', height: 35, width: 35, borderRadius: 150, backgroundColor: "#E2E3E2", }}> <MoreVertOutlined style={{ marginLeft: 5, marginTop: 4, color: 'gray', fontWeight: 'bold' }} /></div>
  
        </div>
<div className="row m-3 p-4 " style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', marginTop: 40 }}>

<div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
  <span style={{ marginLeft: 15 }}>
    Advertisement Placement
</span>
  <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
    <FormControl  style={{ minWidth: "100%", padding: '5px' }}>

      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={Advertisement}
        onChange={handleChange}
        name="Advertisement"
        disableUnderline={true}
      >       
        <MenuItem value="HomePage" >HomePage</MenuItem>  
      </Select>
    </FormControl>
  </div>
  </div>
<div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
  <span style={{ marginLeft: 15 }}>
    Select Segement
  </span>
  <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
    <FormControl  style={{ minWidth: "100%", padding: '5px' }}>

      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={segment}
        onChange={handleChange}
        name=""
        disableUnderline={true}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Customer">Customer </MenuItem>
        <MenuItem value="Employee">Employee</MenuItem>
        <MenuItem value="Channel Partner">Channel Partner</MenuItem>
      </Select>
    </FormControl>
  </div>
</div>

<div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
  <span style={{ marginLeft: 15 }}>
    Location
 </span>
  <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }}>
  <FormControl  style={{ minWidth: "100%", padding: '5px' }}>
    <input
        className='col-lg-12 col-sm-12'
        type="text"
        name="location"
        value={location}
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
  </div>
</div>
<div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "column" }}>

<div class="row">

  <div class="col-lg-8 col-sm-12 col-md-8">
    <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>


      <div className="row" style={{ display: 'flex',padding:'20px' ,flexDirection: 'row' }}>
      <div class="col-lg-12  col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
      <p style={{ fontSize:'14px',color:"black", fontWeight: 'bold', marginBottom: 0}}>
      Advertisement {props? props.location.state.data.id:""}
  <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: 0, }}></div>

      </p>

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
                // withPreview={true}
                defaultImage={picture}
                onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".svg",".png",".jpeg"]}
                    maxFileSize={1000000000000}
                />
            
           </div>
           </div>
          </div>
        </div>
        <div class="col-lg-8  col-md-8 col-sm-12 " style={{ display: 'flex', flexDirection: 'column', }}>
        Terms & Conditions
            <div style={{ padding:'10px',background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', borderRadius: 40, marginBottom: 15 }}>
            <TextareaAutosize 
            value={terms}
            rowsMin={3} 
            cols={43}
            name="terms"
            onChange={handleChange}
            // onChange={(e)=>handleChange(e)}
            style={{borderStyle:'none'}}
            placeholder="Minimum 3 rows" />
            </div>
           <div>
            <Button 
            onClick={Submit}
            block style={{backgroundColor:'#000000',width:'40%',color:'white',margin:'10px',padding:'5px',borderRadius:'20px'}}>
                SAVE
            </Button>

            <Button 
            onClick={()=>setRedirect(true)}
            style={{backgroundColor:'white',border:'2px solid #000000',color:'#fffff',borderRadius:'20px',width:'40%'}}>
                CANCEL
            </Button>
            </div> 
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-4">
        <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>
      <div className="row" style={{ display: 'flex',padding:'10px' ,flexDirection: 'row' }}>
      <div class="col-lg-12  col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
      <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Preview</div>
  <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -20, }}></div>
  <img style={{ height: 100, width: "100%", }}
              src={picture} />

      </div>
      </div>
      </div>
            </div>
        </div>
        </div>
</div>  
    )
}
