/*eslint-disable*/
import React, { useEffect, useState } from "react";
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
import { Button, Modal } from 'react-bootstrap';
import StarRate from "@material-ui/icons/StarRate";
import EditOutlined from "@material-ui/icons/EditOutlined";
import Divider from "@material-ui/core/Divider";
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import Delete from '@material-ui/icons/Delete';
import Clear from '@material-ui/icons/Clear';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Modal} from 'react-bootstrap';
import '../../stylee.css';
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import { Link, Redirect } from 'react-router-dom'
import { getAllTier } from "utils/Services";
import { Table } from "@material-ui/core";
import { deleteTier } from "utils/Services";

const useStyles = makeStyles(styles);


export default function TierView() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [redirect,setRedirect]=useState(false);
    const [editValue,setEditValue]=useState('')
    const [showDelete,setShowDelete]=useState(false);
    const [id,setId]=useState('');
    const classes = useStyles();

    useEffect(() => {
        getAllTier().then((res) => {
            console.log(res)
            if (res.data.Tiers)
                setData(res.data.Tiers)
            else
                setData('Nothing found')
        }).catch((err) => {
            console.log(err)
        })
    }, [])

const EditFunction=(e)=>{
    // console.log(e)
    if(e){
        setEditValue(e);
    }
    
    setRedirect(true)
}


    // console.log(redirect)

    if(redirect){
        return <Redirect to={{pathname:"/admin/tedit",state:{data:editValue}}}/>
    }

    const handleClose = () => {
        setShow(false)
        setShowDelete(false);
    };

    const DeleteFinal=(e)=>{
        setShowDelete(true);
        setId(e.id)
    }

   const DeleteFunction=(e)=>{
       console.log(e)
       const dataId={
       "id" :id
        }
        
        deleteTier(dataId).then((res)=>{
                console.log(res);
                if(res){
                    setShowDelete(false);
                    getAllTier().then((res) => {
                        console.log(res)
                        if (res.data.Tiers)
                            setData(res.data.Tiers)
                        else
                            setData('Nothing found')
                    }).catch((err) => {
                        console.log(err)
                    }) 
                }
        }).catch((err)=>{
            console.log(err.response)
        })
   }
    return (
        <>
        <Modal 
        show={showDelete}
         onHide={handleClose}
         centered
        >
   
        <Modal.Body style={{padding:"20px"}}>Are Sure You Want to Delete?</Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:"red",border:'none',color:"white"}} onClick={DeleteFunction}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>

        <div style={{ width: '100%' }}>
            <div style={{ marginLeft: 15, marginTop: -10 }}>

                <div style={{ fontSize: 20, fontWeight: "bold", lineHeight: 4 }}> Tier</div>

                <div style={{ width: 30, height: 2, backgroundColor: '#bf891b', marginTop: -30 }}></div>
            </div>


         
            <Table responsive style={{ margin: '20px', width: '100%' }}>
                <thead style={{ backgroundColor: 'black' }}>
                    <tr >
                        <th >
                            <div class="col-lg-12 col-sm-3"  >
                                <p style={{ color: 'white', fontWeight: 'bold', }}> Tier</p>
                            </div>
                        </th>
                        <th>
                            <div class="col-lg-12 col-sm-3"  >
                                <p style={{ color: 'white', fontWeight: 'bold', }}> Description</p>
                            </div>
                        </th>
                        <th>
                            <div class="col-lg-12 col-sm-3"  >
                                <p style={{ color: 'white', fontWeight: 'bold', }}> Value</p>
                            </div>
                        </th>
                        <th>
                            <div class="col-lg-12 col-sm-3"  >
                                <p style={{ color: 'white', fontWeight: 'bold', }}>Rewards </p>
                            </div>
                        </th>
                        <th>
                            <div class="col-lg-12 col-sm-3"  >
                                <p style={{ color: 'white', fontWeight: 'bold', }}>Amount </p>
                            </div>
                        </th>
                        <th>
                            <div class="col-lg-12 col-sm-3"  >
                                <p style={{ color: 'white', fontWeight: 'bold', }}>Segment</p>
                            </div>
                        </th>
                        <th>
                            <div class="col-lg-12 col-sm-3"  >
                                <p style={{ color: 'white', fontWeight: 'bold', }}>Action</p>
                            </div>
                        </th>

                    </tr>
                </thead>
                <tbody >
                    {data ? data.map((res) => {
                        return (
                            <>
                                <tr style={{backgroundColor:'white'}}>
                                    <td style={{padding:'15px'}}>{res.TierName}</td>
                                    <td style={{paddingLeft:'15px'}}>{res.Description}</td>
                                    <td style={{paddingLeft:'15px'}}>{res.Value}</td>
                                    <td style={{paddingLeft:'15px'}}>{res.Rewards}</td>
                                    <td style={{paddingLeft:'15px'}}>{res.Amount}</td>
                                    <td style={{paddingLeft:'15px'}}>{res.Segment}</td>
                                    <td>
                                    
                                    <div className="delete" 
                                    onClick={()=>EditFunction(res)}
                                    style={{width:"50%", borderRadius:'20px',display:"inline-block",backgroundColor: "#28D179"}}>
                                    <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                                    <EditOutlined style={{ color: 'white'  }} />
                                    </div>       
                                    </div>
                                    
                                    <div onClick={()=>DeleteFinal(res)} className="delete" style={{width:"50%", borderRadius:'20px',display:"inline-block",backgroundColor: "#FF3B30"}}>
                                    <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                                    <Delete  style={{ color: 'white' }} />
                                    </div>
                                    </div>
                                
                                        
                                    </td>
                                </tr>
                            </>
                        )
                    }) : data}
                </tbody>
            </Table>

            


            {/* <Modal
                show={show}
                onHide={() => setShow(false)}
                style={{
                    // paddingTop: 320,
                    backgroundColor: 'rgba(100,100,100,0.6)'
                }}
                centered 
                >
                <div style={{ width: 1500, height: 340, }}>
                    <Clear style={{ color: 'gray', fontSize: 22, justifyContent: 'flex-end', marginTop: 20, marginLeft: 455 }} onClick={handleClose} />
                    <div style={{ backgroundColor: "red", height: 33, width: 33, borderRadius: 80, marginTop: 10, marginLeft: 220, marginTop: 4 }}>   <Delete style={{ color: 'white', fontSize: 25, marginLeft: 4, marginTop: 3, fontWieght: "1000" }} /></div>
                    <div style={{ fontSize: 22, color: "black", fontWeight: 'bold', marginLeft: 190, paddingTop: 10 }}> Delete Tier</div>
                    <div style={{ fontSize: 16, color: "black", marginLeft: 90, paddingTop: 30 }}> This if you want to permanenttly delete a tier. <br />
                        <span style={{ marginLeft: 60 }}> This information cannot be restored</span>
                    </div>

                    <div
                        className="delete"
                        style={{ paddingBottom: 30, width: 140, height: 35, borderWidth: 1, borderColor: 'black', zIndex: 5, borderRadius: 30, borderStyle: 'solid', backgroundColor: 'white', marginLeft: 95, marginTop: 40 }}>
                        <div style={{ fontSize: 15, fontWeight: 'bolder', color: 'black', letterSpacing: 10, marginLeft: 40, marginTop: 5 }}> CANCEL</div>
                    </div>

                    <div className="graddred"
                        onClick={() => setShow(false)}
                        style={{ paddingBottom: 30, width: 140, height: 35, borderWidth: 1, borderColor: 'red', zIndex: 5, borderRadius: 30, borderStyle: 'solid', marginLeft: 255, marginTop: -35 }}>
                        <div style={{ fontSize: 15, fontWeight: 'bolder', color: 'white', letterSpacing: 10, marginLeft: 40, marginTop: 5 }} > DELETE</div>
                    </div>

                </div>



            </Modal> */}


            <div class="col-lg-12 col-sm-12" style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-end', marginTop: 30, marginBottom: 20 }}>
                <Link to="/admin/tcreate">
                    <div className="gradd" style={{ paddingBottom: 30, width: 200, height: 35, borderWidth: 1, borderColor: 'black', zIndex: 5, borderRadius: 30, borderStyle: 'solid', }}>
                        <div style={{ fontSize: 15, fontWeight: 'bolder', color: 'white', letterSpacing: 10, marginLeft: 50, marginTop: 5 }}> ADD NEW TIER</div></div>
                </Link>
            </div>





        </div>
        </>
    );
}
