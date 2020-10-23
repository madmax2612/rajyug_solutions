import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditOutlined from "@material-ui/icons/EditOutlined";
import StarRate from "@material-ui/icons/StarRate";
import SearchRounded from "@material-ui/icons/SearchRounded";
import Block from '@material-ui/icons/Block';
import Delete from '@material-ui/icons/Delete';
import ExpandMore from "@material-ui/icons/ExpandMore";
import ArrowBack from '@material-ui/icons/ArrowBack';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Clear from "@material-ui/icons/Clear";
import { Modal, Table } from 'react-bootstrap';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Link, Redirect } from 'react-router-dom'
import { getUsersProfile } from "utils/Services";
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import { getAllTier } from "utils/Services";
import { Button } from "react-bootstrap";


 export default function View() {
    const [RedirectToEdit,setRedirectToEdit]=useState(false);
    const [redirectToBlock,setRedirectToBlock]=useState(false);

    if(RedirectToEdit){
      return <Redirect to="/admin/ediit" />
    }
    if(redirectToBlock){
        return <Redirect to="/admin/deact" />
      }
    return (
        <div style={{ height: "100vh", width: '100%' }}>
            
      <div class="col-lg-12 col-sm-12" style={{ alignItems: 'center' }}>
        <div class="p-1 rounded  mt-3 " >
          <div class="col-lg-12 col-sm-12">
            <div className="row" style={{ display: "flex", flexDirection: "row", paddingTop: 15 }} >
              <Table responsive size="lg" style={{ margin: '20px' }}>
                <thead style={{ backgroundColor: 'black' }}>
                  <tr >
                    <th >
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}>User Segment</p>
                      </div>
                    </th>
                    <th>
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}> Description</p>
                      </div>
                    </th>

                    <th>
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}>Action</p>
                      </div>
                    </th>

                  </tr>
                </thead>
                <tbody style={{ width: '100%' }}>
                  
                        <tr  style={{ backgroundColor: 'white' }} >
                          <td>Channnel Partner</td>
                          <td>Segment who has refered to more than X number and achieved X amount for the current Quater</td>
                          
                          <td >
                            <div  
                            onClick={()=>setRedirectToEdit(true)}
                            className="delete" style={{ padding: '3px', marginRight: '3px', width: "40%", borderRadius: '20px', display: "inline-block", backgroundColor: "#28D179" }}>
                              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <EditOutlined style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            <div className="delete" style={{ padding: '3px', marginRight: '3px', width: "40%", borderRadius: '20px', display: "inline-block", backgroundColor: "#FF3B30" }}>
                              <div 
                              onClick={()=>setRedirectToBlock(true)}
                              style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <VisibilityOffIcon style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr  style={{ backgroundColor: 'white' }} >
                          <td>Customer</td>
                          <td>Segment who has refered to more than X number and achieved X amount for the current Quater</td>
                          
                          <td >
                            <div  
                            className="delete" style={{ padding: '3px', marginRight: '3px', width: "40%", borderRadius: '20px', display: "inline-block", backgroundColor: "#28D179" }}>
                              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <EditOutlined style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            <div className="delete" style={{ padding: '3px', marginRight: '3px', width: "40%", borderRadius: '20px', display: "inline-block", backgroundColor: "#FF3B30" }}>
                              <div 
                              onClick={()=>setRedirectToBlock(true)}
                              style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <VisibilityOffIcon style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr  style={{ backgroundColor: 'white' }} >
                          <td>Employee</td>
                          <td>Segment who has refered to more than X number and achieved X amount for the current Quater</td>
                          
                          <td >
                            <div  
                            className="delete" style={{ padding: '3px', marginRight: '3px', width: "40%", borderRadius: '20px', display: "inline-block", backgroundColor: "#28D179" }}>
                              <div 
                              onClick={()=>setRedirectToEdit(true)}
                              style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <EditOutlined style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            
                            <div 
                            className="delete" style={{ padding: '3px', marginRight: '3px', width: "40%", borderRadius: '20px', display: "inline-block", backgroundColor: "#FF3B30" }}>
                              <div 
                              onClick={()=>setRedirectToBlock(true)}
                              style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <VisibilityOffIcon style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            
                          </td>
                        </tr>
                        <div style={{ marginBottom: '10px' }} />
                     
                </tbody>
              </Table>


            </div>
          </div>
        </div>


      </div>

      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 60, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>

        <ArrowBack style={{ color: 'gray', fontSize: 20, marginLeft: 6, marginTop: 6, fontWieght: "1000" }} />
        <span style={{ color: 'gray', fontSize: 12, marginLeft: 15, marginTop: 6, fontWieght: "1000" }} > 1</span>
        <span style={{ color: '#99A3A4 ', fontSize: 12, marginLeft: 15, marginTop: 6, fontWieght: "1000" }} > 2</span>
        <span style={{ color: '#99A3A4 ', fontSize: 12, marginLeft: 15, marginTop: 6, fontWieght: "1000" }} > 3</span>
        <span style={{ color: '#99A3A4 ', fontSize: 12, marginLeft: 15, marginTop: 6, fontWieght: "1000" }} > 4</span>
        <span style={{ color: '#99A3A4 ', fontSize: 12, marginLeft: 15, marginTop: 6, fontWieght: "1000" }} > 5</span>


        <ArrowForward style={{ color: 'gray', fontSize: 20, marginLeft: 15, marginTop: 6, fontWieght: "1000" }} />
      </div>



      <Modal
        
        style={{
          paddingTop: 320,
          backgroundColor: 'rgba(100,100,100,0.6)'
        }}>
        <div style={{ width: 1500, height: 340, }}>
          <Clear style={{ color: 'gray', fontSize: 22, justifyContent: 'flex-end', marginTop: 20, marginLeft: 455 }}
        //   onClick={handleClose} 
          />
          <div style={{ backgroundColor: "red", height: 33, width: 33, borderRadius: 80, marginTop: 10, marginLeft: 220, marginTop: 4 }}>   <VisibilityOffIcon style={{ color: 'white', fontSize: 25, marginLeft: 4, marginTop: 3, fontWieght: "1000" }} /></div>
          <div style={{ fontSize: 22, color: "black", fontWeight: 'bold', marginLeft: 120, paddingTop: 10 }}> Deactivate Confirmation</div>
          <div style={{ fontSize: 16, color: "black", marginLeft: 60, paddingTop: 30 }}> This if you want to permanenttly deactivate a teammate. <br />
            <span style={{ marginLeft: 60 }}> This acccount cannot be restored</span>
          </div>

          <div style={{ paddingBottom: 30, width: 140, height: 35, borderWidth: 1, borderColor: 'black', zIndex: 5, borderRadius: 30, borderStyle: 'solid', backgroundColor: 'white', marginLeft: 95, marginTop: 40 }}>
            <div style={{ fontSize: 15, fontWeight: 'bolder', color: 'black', letterSpacing: 10, marginLeft: 40, marginTop: 5 }}> CANCEL</div>
          </div>

          <div className="graddred" style={{ paddingBottom: 30, width: 140, height: 35, borderWidth: 1, borderColor: 'red', zIndex: 5, borderRadius: 30, borderStyle: 'solid', marginLeft: 255, marginTop: -35 }}>
            <div style={{ fontSize: 15, fontWeight: 'bolder', color: 'white', letterSpacing: 10, marginLeft: 25, marginTop: 5 }}> DEACTIVATE</div>
          </div>

        </div>



      </Modal>



    </div>
     
       
     )
}
