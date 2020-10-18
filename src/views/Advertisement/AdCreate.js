import React, { useState } from 'react'
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import { Button, Fade, FormControl, Menu, MenuItem, Popper, Select, TextField, withStyles } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageUploader from "react-images-upload";
import { EditOutlined, PictureAsPdfSharp } from '@material-ui/icons';
// const MenuItems = withStyles({
//     root: {
//       justifyContent: "flex-end"
//     }
//   })();

export const AdCreate = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [picture,setPictures]=useState([])
    const [addArray,setAddArray]=useState([]);
    const [disableBtn,setDisableBtn]=useState(0)

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

const onAddition=()=>{
    console.log("done")
    const newdata = (<div>
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
                        maxFileSize={5242880}
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
            <div class="col-lg-4 col-sm-12 col-md-4">
            <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>
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
    return (
        <div style={{ height: "100vh", width: '100%' }}>


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
        // value={segment}
        // onChange={handleChange}
        name="segment"
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
    <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        // value={segment}
        // onChange={handleChange}
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
    Location
 </span>
  <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }}>
    <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>
    <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        // value={segment}
        // onChange={handleChange}
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
                    maxFileSize={5242880}
                />
            {/* <Button style={{backgroundColor:'#28D179',borderRadius:'20px',color:'white',marginTop:'5px',padding:'8px'}}>
            Select File
            </Button> */}
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
        <div class="col-lg-4 col-sm-12 col-md-4">
        <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>
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
            
        {addArray}
        <Button onClick={onAddition} disabled={disableBtn===9?true:false}>Add More Advertisement</Button>
        </div>
        </div>
    

</div>  
    )
}
