import React, { Component, useState } from 'react';
import ExpandMore from "@material-ui/icons/ExpandMore";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";
import '../../stylee.css';
import {ProgressBar, DropdownButton, Dropdown, Modal} from 'react-bootstrap';
import { deactivateUser } from 'utils/Services';
import { Redirect } from 'react-router-dom';
export default function UserSeg(props) 

{
const [show, setShow] = useState(false);
const [data,setData]=useState(props.location.state.data);
const [redirect,setRedirect]=useState(false)

const handleClose = () => setShow(false);
    
   
      const deactivate=()=>{
        const datablock={
          "UserId":data.UserId
        }
        deactivateUser(datablock).then((res)=>{
    if(res){
      setRedirect(true)
    }
  })
    }


    if(redirect){
      return(<Redirect to="/admin/useruserview"/>)
    }
        return (
          <div style={{height:"100vh", width:'100%'}}>
<div  style={{marginLeft:18}}>
<div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}> Deactivate</div>
        
<div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div>          
</div>
<div  className="row pl-3" style={{backgroundColor:'white' , display:'flex', flexDirection:'column',marginTop:50, margin:18}}>            

<div className='col-lg-4 col-sm-12  p-4 '  style={{marginRight:0}}  >
         <span  style={{marginLeft:15}}>
           Select
         </span>
        <div  style={{background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:35, borderRadius:40,  marginBottom:30}} >     
        
        <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{marginLeft:10, fontSize:15, lineHeight:2}}> Management</div> 
					<div style={{marginLeft:'auto', padding:5}}>   	<ExpandMore /> </div>		
        </div>
        </div>
        </div>

</div>



      <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'flex-end', marginTop:30, marginBottom:20}}>
       <div className="graddred" onClick={() => setShow(true)} style={{ paddingBottom:30,width:150, height:35, borderWidth:1, borderColor:'red', zIndex:5, borderRadius:30, borderStyle:'solid',  justifyContent:'center' }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:30, marginTop:5}}> DEACTIVATE</div>
       </div>

       <Modal
        show={show}
        onHide={() => setShow(false)}
        
        style={{
           
            backgroundColor: 'rgba(100,100,100,0.6)'}}>
          <div  style={{width:1500, height:340 ,}}>
          <Clear style={{color:'gray', fontSize:22, justifyContent:'flex-end', marginTop:20, marginLeft:455}} onClick={handleClose}  />
          <div  style={{backgroundColor:"red", height:33, width:33, borderRadius:80, marginTop:10, marginLeft:220, marginTop:4}}>   <VisibilityOffOutlined style={{color:'white', fontSize:25, marginLeft:4, marginTop:3,fontWieght:"1000"}} /></div>
		 <div style={{fontSize:22, color:"black", fontWeight:'bold', marginLeft:120, paddingTop:10}}> Deactivate Confirmation</div>
         <div style={{fontSize:16, color:"black",  marginLeft:60, paddingTop:30}}> This if you want to permanenttly deactivate a teammate. <br />
         <span style={{marginLeft:60}}> This acccount cannot be restored</span>
         </div>			
         
         <div className="graddbtn"style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:95, marginTop:40}}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>

       <div onClick={()=>deactivate()} className="graddred" style={{ paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'red', zIndex:5, borderRadius:30, borderStyle:'solid', marginLeft:255, marginTop:-35 }}>
       <div  style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:25, marginTop:5}}> DEACTIVATE</div>
       </div>
              
     </div>
        
        
         
      </Modal>

       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div className="graddbtn"style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>
       </div> 

       </div>
        
        
        
        );
   

        }
