/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ExpandMore from "@material-ui/icons/ExpandMore";

import StarRate from "@material-ui/icons/StarRate";
import DateRangeOutlined from "@material-ui/icons/DateRangeOutlined";
import Divider from "@material-ui/core/Divider";
import '../../stylee.css';
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Rewards() {
  const classes = useStyles();
  return (
    <div  style={{height:"100vh", width:'100%'}}>

    <div  style={{marginLeft:15, marginTop:-10}}>
    
    <div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}>Add</div>
            
    <div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div> 
    </div>
    
    
           
    
    
    
    <div  className="row m-3 p-4 " style={{backgroundColor:'white' , display:'flex', flexDirection:'row',  marginTop:40}}>
    
    <div className='col-lg-4 col-sm-12  '  style={{marginRight:0}}  >
     <span  style={{marginLeft:15}}>
       Select Segments
     </span>
    <div  style={{background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, marginBottom:15}} >     
    
    <div style={{display:'flex', flexDirection:'row'}}>
    <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> Channel Partner</div> 
      <div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
    </div>
    </div>
    </div>
    
    <div className='col-lg-4 col-sm-12  '  style={{marginRight:0}}  >
         <span  style={{marginLeft:15}}>
           Select Tier
         </span>
         <div style={{background:'transparent',borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, marginBottom:15}}>
                  <div style={{height:28, width:28, backgroundColor:'pink', borderRadius:80, margin:5 }}>
                  <StarRate className={classes.icons}  style={{ color:'white', fontSize:28 }}/>
                  </div>
               
                <div style={{marginLeft:40, marginBottom:-23, fontSize:15, marginTop:-32, fontWeight:'bolder' }}> Bronze</div> 
                <div style={{display:'flex', justifyContent:'flex-end', padding:-6, marginRight:8}}>   	<ExpandMore /> </div>	
                </div>
        </div>


    <div className='col-lg-4 col-sm-12  '  style={{marginRight:0}}  >
     <span  style={{marginLeft:15}}>
       Select Condition
     </span>
    <div  style={{background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, marginBottom:15}} >     
    
    <div style={{display:'flex', flexDirection:'row'}}>
    <div style={{marginLeft:10, fontSize:15, lineHeight:2.5}}> Site Visit</div> 
      <div style={{marginLeft:'auto', padding:6}}>   	<ExpandMore /> </div>		
    </div>
    </div>
    </div>


<Divider className='col-lg-12 col-sm-12' light  style={{marginBottom:40, margin:-5, padding:-5, marginTop:30, marginLeft:-25}}/>


    <div className='col-lg-4 col-sm-12' style={{marginTop:40}} >
         <span  style={{marginLeft:15}}>
           Reward 1
         </span>
         <input className='col-lg-12 col-sm-12'  type="text" placeholder="Maruti Swift"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
         <div style={{ marginTop:10,paddingBottom:30,width:160, height:40, borderWidth:1, borderColor:'#28D179', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'#28D179', }}>
        <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:35, marginTop:7}}> SELECT FILE</div>
        </div>
    </div>



    <div className='col-lg-4 col-sm-12' style={{marginTop:40}} >
         <span  style={{marginLeft:15}}>
           Reward 1
         </span>
         <input className='col-lg-12 col-sm-12'  type="text" placeholder="Maruti Swift"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
         <div style={{marginTop:10,paddingBottom:30,width:160, height:40, borderWidth:1, borderColor:'#28D179', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'#28D179', }}>
        <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:40, marginTop:7}}> UPLOADED</div>
        </div>
    </div>

    <div className='col-lg-4 col-sm-12' style={{marginTop:40}} >
         <span  style={{marginLeft:15}}>
           Reward 1
         </span>
         <input className='col-lg-12 col-sm-12'  type="text" placeholder="Maruti Swift"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
         <div style={{ marginTop:10,paddingBottom:30,width:160, height:40, borderWidth:1, borderColor:'#28D179', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'#28D179', }}>
        <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:35, marginTop:7}}> SELECT FILE</div>
        </div>
    </div>



    <div className='col-lg-4 col-sm-12' style={{marginTop:50, marginBottom:50}} >
         <span  style={{marginLeft:15}}>
           Reward 1
         </span>
         <input className='col-lg-12 col-sm-12'  type="text" placeholder="Maruti Swift"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
         <div style={{ marginTop:10,paddingBottom:30,width:160, height:40, borderWidth:1, borderColor:'#28D179', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'#28D179', }}>
        <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:35, marginTop:7}}> SELECT FILE</div>
        </div>
    </div>


    <div className='col-lg-4 col-sm-12' style={{marginTop:50, marginBottom:50 }} >
         <span  style={{marginLeft:15}}>
           Reward 1
         </span>
         <input className='col-lg-12 col-sm-12'  type="text" placeholder="Maruti Swift"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
         <div style={{ marginTop:10,paddingBottom:30,width:160, height:40, borderWidth:1, borderColor:'#28D179', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'#28D179', }}>
        <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:35, marginTop:7}}> SELECT FILE</div>
        </div>
    </div>


    <div className='col-lg-4 col-sm-12' style={{marginTop:50, marginBottom:50 }} >
         <span  style={{marginLeft:15}}>
           Reward 1
         </span>
         <input className='col-lg-12 col-sm-12'  type="text" placeholder="Maruti Swift"style={{paddingLeft:10, fontSize:15,background:'transparent',  borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>
         <div style={{ marginTop:10,paddingBottom:30,width:160, height:40, borderWidth:1, borderColor:'#28D179', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'#28D179', }}>
        <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:35, marginTop:7}}> SELECT FILE</div>
        </div>
    </div>








    </div>

<div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'flex-end', marginTop:30, marginBottom:20}}>
  <div  className="gradd"style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid'  }}>
  <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:55, marginTop:5}}> ADD</div>



  </div>
  <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
  <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
  </div>
</div>

</div>
  );
}
