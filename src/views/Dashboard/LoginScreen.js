import React,{useEffect, useState} from "react";

import "./login.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
import {AdminLogin} from '../../utils/Services'



export default function Dashboard() {
	const [userId,setUserId]=useState('');
	const [Password,setPassword]=useState('');
	const [payload,setPayload]=useState(sessionStorage.getItem('payload'))
	const[redirect,setRedirect]=useState(false);
	const [error,setError]=useState(false);

useEffect(()=>{
		if(payload){
			setRedirect(true);
		}

},[])

	const handleChange=(e)=>{
		console.log({[e.target.name]:e.target.value})
		if(e.target.name==='password'){
			setPassword(e.target.value)
		}
		else{
			setUserId(e.target.value)
		}
	}

	const SubmitData=()=>{
		console.log(Password)
		console.log(userId)
		if(Password && userId){
			const data={"UserId":userId,"Password":Password}
			console.log(data);
			AdminLogin(data).then((res)=>{
					console.log(res);
					if(res.data.success==="200")
					{
						setRedirect(true);
						sessionStorage.setItem('payload',JSON.stringify(res.data))
					}
					else{
						setError(true);
					}
			}).catch((err)=>{
				console.log(err);
				setError(true);
			})
		}

	}

if(redirect){
	return(<Redirect to="admin/dashboard"/>)
}


	return (
		<div class="row" style={{ display: "flex", flexDirection: "row", height:"100vh", width:'100%'}}>
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
				 
				
				<div style={{marginTop:20}}>
				<div style={{marginLeft:10, fontSize:13}}>
                  Password
                </div>

                 <input onChange={(e)=>handleChange(e)} name="password" type='password' style={{background:'transparent', width:340, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, paddingLeft:10}}>
				
                </input>
				</div>
            
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
