import React, { useState } from 'react';
import '../../stylee.css';
import { Modal} from 'react-bootstrap';
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Divider from "@material-ui/core/Divider";
import { Link } from 'react-router-dom';
export default function UserSeg() 

{
const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
        return (
            <div style={{height:"100vh", width:'100%'}}>
<div  style={{marginLeft:18, marginTop:0}}>
<div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}> Create</div>
        
<div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div>          
</div>
<div  className="row pl-3 pr-4" style={{backgroundColor:'white' , display:'flex', flexDirection:'column',  marginTop:50, margin:18}}>            

<div className='col-lg-4 col-sm-12  p-4'  style={{marginRight:0, marginBottom:-10}}  >
       

<div style={{marginLeft:15}}>
    Name
</div>

<input className='col-lg-12 col-sm-12'  type="text" placeholder="Management"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:35, borderRadius:40, }}/>
</div>


<div className='col-lg-12 col-sm-12 p-4 '  style={{marginRight:50}}  >
       

<div style={{marginLeft:15}}>
 Description
</div>

<textarea className='col-lg-12 col-sm-12' rows="4" cols="50" style={{background:'transparent',padding:10, height:130,  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b', borderRadius:25, marginBottom:10 }} >
Segment who has referred more than X number and achieved X amount for the current quarter
</textarea>
</div>


  </div>


  {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        
        style={{paddingTop:320, 
            backgroundColor: 'rgba(100,100,100,0.6)'}}>
          <div  style={{width:600, height:480 ,}}>
          <Clear style={{color:'gray', fontSize:22, justifyContent:'flex-end', marginTop:20, marginLeft:455}} onClick={handleClose}  />
          <div  style={{backgroundColor:"#4FF48E", height:33, width:33, borderRadius:80, marginTop:10, marginLeft:240, marginTop:4}}>   <Check style={{color:'white', fontSize:25, marginLeft:4, marginTop:3,fontWieght:"1000"}} /></div>
		 <div style={{fontSize:22, color:"black", fontWeight:'bold', marginLeft:200, paddingTop:10}}> Successful</div>
         <div style={{fontSize:16, color:"gray",  marginLeft:60, paddingTop:20}}> Your user account has been created successfully
         </div>	

         <Divider  style={{marginTop:20, marginLeft:30, marginRight:30, width:430}}/>	


         <div style={{ display: "flex", flexDirection: "column" , marginBottom:20, marginLeft:60}}>
							<div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

								<div style={{marginRight:130, fontSize:16, fontWeight:"400"}}> User Segment</div>

								<div  style={{fontSize:14}}>Channel Partner</div>

							</div>  

              <div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

								<div style={{marginRight:140, fontSize:16, fontWeight:"400"}}> Subcategory</div>

								<div  style={{fontSize:14, width:400}}>Ast. Channel Partner</div>

							</div>   


							<div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

							<div style={{marginRight:175, fontSize:16, fontWeight:"400"}}> User ID</div>

							<div  style={{fontSize:14}}>SACH123</div>

							</div>


							<div style={{display: "flex", flexDirection: "row", marginTop:20 }} >

								<div style={{marginRight:155, fontSize:16, fontWeight:"400"}}> Password</div>

								<div  style={{fontSize:14}}>Rg@325</div>

							</div> 

          </div>	
         
         <div  className="gradd"style={{paddingBottom:30,width:180, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid',  marginLeft:160, marginTop:40}}>
       <div style={{ fontSize:20, fontWeight:'bolder',  color:'white',letterSpacing:10, marginLeft:40, marginTop:5}}>DOWNLOAD</div>
       </div>

       
              
     </div>
        
        
         
      </Modal> */}



  <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'flex-end', marginTop:30, marginBottom:20}}>
       <div  onClick={() => setShow(true)} className="gradd" style={{paddingBottom:30,width:140, height:35, borderWidth:1,  zIndex:5, borderRadius:30, borderStyle:'solid'  }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:43, marginTop:5}}> CREATE</div>

      

       </div>
       <Link to="/admin/dashboard">
       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>
       </Link>
       </div>
</div>
        
        
        
        );
    }


