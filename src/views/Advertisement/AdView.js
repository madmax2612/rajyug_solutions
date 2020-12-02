import React,{useEffect,useState} from 'react'
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import { Fade, FormControl, Menu, MenuItem, Popper, Select, TextField, withStyles } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, Redirect } from 'react-router-dom';
import { getAdvertisement } from 'utils/Services';
import { deleteAdvertisment } from 'utils/Services';
// const MenuItems = withStyles({
//     root: {
//       justifyContent: "flex-end"
//     }
//   })();

export const AdView = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Advertisement,setAdvertisement]=useState('');
    const [editValue,setEditValue]=useState('')
    const [location,setLocation]=useState('')
    const [placement,setPlacement]=useState('')
    const [segment,setSegment]=useState('')
    const [redirect,setRedirecttoedit]=useState(false);

    const handleClick = (event,value,res) => {
      setAnchorEl(event.currentTarget);
      console.log(res);
      console.log(value)
      setEditValue(value);
    //   if(res==="edit"){
    //     if(value){
    //     setEditValue(value);
    //     // setRedirecttoedit(true)
    //   }
    // else{
    //   setRedirecttoedit(false);
    // }
    //   }
    //   else if(res==="delete"){
    //     // handleDelete(value);
    //   }
      
    };
    console.log(editValue)
  
  
    const handleDelete =(value)=>{
    console.log(value);
    console.log(editValue)
    if(editValue){
    const data={
      "id":editValue.id
    }
    deleteAdvertisment(data).then((res)=>{
      console.log(res)
      if(res.data.success==='200'){
        setAnchorEl(null);
        const data={
          "AdvertisementPlacement":placement,
          "Segment":segment,
          "Location":location
        }
        getAdvertisement(data).then((res)=>{
          console.log(res.data.DataU)
          if(res.data.DataU)
              setAdvertisement(res.data.DataU)
      else{
          setAdvertisement('')
      }
              })
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  else{
    return ;
  }
   }
    const handleClose = () => {
        
        setAnchorEl(null);

      };
      useEffect(()=>{
        const data={
          "AdvertisementPlacement":placement,
          "Segment":segment,
          "Location":location
        }
getAdvertisement(data).then((res)=>{
    console.log(res.data.DataU)
    if(res.data)
        setAdvertisement(res.data.DataU)
else{
    setAdvertisement('')
}
        })
      },[placement,segment,location])

  const handleEdit=(value)=>{
    console.log(value);
   if(editValue){
    console.log(editValue)
    setRedirecttoedit(true)
   }
    setAnchorEl(null);
      }
     const handleChange=(e)=>{
       if(e.target.name==="placement"){
         setPlacement(e.target.value)
       }
      else if(e.target.name==="segment"){
        setSegment(e.target.value)
      }
     else if(e.target.name==="location"){
        setLocation(e.target.value)
      }
     }
   if(redirect){
    return( <Redirect to={{ pathname: "/admin/Adedit", state: { data: editValue } }} />
    )}   
    const datatransfer=(res)=>{
      // console.log(res);
    }
      console.log(Advertisement)
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
    Advertisement Placement
</span>
  <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >
    <FormControl  style={{ minWidth: "100%", padding: '5px' }}>

      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={placement}
        onChange={handleChange}
        name="placement"
        disableUnderline={true}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
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
    Location
 </span>
  <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }}>
  <FormControl style={{ minWidth: "100%", padding: '5px' }}>
    <input
        className='col-lg-12 col-sm-12'
        type="text"
        name="location"
        value={location}
        onChange={handleChange}
        
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


{Advertisement && Advertisement.map((res,id)=>{
  return(
  <div class="col-lg-4 col-sm-12">
    <div 
    onClick={()=>datatransfer(res)}
    class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>


      <div className="row" style={{ display: 'flex',padding:'20px' ,flexDirection: 'row' }}>
      <div class="col-lg-6  col-md-6 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
      <p style={{ fontSize:'14px',color:"black", fontWeight: 'bold', marginBottom: 0}}>
      Advertisement {id+1}
      </p>
      </div>
      <div class="col-lg-6  col-md-6 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
          <MoreHoriz style={{ marginLeft: 'auto', color: 'gray', fontWeight: 'bold', }} onClick={(e)=>handleClick(e,res,"")}/>
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
            <MenuItem 
            onClick={handleClose} 
            style={{backgroundColor:'black',color:'white',display:'flex',justifyContent:'space-between'}}>
                <div>
                Options
                </div>
                <div onClick={handleClose}>
                   <CloseIcon/>
                </div>
                </MenuItem>
                
            <MenuItem
            name="edit"
            value="0"
             onClick={(e)=>handleEdit(e)}
             ><EditIcon/>&nbsp;  Edit</MenuItem>
        
            
            <MenuItem 
            name="delete"
            value="1"
            onClick={(e)=>handleDelete(e)}
            ><DeleteIcon/>&nbsp; Delete</MenuItem>
            
          </Popper>
          </div>

      
            
        <div class="col-lg-12  col-md-12 col-sm-12 " style={{ display: 'flex', flexDirection: 'column', }}>

            <div style={{ height: 150, width: "100%", backgroundColor: "#E2E3E2", marginBottom: 10, display: 'flex', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
            <img style={{ height: 100, width: "100%" }}
              src={res.AdvImage} alt="#Advertisement"/>
            </div>
        </div>

           


          {/* <div style={{ height: 30, width: 30, backgroundColor: "#bf891b", borderRadius: 35, marginTop: -28, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 35 }}>
            <StarRate className={classes.icons} style={{ color: 'white', fontSize: 35 }} />
          </div> */}
        </div>
        </div>
        </div>
         )
        })  }
        </div>
        </div>
</div>  
    )
}
