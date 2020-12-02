import React, { useState } from "react";
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
import { resetPassword } from "utils/Services";
import { Redirect } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from "@material-ui/core";
import { Clear } from "@material-ui/icons";



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

export default function ResetPwd() {
  const classes = useStyles();
  const [newPasword,setNewPassword]=useState('')
  const [ReEnter,setReEnter]=useState('')
  const [confirm ,setConfirm]=useState('')
  const [userData,setUserData]=useState(sessionStorage.getItem('payload'))
  const [redirect,setRedirect]=useState(false);
  const [redirectToLogin,setRedirectToLogin]=useState(false);  
  const [error,setError]=useState(false);
  const [errMessage,setErrMessage]=useState('')
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Submit=()=>{
  const newPayload=JSON.parse(userData);
const data={
  "UserId":newPayload?newPayload.UserProfile.UserId:'',
CurrentPassword:confirm,
NewPassword :newPasword,
ConfirmPassword:ReEnter,
}
resetPassword(data).then((res)=>{
console.log(res);
if(res.data.message==="Password Changed successfully."){
sessionStorage.clear()
setRedirectToLogin(true);
}
else{
  handleClickOpen();
  setErrMessage(res.data.message)
}
}).catch((err)=>{
  console.log(err.response)
  if(err.response){
    handleClickOpen();
    setErrMessage(err.response.data.message)
  }
})
}
if(redirect){
  return(<Redirect to="sadmin"/>)
}
if(redirectToLogin){
  return(<Redirect to="/"/>)
}

  return (
    <>
 <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Error</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="">
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>
    <div class="col" style={{ display: "flex", flexDirection: "column", padding: 8,  width:'100%'}}>
    

     
           <div class="col-lg-6 col-sm-12 mt-5"  style={{ display: "flex", flexDirection: "column", padding: 8 , backgroundColor:'white', justifyContent:'center', alignSelf:'center'}}>
           

           <div style={{display:"flex", flex:1, flexDirection:"row", marginBottom:20, justifyContent:'center', paddingTop:20}}>

                <div>

                    <div style={{fontSize:15, fontWeight:'400', marginBottom:40}}>
                        This password replace the old one: everything else about <br />
                        <span style={{marginLeft:15, fontSize:15, fontWeight:'400'}}> the user account will remain unchanged </span>
                    </div>
                  <div style={{marginLeft:15, fontSize:12}}>
                    Enter Current password
                  </div>
                  <input name="NewPassword" value={confirm} onChange={(e)=>setConfirm(e.target.value)} placeholder="Solitaitre32567" style={{fontSize:15, lineHeight:2, fontWeight:'bolder', paddingLeft:10,background:'transparent', width:400, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40 , borderRadius:40, }}/>
                  
                </div>
                </div>





            <div style={{display:"flex", flex:1, flexDirection:"row", marginBottom:20, justifyContent:'center', paddingTop:20}}>

              <div>
                <div style={{marginLeft:15, fontSize:12}}>
                  Enter new password
                </div>
                 <input name="NewPassword" value={newPasword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="Solitaitre32567" style={{fontSize:15, lineHeight:2, fontWeight:'bolder', paddingLeft:10,background:'transparent', width:400, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40 , borderRadius:40, }}/>
                 
              </div>
            </div>


                <div style={{display:"flex", flex:1, flexDirection:"row", marginBottom:20,  marginTop:15,justifyContent:'center' }}>

                    <div style={{marginLeft:'300'}}>

                    <div style={{marginLeft:15, fontSize:12}}>
                        Confirm password
                    </div>
                    <input name="reenter" value={ReEnter} onChange={(e)=>setReEnter(e.target.value)} placeholder="Solitaitre32567" style={{fontSize:15, lineHeight:2, fontWeight:'bolder', paddingLeft:10,background:'transparent', width:400, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }}/>

                  </div>
             </div>

            
            
          </div>
          <div class="row-lg-4 col-sm-12 mt-4"  style={{ display: "flex", flexDirection: "row", padding: 8 , justifyContent:'center', alignSelf:'center', marginTop:30, marginBottom:20}}>
       <div className="gradd"style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid',  }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'white', letterSpacing:10, marginLeft:45, marginTop:5}}
       
    onClick={Submit}   
       > RESET</div>
       </div>
       <div style={{paddingBottom:30,width:140, height:35, borderWidth:1, borderColor:'black', zIndex:5, borderRadius:30, borderStyle:'solid', backgroundColor:'white', marginLeft:30, }}>
       <div style={{ fontSize:15, fontWeight:'bolder', color:'black', letterSpacing:10, marginLeft:40, marginTop:5}}
       onClick={()=>setRedirect(true)}
       > CANCEL</div>
       </div>
       </div>
       
    </div>
    </>
  );
}
