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

export default function AResetPwd() {
  const classes = useStyles();
  return (
    <div class="col" style={{ display: "flex", flexDirection: "column", padding: 8,height:"100vh", width:'100%' }}>

     
           <div class="col-lg-6 col-sm-12 mt-5"  style={{ display: "flex", flexDirection: "column", padding: 8 , backgroundColor:'white', justifyContent:'center', alignSelf:'center'}}>
           

            <div style={{display:"flex", flex:1, flexDirection:"row", marginBottom:20, justifyContent:'center', paddingTop:20}}>

              <div>

                  <div style={{fontSize:15, fontWeight:'400', marginBottom:40}}>
                      This password replace the old one: evertything else about <br />
                      <span style={{marginLeft:15, fontSize:15, fontWeight:'400'}}> the user account will remains unchanged </span>
                  </div>


                  

                <div style={{marginLeft:15, fontSize:12}}>
                  Enter new password
                </div>
                 <input placeholder="Solitaitre32567" style={{fontSize:15, lineHeight:2, fontWeight:'bolder', paddingLeft:10,background:'transparent', width:400, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:35, borderRadius:40, }}/>
                 
              </div>
            </div>


                <div style={{display:"flex", flex:1, flexDirection:"row", marginBottom:20,  marginTop:15,justifyContent:'center' }}>

                    <div style={{marginLeft:'300'}}>

                    <div style={{marginLeft:15, fontSize:12}}>
                        Re-enter password
                    </div>
                    <input placeholder="Solitaitre32567" style={{fontSize:15, lineHeight:2, fontWeight:'bolder', paddingLeft:10,background:'transparent', width:400, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:35, borderRadius:40, }}/>

                  </div>
             </div>



             <div style={{display:"flex", flex:1, flexDirection:"row", marginBottom:30,  marginTop:15,justifyContent:'center' }}>

                    <div style={{marginLeft:'300'}}>

                    <div style={{marginLeft:15, fontSize:12}}>
                        Type a password hint
                    </div>
                    <input placeholder="Company" style={{fontSize:15, lineHeight:2, fontWeight:'bolder', paddingLeft:10,background:'transparent', width:400, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:35, borderRadius:40, }}/>

                  </div>
             </div>
            
          </div>

          
       
      


     


      
      


          <div class="row-lg-4 col-sm-12 mt-4"  style={{ display: "flex", flexDirection: "row", padding: 8 , justifyContent:'center', alignSelf:'center'}}>
       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'black',  }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:45, marginTop:5}}> RESET</div>
       </div>
       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}> CANCEL</div>
       </div>
       </div>
       
    </div>
  );
}
