import React,{useEffect, useState} from "react";

import "./login.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Modal, Button} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
import {AdminLogin} from '../../utils/Services'
// import { Button, Modal } from "@material-ui/core";



export default function Dashboard() {
	const [userId,setUserId]=useState('');
	const [Password,setPassword]=useState('');
	const [payload,setPayload]=useState(sessionStorage.getItem('payload'))
	const[redirect,setRedirect]=useState(false);
	const [error,setError]=useState(false);
	const [textError,setTextError]=useState(false)
	const[errorMessage,setErrorMessage]=useState('')
	const[userTextError,setUserTextError]=useState(false)
	const[PasswordTextError,setPasswordTextError]=useState(false)
	
useEffect(()=>{
		if(payload){
			setRedirect(true);
		}
		setTextError(false);

},[])

if(redirect){
	return(<Redirect to="admin/dashboard"/>)
}
	const handleChange=(e)=>{
		console.log({[e.target.name]:e.target.value})
		if(e.target.name==='password'&& e.target.value!==''){
			setPassword(e.target.value)
			// setUserTextError(false);
			setPasswordTextError(false);

		}
		else if(e.target.name==='userId'&& e.target.value!==''){
			setUserId(e.target.value)
			// setTextError(false);
			setUserTextError(false);

		}
		else if(e.target.name==='password'&& e.target.value===''){
			setPasswordTextError(true);
			
		}
		else{
			setUserTextError(true);
		}
		
	}

	

	const SubmitData=()=>{
		console.log(Password)
		console.log(userId)
		 if(Password===''){
			setTextError(true)
		}
		else if(userId===''){
			setTextError(true)
		}
		
		if( Password!==''&& userId!==''){
			setTextError(false)
			
			const data={"UserId":userId,"Password":Password}
			console.log(data);
			AdminLogin(data).then((res)=>{
					console.log(res);

					if(res.status===200)
					{
						sessionStorage.setItem('payload',JSON.stringify(res.data))
						setRedirect(true);
					}
					else{
						setError(true);
					}
			}).catch((err)=>{
				console.log("error Found",err);
				setError(true);
				console.log(err.response.data.message)
      			setErrorMessage(err.response.data.message)
			})
		}
		else{
			setUserTextError(true);
			setPasswordTextError(true);
		}

	}




	return (
		
		<div class="row" style={{ display: "flex", flexDirection: "row", height:"100vh", width:'100%'}}>
			
			{
        error &&
        <Modal show={error} onHide={() => setError(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Error Occured</Modal.Title>
          </Modal.Header>
          <Modal.Body>{errorMessage?errorMessage:'Server Error'}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>setError(false)}>
              Close
          </Button>
            
          </Modal.Footer>
        </Modal>
      }
			<div class="col-lg-6 col-sm-6 col-md-6 bgimage " style={{ display: "flex", flexDirection: "column",  }}>
				<div  style={{display:'flex', justifyContent:'center', position:'relative',height:'100%'}}> 
				<img   style={{height:200, width:280, alignSelf:'center'}}src="https://rajyugsolutions.com/wp-content/uploads/2020/04/soil_logo.png"></img>
				</div>
			</div>


			<div class="col-lg-6 col-sm-6 col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent:'center', //alignItems:'center'
			paddingLeft:'10%'}}>
             
			<div  style={{  fontSize:23, fontWeight:'bold', marginBottom:10}}> Log In</div>
				<div   style={{  fontSize:16}}>Please enter your user ID and password to login</div>

				<div style={{marginTop:30}}>
				<div style={{marginLeft:10, fontSize:13}}>
                  User ID
                </div>
                 <input onChange={(e)=>handleChange(e)} name="userId" type="text" placeholder="John Deo" style={{paddingLeft:10,fontSize:14,background:'transparent', width:340, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }} />
				 {userTextError &&
					 <div class="col-lg-12 col-sm-12 col-md-12" style={{ color:"red",display: "flex", flexDirection: "column", padding:'5px' ,//alignItems:'center'
					 paddingLeft:'10%'}}>
					<div>	
						<img src={require('../../assets/img/warning.png')} style={{width:'20px',margin:'5px',height:'20px'}}/>  
						UserId is Required
						 </div>
						 </div>
				 }
				
				<div style={{marginTop:20}}>
				<div style={{marginLeft:10, fontSize:13}}>
                  Password
                </div>

                 <input onChange={(e)=>handleChange(e)} name="password" type='password' style={{background:'transparent', width:340, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, paddingLeft:10}}>
				
                </input>
				</div>
            
				{PasswordTextError &&
					 <div class="col-lg-12 col-sm-12 col-md-12" style={{ color:"red",display: "flex", flexDirection: "column", padding:'5px' ,//alignItems:'center'
					 paddingLeft:'10%'}}>
						 <div>
						 <img src={require('../../assets/img/warning.png')} style={{width:'20px',margin:'5px',height:'20px'}}/>  
 							Password is Required
						 </div>
						 </div>
				 }
				

                <div style={{marginTop:10}}>
                
				<input  type="checkbox" /> <span style={{fontSize:12, color:'gray',marginTop:-10}}> Remeber me</span>
               <Link to="/reset">
				<span style={{marginLeft:150, fontSize:12, color:'gray'}}> Forgot Password</span>
				</Link>
				</div>
				
               {/* <Link to="/admin"> */}
			   
				<button onClick={SubmitData} style={{background:'transparent', width:340, borderStyle:'solid', borderWidth:1, backgroundColor:'#bf891b' ,borderColor:'#bf891b',height:40, borderRadius:40,  marginTop:20}}>
				<span style={{lineHeight:2, marginLeft:10, fontSize:17, fontWeight:'bold',  color:'white'}}> L O G I N</span>
				</button>	
				{/* </Link> */}
				</div>
			</div>


		</div>	
			
	);
}
