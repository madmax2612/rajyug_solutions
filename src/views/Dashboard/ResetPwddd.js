import React, { useState } from "react";

import "./login.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import { resetPassword } from "utils/Services";




export default function Dashboard() {
	
	const [Password,setPassword]=useState('')
	
	const handleChange=(e)=>{
		if(e){
			setPassword(e.target.value);
		}
	}

	const onSubmit=()=>{

		const body={

		}
		
	}
	return (
		<div class="row" style={{ display: "flex", flexDirection: "row",  height:"100vh", width:'100%'}}>
			<div class="col-lg-6 col-sm-6 col-md-6 bgimage " style={{ display: "flex", flexDirection: "column", }}>
				<div  style={{display:'flex', justifyContent:'center', position:'relative', height:'100%'}}> 
				<img   style={{height:200, width:280, alignSelf:'center'}}src="https://rajyugsolutions.com/wp-content/uploads/2020/04/soil_logo.png"></img>
				</div>
			</div>


			<div class="col-lg-6 col-sm-6 col-md-6" style={{ display: "flex", flexDirection: "column",  justifyContent:'center', //alignItems:'center'
			paddingLeft:'10%'}}>
             
			<div  style={{  fontSize:23, fontWeight:'bold', marginBottom:10}}> Reset Password</div>
				<div   style={{  fontSize:16}}>Enter your Email ID below to the password</div>

				<div style={{marginTop:30}}>
				<div style={{marginLeft:10, fontSize:13}}>
				Email ID
                </div>
                 <input type="text" name="reset" onChange={handleChange} placeholder="John Deo" style={{paddingLeft:10,fontSize:14,background:'transparent', width:340, borderStyle:'solid', borderWidth:1, borderColor:'#bf891b',height:40, borderRadius:40, }} />
				 
				
				<div>
			   
				<button onClick={onSubmit} style={{background:'transparent', width:340, borderStyle:'solid', borderWidth:1, backgroundColor:'#bf891b' ,borderColor:'#bf891b',height:40, borderRadius:40,  marginTop:20}}>
				<span style={{lineHeight:2,fontSize:17, fontWeight:'bold',  color:'white', alignSelf:'center'}}> S U B M I T</span>
				</button>	
				
				</div>
			</div>

         </div>
		</div>	
			
	);
}
