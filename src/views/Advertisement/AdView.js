import React from 'react'
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import { Fade, FormControl, Menu, MenuItem, Popper, Select, TextField, withStyles } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
// const MenuItems = withStyles({
//     root: {
//       justifyContent: "flex-end"
//     }
//   })();

export const AdView = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
      };
      
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
        <MenuItem value="">
          {/* <em>None</em> */}
        </MenuItem>
        <MenuItem value="HomePage" >HomePage</MenuItem>
       
      </Select>
    </FormControl>
    {/* <div style={{display:'flex', flexDirection:'row'}}>
<div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> Customer</div> 
<div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
</div> */}
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


    {/* <div style={{height:28, width:28, backgroundColor:'#bf891b', borderRadius:80, margin:5 }}>
          <StarRate className={classes.icons}  style={{ color:'white', fontSize:28 }}/>
          </div>
       
        <div style={{marginLeft:40, marginBottom:-23, fontSize:15, marginTop:-32, fontWeight:'bolder' }}> Bronze</div> 
        <div style={{display:'flex', justifyContent:'flex-end', padding:-6, marginRight:8}}>   	<ExpandMore /> </div>	 */}
  </div>
  </div>
</div>
<div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "column" }}>

<div class="row">

  <div class="col-lg-4 col-sm-12">
    <div class="p-2 rounded m-1 mt-3 mb-4 " style={{ backgroundColor: "white" }}>


      <div className="row" style={{ display: 'flex',padding:'20px' ,flexDirection: 'row' }}>
      <div class="col-lg-6  col-md-6 col-sm-12" style={{ display: 'flex', flexDirection: 'column', }}>
      <p style={{ fontSize:'14px',color:"black", fontWeight: 'bold', marginBottom: 0}}>
      Advertisement 1
      </p>
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
             <Link to="/admin/Adedit" >   
            <MenuItem onClick={handleClose}><EditIcon/>&nbsp;  Edit</MenuItem>
            </Link>
            <Link>
            <MenuItem onClick={handleClose}><DeleteIcon/>&nbsp; Delete</MenuItem>
            </Link>
          </Popper>
          </div>
        <div class="col-lg-12  col-md-12 col-sm-12 " style={{ display: 'flex', flexDirection: 'column', }}>

          <div style={{ height: 150, width: "100%", backgroundColor: "#E2E3E2", marginBottom: 10, display: 'flex', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
            <img style={{ height: 100, width: "100%", }}
              src="https://pngriver.com/wp-content/uploads/2018/04/Download-Car-Transparent-Background.png" />
          </div>


          {/* <div style={{ height: 30, width: 30, backgroundColor: "#bf891b", borderRadius: 35, marginTop: -28, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 35 }}>
            <StarRate className={classes.icons} style={{ color: 'white', fontSize: 35 }} />
          </div> */}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
</div>  
    )
}
