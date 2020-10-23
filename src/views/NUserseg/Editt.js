import React, { Component,useState } from 'react';
import ExpandMore from "@material-ui/icons/ExpandMore";
import '../../stylee.css';
import { Link } from 'react-router-dom';
import { FormControl, MenuItem, Select } from '@material-ui/core';

export const Edit=()=> {
    const [Advertisement,setAdvertisement]=useState('')
  const handleChange=(e)=>{
if(e.target.name==="mangement")
{
    setAdvertisement(e.target.value)
}
  }

        return (
            <div style={{height:"100vh", width:'100%'}}>
<div  style={{marginLeft:18}}>  
<div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}> Edit</div>
        
<div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div> 

</div>

       



<div  className="row  pl-3 pr-4" style={{backgroundColor:'white' , display:'flex', flexDirection:'row',  marginTop:50, margin:18 }}>  

<div className='col-lg-4 col-sm-12  p-4'  style={{marginRight:0}}  >
         <span  style={{marginLeft:15}}>
           Select
         </span>
        <div  style={{background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:35, borderRadius:40, }} >     
        <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={Advertisement}
            onChange={handleChange}
            name="mangement"
            disableUnderline={true}
            >    
            <MenuItem value="HomePage" >
            <em>
            None
            </em>    
            </MenuItem>  

            <MenuItem value="HomePage" >Home Page</MenuItem>  
            </Select>
            </FormControl>
        {/* <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{marginLeft:10, fontSize:15, lineHeight:2}}> Management</div> 
					<div style={{marginLeft:'auto', padding:5}}>   	<ExpandMore /> </div>		
        </div> */}
        
        
        
        </div>
        </div>

<div className='col-lg-4 col-sm-12  p-4'  style={{marginRight:0}}  >
       

<div style={{marginLeft:15}}>
    Name
</div>

<input className='col-lg-12 col-sm-12'  type="text" placeholder="Type Name Here"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:35, borderRadius:40, }}/>
</div>


<div className='col-lg-12 col-sm-12 p-4 '  style={{marginRight:50, marginTop:-10}}  >
       

<div style={{marginLeft:15}}>
 Description
</div>

<textarea className='col-lg-12 col-sm-12' rows="4" cols="50" style={{background:'transparent',padding:10, height:130,  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b', borderRadius:25, marginBottom:20 }} >
Segment who has referred more than X number and achieved X amount for the current quarter
</textarea>
</div>


  </div>


  <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'flex-end', marginTop:30, marginBottom:20}}>
       <div className="gradd" style={{paddingBottom:30,width:140, height:35, borderWidth:1, zIndex:5, borderRadius:30, borderStyle:'solid',   }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:50, marginTop:5}}> SAVE</div>

      

       </div>
       <Link to="/admin/view">
       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>
      </Link>
       </div>

</div>
        
        
        
        );
    
}

export default Edit;