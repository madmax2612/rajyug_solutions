import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import StarRate from "@material-ui/icons/StarRate";
import DateRangeOutlined from "@material-ui/icons/DateRangeOutlined";
import avatar from "assets/img/faces/marc.jpg";
import '../../stylee.css';
const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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

export default function Tier() {
  const classes = useStyles();
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


  


<div style={{marginLeft:15 ,marginTop:-20}}>  
<div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}> Tier Information</div>
        
<div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div> 

</div>



<div  className="row m-3 p-4 pl-4 pr-5 " style={{backgroundColor:'white' , display:'flex', flexDirection:'row',  marginTop:40}}>

<div className='col-lg-4 col-sm-12  '  style={{marginRight:0}}  >
 <span  style={{marginLeft:15}}>
   Tier Name
 </span>
 <div style={{background:'transparent',borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, marginBottom:15}}>
      <div style={{height:28, width:28, backgroundColor:'pink', borderRadius:80, margin:5 }}>
      <StarRate className={classes.icons}  style={{ color:'white', fontSize:28 }}/>
      </div>
    
    <div style={{marginLeft:40, marginBottom:-23, fontSize:15, marginTop:-32, fontWeight:'bolder' }}> Bronze</div> 
    <div style={{display:'flex', justifyContent:'flex-end', padding:-6, marginRight:8}}>   	<ExpandMore /> </div>	
    </div>
</div>


<div className='col-lg-4 col-sm-12 ' style={{marginRight:0}} >
 <span  style={{marginLeft:15}}>
   Select
 </span>
<div  style={{background:'transparent',  marginBottom:15, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }} >     

<div style={{display:'flex', flexDirection:'row'}}>
        <div style={{marginLeft:10, fontSize:15, lineHeight:2.5, color:'black'}}> 1 Lakh - 3 Lakh</div> 
					<div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
        </div>
</div>
</div>
 

<div className='col-lg-4 col-sm-12 ' style={{marginRight:0}} >
 <span  style={{marginLeft:15}}>
   Available Rewards
 </span>
 <input className='col-lg-12 col-sm-12'  type="text" placeholder="45"style={{paddingLeft:10, marginBottom:15,fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
</div>

<div className='col-lg-12 col-sm-12 mt-3' style={{marginRight:0}} >
<div style={{marginLeft:15}}>
 Description
</div>

<textarea className='col-lg-12 col-sm-12' rows="4" cols="50" style={{background:'transparent',  marginBottom:20,padding:10, height:130,  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b', borderRadius:25, }} >
Segment who has referred more than X number and achieved X amount for the current quarter
</textarea>
</div>

</div>











  <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'flex-end', marginTop:30, marginBottom:20}}>
       <div className="gradd"style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid',  }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:45, marginTop:5}}> CREATE</div>

      

       </div>
       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>
       </div>

</div>
        
        
        
  );
}
