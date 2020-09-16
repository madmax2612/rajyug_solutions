import React, { useState }from "react";
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
import { Modal} from 'react-bootstrap';
import Divider from "@material-ui/core/Divider";
import '../../stylee.css';

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

export default function Ucreate() {
  
  const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  
  return (
    <div style={{height:"100vh", width:'100%'}} >
    <div  style={{marginLeft:15, marginTop:-10}}>

<div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}> User Segment</div>
        
<div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div> 
</div>

    <div  className="row m-3 p-4 " style={{backgroundColor:'white' , display:'flex', flexDirection:'row',  marginTop:40}}>

      <div className='col-lg-4 col-sm-12  '  style={{marginRight:0}}  >
       <span  style={{marginLeft:15}}>
         Select
       </span>
      <div  style={{background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, marginBottom:15}} >     
      
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> Channel Partner</div> 
        <div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
      </div>
      </div>
      </div>


      <div className='col-lg-4 col-sm-12 ' style={{marginRight:0}} >
       <span  style={{marginLeft:15}}>
         Select
       </span>
       <input className='col-lg-12 col-sm-12'  type="text" placeholder="Assistant Channel Partner"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
      </div>
       

      



    </div>


    <div style={{marginLeft:15}}>
    <div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}> Personal Information</div>
      
    <div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div>
    
    </div>


   
      <div  className="row m-3 p-4" style={{backgroundColor:'white' , display:'flex', flexDirection:'row',  marginTop:40}}>
        
      <div></div>
      <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
     

      <div style={{marginLeft:15}}>
          First Name
      </div>
        
      <input className='col-lg-12 col-sm-12'  type="text" placeholder="RamChandra"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, marginBottom:30 }}/>
      </div>

      


      
      <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
     

      <div style={{marginLeft:15}}>
          Last Name
        </div>
        
      <input className='col-lg-12 col-sm-12'  type="text" placeholder="Narayan"style={{paddingLeft:10, fontSize:15,background:'transparent',marginBottom:30,  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
      </div>


      <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
       <span  style={{marginLeft:15}}>
       Date Of Birth
       </span>
      <div  style={{background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40,marginBottom:30 }} >     
      
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> 20/06/1998</div> 
        <div style={{marginLeft:'auto', padding:4, paddingRight:8}}>   <DateRangeOutlined /> </div>		
      </div>
      </div>
      </div>

      <div className='col-lg-4 col-sm-12 '  style={{marginRight:0}}  >
     

     <div style={{marginLeft:15}}>
         Gender
       </div>
       
     <input className='col-lg-12 col-sm-12'  type="text" placeholder="Male"style={{paddingLeft:10,marginBottom:20, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
     </div>

     

     <div className='col-lg-4 col-sm-12 '  style={{marginRight:0}}  >
    

    <div style={{marginLeft:15}}>
        Mobile No.
      </div>
      
    <input className='col-lg-12 col-sm-12'  type="text" placeholder="+91 9876543210"style={{paddingLeft:10, marginBottom:15,fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
    </div>

      

   <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
    

     <div style={{marginLeft:15}}>
         Email ID
       </div>
       
     <input className='col-lg-12 col-sm-12'  type="text" placeholder="abc@gmail.com"style={{paddingLeft:10, marginBottom:15,fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
     </div>


    </div>



    


    <div style={{marginLeft:15}}>
    <div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}> Address Details</div>
      
    <div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div>
    </div>
    <div className="row m-3 p-4 "style={{backgroundColor:'white' , display:'flex', flexDirection:'row',  marginTop:40,}}>

    <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
     

     <div style={{marginLeft:15}}>
     House Number / Street Name
       </div>
       
     <input className='col-lg-12 col-sm-12'  type="text" placeholder="172/2 Ghandhi Marg, near Nucleus Mall"style={{paddingLeft:10,marginBottom:30, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
     </div>



      <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
       <span  style={{marginLeft:15}}>
         City
       </span>
      <div  style={{background:'transparent', marginBottom:30, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }} >     
      
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> Pune</div> 
        <div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
      </div>
      </div>
      </div>

       

      <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
       <span  style={{marginLeft:15}}>
         State
       </span>
      <div  style={{background:'transparent', marginBottom:30, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }} >     
      
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> Maharashtra</div> 
        <div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
      </div>
      </div>
      </div>


      <div className='col-lg-4 col-sm-12 '  style={{marginRight:0}}  >
       <span  style={{marginLeft:15}}>
       Country
       </span>
      <div  style={{background:'transparent', marginBottom:15, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }} >     
      
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}>India</div> 
        <div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
      </div>
      </div>
      </div>


      <div className='col-lg-4 col-sm-12'  style={{marginRight:0}}  >
        <div style={{marginLeft:15}}>
           Pin Code
        </div>
          
        <input className='col-lg-12 col-sm-12'  type="text" placeholder="411007"style={{paddingLeft:10, marginBottom:15, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
      </div>

       

      <div className='col-lg-4 col-sm-12 '  style={{marginRight:0}} >
       
      </div>
      </div>


      



    
        



      


     



      <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'flex-end', marginTop:30, marginBottom:20}}>
       <div className="gradd" style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:50, marginTop:5}}> SAVE</div>

       

       </div>
       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>
       </div>






    </div>
  );
}