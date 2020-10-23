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
import { EditOutlined, PictureAsPdfSharp } from '@material-ui/icons';
import {addAdvertisment, preview} from '../../utils/Services'
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})
export const AdCreate = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [picture,setPictures]=useState([])
    const [addArray,setAddArray]=useState([]);
    const [disableBtn,setDisableBtn]=useState(0)
    const [segment,setSegment]=useState('')
    const [Advertisement,setAdvertisment]=useState('')
    const [location,setLocation]=useState('')
    const [terms,setTerms]=useState('')
    const [fileName,setFileName]=useState('')
    const [fileLength,setFileLength]=useState('')
    const [Image,setImage]=useState()
    const [showAdButton,setShowAdButton]=useState(false);
    const [open, setOpen] = React.useState(false);
    const [askOpen, setAskOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [redirect,setRedirect]=useState(false);
    const [alert,setAlert]=useState(false);
    const [openUpload, setOpenUpload] = React.useState(false);
    const [fileObj,setFileObj] = useState([]);
    const [fileArray,setFileArray] = useState([]);
    const [file,setFile]=useState([null])
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
   
    const handleClose = () => {
        setAnchorEl(null);
      };
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
      const onDrop = e => {

        // setPictures([...picture,e]);
        // fileObj.push(e.target.files)
        // for (let i = 0; i < fileObj[0].length; i++) {
        //   return  fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        // }
        //   setFile(fileArray)
        console.log(URL.createObjectURL(e[0]));    
        setOpenUpload(true);   
		// console.log(e[0].name)
		console.log(e.length===0)
		if(e.length!==0){
      
      setFileName(e[0].name)
      setFileLength(e[0])
      
      const formData = new FormData();
      formData.append("myFile",e[0],e[0].name);
     
      preview(formData).then((res)=>{
console.log(res);
setImage(res.data.Image)
      })
		// const data={
		// 	"myFile":e,
		// 	"UserId":userPayload.UserId

        // }
    }
}
console.log(file)

  const handleClickSuccessOpen = () => {
    setOpenUpload(true);
  };

  const handleCloseSuccess = () => {
    setOpenUpload(false);
  };
if(redirect){
 return <Redirect to="/admin/adview"/>
}
const onAddition=()=>{
    console.log("done")
    
    const newdata = (
    <div>
    
     <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "column" }}>

<div class="row">
    <div class="col-lg-8 col-sm-12 col-md-8">
        <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>
    
    
          <div className="row" style={{ display: 'flex',padding:'20px' ,flexDirection: 'row' }}>
          <div class="col-lg-12  col-md-12 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
          <p style={{ fontSize:'14px',color:"black", fontWeight: 'bold', marginBottom: 0}}>
          Advertisement {disableBtn+2}
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
            Terms & Conditions
                <div style={{ padding:'10px',background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', borderRadius: 40, marginBottom: 15 }}>
                <TextareaAutosize 
                rowsMin={3} 
                cols={43}
                
                style={{borderStyle:'none'}}
                placeholder="Minimum 3 rows" />
                </div>
               <div>
                <Button block 
                onClick={Submit}
                style={{backgroundColor:'#000000',width:'40%',color:'white',margin:'10px',padding:'5px',borderRadius:'20px'}}>
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
      <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -25, }}></div>
      <img style={{ height: 100,marginTop:20, width: "100%" }}
                  src={Image} />
    
          </div>
          </div>
          </div>
                </div>
</div>
</div>
</div>
    )
    setAddArray([...addArray,newdata])
    setDisableBtn(addArray.length+1)
}

// if(addArray.length===10){
//     setDisableBtn(true);

// }
console.log(disableBtn)
      console.log(picture)

      const Submit=()=>{
        console.log("Submit")
        console.log(fileLength,fileLength)
        const formData = new FormData();
        if(fileLength && fileName &&Advertisement&&location&&segment&&terms)
          formData.append("myFile",fileLength,fileName);
          formData.append("AdvertisementPlacement",Advertisement)
          formData.append("Location",location)
          formData.append("Segment",segment)
          formData.append("TermAndConditions",terms)     
         
          addAdvertisment(formData).then((res)=>{
              console.log(res);
            if(res.data.success==="200"){
                setOpen(true)
                setShowAdButton(true)
                setImage(res.data.Image)
                // setRedirect(true);
              };
         }).catch((err)=>{
           console.log(err)
           if(err){
             console.log(err.response);
           }
         })
      }
     const handleCloseModal=()=>{
       
      setOpen(false);
     }
     const handleCloseAskModal=()=>{
       setImage()
       setTerms('')
      setAskOpen(false);
     }
    return (
        <div style={{ height: "100vh", width: '100%' }}>
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
          Succesfully Submitted the Advertisement
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseModal} style={{backgroundColor:'green',color:'white'}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
}
        <div className='row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20, paddingLeft: 0, marginTop: -10, marginBottom: 0 }} >
          <div style={{ dispaly: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Create</div>
  
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
    <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={Advertisement}
        onChange={handleChange}
        name="advertisment"
        disableUnderline={true}
      >  
      <MenuItem value="">
      <em>None</em>
    </MenuItem>     
        <MenuItem value="HomePage">HomePage</MenuItem>  
      </Select>
    </FormControl>
  </div>
  </div>
<div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
  <span style={{ marginLeft: 15 }}>
    Select Segement
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
  <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
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
      Advertisement 1
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
        Terms & Conditions
            <div style={{ padding:'10px',background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', borderRadius: 40, marginBottom: 15 }}>
            <TextareaAutosize 
            rowsMin={3} 
            cols={43}
            name="terms"
            value={terms}
            onChange={handleChange}
            style={{borderStyle:'none'}}
            // placeholder="Minimum 3 rows"
             />
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
  <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -25, }}></div>
  <img style={{ height: 100,marginTop:20, width: "100%" }}
              src={Image} />

      </div>
      </div>
      </div>
            </div>
            
        {addArray}
        <Button onClick={onAddition} disabled={disableBtn===9|| !showAdButton?true:false}>Add More Advertisement</Button>
        </div>
        </div>
    

</div>  
    )
}
