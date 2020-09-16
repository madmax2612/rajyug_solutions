/*eslint-disable*/
import React , {useState}from "react";
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
import EditOutlined from "@material-ui/icons/EditOutlined";
import Divider from "@material-ui/core/Divider";
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import Delete from '@material-ui/icons/Delete';
import Clear from '@material-ui/icons/Clear';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import '../../stylee.css';
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import {Link} from 'react-router-dom'
const useStyles = makeStyles(styles);


export default function TierDelete() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  return (


 
    <div style={{height:"100vh", width:'100%'}}>
        <div  style={{marginLeft:15, marginTop:-10}}>

<div style={{ fontSize:20, fontWeight:"bold", lineHeight:4}}>Tier</div>
        
<div style={{width:30, height:2, backgroundColor:'#bf891b',  marginTop:-30}}></div> 
</div>


<div class="col-lg-12 col-sm-12 ">
    <div class="p-1 rounded mt-3 pt-4 pl-4" style={{backgroundColor: 'black' }}> 
        <div class="col-lg-12 col-sm-12">
                <div className="row" style={{display:"flex", flexDirection:"row"}} >
                
                    <div class="col-lg-1 col-sm-3"  >
                    <p  style={{color:'white', fontWeight:'bold',}}> Tier</p>
                    </div>
                    
                    <div class="col-lg-3 col-sm-3"  >
                    <p  style={{color:'white', fontWeight:'bold'}}>Description</p>
                    </div>


                    <div class="col-lg-2 col-sm-3"  >
                    <p  style={{color:'white', fontWeight:'bold'}}>Value</p>
                    </div>


                    <div class="col-lg-1 col-sm-3"  >
                    <p  style={{color:'white', fontWeight:'bold', marginLeft:-25}}>Rewards</p>
                    </div>

                    <div class="col-lg-1 col-sm-3"  >
                    <p  style={{color:'white', fontWeight:'bold'}}> Amount</p>
                    </div>


                    <div class="col-lg-2 col-sm-3"  >
                    <p  style={{color:'white', fontWeight:'bold',  marginLeft:20 }}> Segment</p>
                    </div>

                    <div class="col-lg-2 col-sm-3"  >
                        
                    <p  style={{color:'white', fontWeight:'bold', display:'flex', justifyContent:'center'}}>Action </p> 
                    </div>
                </div>
          </div>
     </div>
   </div>
      

   <div class="col-lg-12 col-sm-12 ">
    <div class="p-1 rounded mt-0 pt-4 pb-2 pl-4" style={{backgroundColor: 'white' }}> 
        <div class="col-lg-12 col-sm-12">
                <div className="row" style={{display:"flex", flexDirection:"row"}} >
                
                    <div class="col-lg-1 col-sm-12"  >
                        <div style ={{ marginRight:0, width:140, fontSize:18}}>
                            <div style={{height:20, width:20, backgroundColor:"#bf891b", borderRadius:25, margin:5 }}>
                                        <StarRate className={classes.icons}  style={{ color:'white', marginTop:-6, marginLeft:-2 }}/>
                            </div>

                            <div style={{marginLeft:-4}}>
                                Gold 
                            </div>           
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-12"  >
                        <p style={{fontSize:15}}>
                            Segment who has referred <br />
                            more than X numberand <br />

                            achieved X amount for the <br />
                            current quarter

                        </p>
                    </div>


                    <div class="col-lg-2 col-sm-12"  >
                    <p style={{marginLeft:-20}}> 1 Lakh -3 lakh</p>
                    </div>

                    <div class="col-lg-1 col-sm-12"  >
                    <span >45</span>
                    </div>

                    <div class="col-lg-1 col-sm-12"   style={{display:'flex', justifyContent:'center'}}>
                    <span>45</span>
                    </div>


                    <div class="col-lg-2 col-sm-12"  >
                        
                     <p>Channel Partner</p>
                    </div>

                    
                    <div class="col-lg-2 col-sm-12"  >
                        <div  className="row"style ={{marginRight:0, display:'flex', flexDirection:"row" ,  justifyContent:'center'}} >
                        <Link to="/admin/tedit"><div style={{backgroundColor:"#28D179", height:35, width:35, borderRadius:80, marginTop:10,  marginTop:4,}}>   <EditOutlined style={{color:'white', fontSize:22, marginLeft:6, marginTop:6,fontWieght:"1000"}} /></div></Link>
                            <div onClick={() => setShow(true)} style={{backgroundColor:"#FF3B30", height:35, width:35, borderRadius:80, marginTop:10, marginLeft:20, marginTop:4}}>   <Delete style={{color:'white', fontSize:22, marginLeft:6, marginTop:6,fontWieght:"1000"}} /></div>
                        </div>
                    </div>


                </div>
          </div>
     </div>
   </div>

   
   <div class="col-lg-12 col-sm-12">
    <div class="p-1 rounded mt-3 pt-4 pl-4" style={{backgroundColor: 'white' }}> 
        <div class="col-lg-12 col-sm-12">
                <div className="row" style={{display:"flex", flexDirection:"row"}} >
                
                    <div class="col-lg-1 col-sm-2"  >
                        <div style ={{ marginRight:0, width:140, fontSize:18}}>
                            <div style={{height:20, width:20, backgroundColor:"gray", borderRadius:25, margin:5 }}>
                                        <StarRate className={classes.icons}  style={{ color:'white', marginTop:-6, marginLeft:-2 }}/>
                            </div>

                            <div style={{marginLeft:-5}}>
                                Silver
                            </div>           
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-12"  >
                        <p style={{fontSize:15}}>
                            Segment who has referred <br />
                            more than X numberand <br />

                            achieved X amount for the <br />
                            current quarter

                        </p>
                    </div>


                    <div class="col-lg-2 col-sm-12"  >
                    <p style={{marginLeft:-20}}> 1 Lakh -3 lakh</p>
                    </div>

                    <div class="col-lg-1 col-sm-12"  >
                    <span >45</span>
                    </div>

                    <div class="col-lg-1 col-sm-12"   style={{display:'flex', justifyContent:'center'}}>
                    <span>45</span>
                    </div>


                    <div class="col-lg-2 col-sm-12"  >
                        
                     <p>Channel Partner</p>
                    </div>

                    
                    <div class="col-lg-2 col-sm-12"  >
                    <div  className="row"style ={{marginRight:0, display:'flex', flexDirection:"row" ,  justifyContent:'center'}} >
                    <Link to="/admin/tedit"><div style={{backgroundColor:"#28D179", height:35, width:35, borderRadius:80, marginTop:10,  marginTop:4,}}>   <EditOutlined style={{color:'white', fontSize:22, marginLeft:6, marginTop:6,fontWieght:"1000"}} /></div></Link>
                            <div onClick={() => setShow(true)} style={{backgroundColor:"#FF3B30", height:35, width:35, borderRadius:80, marginTop:10, marginLeft:20, marginTop:4}}>   <Delete style={{color:'white', fontSize:22, marginLeft:6, marginTop:6,fontWieght:"1000"}} /></div>
                        </div>
                    </div>
                </div>
          </div>
     </div>
   </div>


   <div class="col-lg-12 col-sm-12">
    <div class="p-1 rounded mt-3 pt-4 pb-2s pl-4" style={{backgroundColor: 'white' }}> 
        <div class="col-lg-12 col-sm-12">
                <div className="row" style={{display:"flex", flexDirection:"row"}} >
                
                    <div class="col-lg-1 col-sm-2"  >
                        <div style ={{ marginRight:0, width:140, fontSize:18}}>
                            <div style={{height:20, width:20, backgroundColor:"pink", borderRadius:25, margin:5 }}>
                                        <StarRate className={classes.icons}  style={{ color:'white', marginTop:-6, marginLeft:-2 }}/>
                            </div>

                            <div style={{marginLeft:-10}}>
                                Bronze
                            </div>           
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-12"  >
                        <p style={{fontSize:15}}>
                            Segment who has referred <br />
                            more than X numberand <br />

                            achieved X amount for the <br />
                            current quarter

                        </p>
                    </div>


                    <div class="col-lg-2 col-sm-12"  >
                    <p style={{marginLeft:-20}}> 1 Lakh -3 lakh</p>
                    </div>

                    <div class="col-lg-1 col-sm-12"  >
                    <span >45</span>
                    </div>

                    <div class="col-lg-1 col-sm-12"   style={{display:'flex', justifyContent:'center'}}>
                    <span>45</span>
                    </div>


                    <div class="col-lg-2 col-sm-12"  >
                        
                     <p>Channel Partner</p>
                    </div>

                    
                    <div class="col-lg-2 col-sm-12"  >
                    <div  className="row"style ={{marginRight:0, display:'flex', flexDirection:"row" ,  justifyContent:'center'}} >
                    <Link to="/admin/tedit"><div style={{backgroundColor:"#28D179", height:35, width:35, borderRadius:80, marginTop:10,  marginTop:4,}}>   <EditOutlined style={{color:'white', fontSize:22, marginLeft:6, marginTop:6,fontWieght:"1000"}} /></div></Link>
                            <div onClick={() => setShow(true)} style={{backgroundColor:"#FF3B30", height:35, width:35, borderRadius:80, marginTop:10, marginLeft:20, marginTop:4}}>   <Delete style={{color:'white', fontSize:22, marginLeft:6, marginTop:6,fontWieght:"1000"}} /></div>
                        </div>
                    </div>                </div>
          </div>
     </div>
   </div>










   <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row" , justifyContent:'flex-end', marginTop:20}}>
       
       <div className="gradd" onClick={() => setShow(true)} style={{paddingBottom:30,width:180, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid',  }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:55, marginTop:5}}>Delete Tier</div></div>
      
    </div>

    <Modal
        show={show}
        onHide={() => setShow(false)}
        
        style={{paddingTop:320, 
            backgroundColor: 'rgba(100,100,100,0.6)'}}>
          <div  style={{width:1500, height:340 ,}}>
          <Clear style={{color:'gray', fontSize:22, justifyContent:'flex-end', marginTop:20, marginLeft:455}} onClick={handleClose}  />
          <div  style={{backgroundColor:"red", height:33, width:33, borderRadius:80, marginTop:10, marginLeft:220, marginTop:4}}>   <Delete style={{color:'white', fontSize:25, marginLeft:4, marginTop:3,fontWieght:"1000"}} /></div>
		 <div style={{fontSize:22, color:"black", fontWeight:'bold', marginLeft:190, paddingTop:10}}> Delete Tier</div>
         <div style={{fontSize:16, color:"black",  marginLeft:90, paddingTop:30}}> This if you want to permanenttly delete a tier. <br />
         <span style={{marginLeft:60}}> This information cannot be restored</span>
         </div>			
         
         <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:95, marginTop:40}}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>

       <div  className="graddred"style={{ paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'red', zIndex:5, borderRadius:30, borderStyle:'solid', marginLeft:255, marginTop:-35 }}>
       <div  style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:40, marginTop:5}}> DELETE</div>
       </div>
              
     </div>
        
        
         
      </Modal>

    
      

      
      
      </div>


       
    
  );
}
