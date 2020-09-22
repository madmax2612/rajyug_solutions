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
import { FormControl, MenuItem, Select } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null)
  const [redirect, setRedirect] = useState(false);
  const [block, setBlock] = useState(false);
  const [editValue, setEditValue] = useState('')
  const [blockData, setBlockData] = useState('')
  const [deleteuser, setDeleteUser] = useState(false)
  const [deleteData, setDeleteData] = useState('')
  const [search,setSearch]=useState('')
  const [selectSegment,setSelectSegment]=useState('')
  const [selectTier,setSelectTier]=useState('')

  useEffect(() => {

    getUsersProfile().then((res) => {
      console.log(res.data.Data);
      if (res.data.Data) {
        setData(res.data.Data)
      }
      else {
        setData('NO DATA FOUND')
      }
    }).catch((err) => {
      if (err) {
        setData('NO DATA FOUND')
      }
    })

  }, [])

const handleChange=(e)=>{

if(e.target.name=="Segment"){
  setSelectSegment(e.target.value)
}
if(e.target.name=="Tier"){
  setSelectTier(e.target.value)
}
}
  const handleClose = () => setShow(false);
  const openEdit = (e) => {
    setEditValue(e);
    setRedirect(true);
  }
  if (redirect) {
    return <Redirect to={{ pathname: "/admin/uedit", state: { data: editValue } }} />
  }
  const openDeactivate = (value) => {
    setBlockData(value);
    setBlock(true);
  }
  const deleteUser = (value) => {
    setDeleteData(value)
    setDeleteUser(true)
  }

  if (deleteuser) {
    return <Redirect to={{ pathname: "/admin/udelete", state: { data: deleteData } }} />
  }
  if (block) {
    return <Redirect to={{ pathname: "/admin/ublock", state: { data: blockData } }} />
  }
  // console.log(data)

  return (

    <div style={{ height: "100vh", width: '100%' }}>
      <div class="col-lg-12 col-sm-12" style={{ width: '100%' }}>
        <div class="pl-4 pr-4 rounded mt-3 pt-4 pb-3" style={{ backgroundColor: 'white', }}>




          <div className="row mb-2" style={{ display: "flex", flexDirection: "row" }} >
            <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
              <span style={{ marginLeft: 15 }}>
                Select Segments
     </span>
              <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }} >

                {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ marginLeft: 10, fontSize: 15, lineHeight: 2.5 }}> Channel Partner</div>
                  <div style={{ marginLeft: 'auto', padding: 6 }}>   	<ExpandMore /> </div>
                </div> */}
                <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectSegment}
                    onChange={handleChange}
                    name="Segment"
                    disableUnderline={true}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                    <MenuItem value="Channel Partner">Channel Partner</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className='col-lg-4 col-sm-12  ' style={{ marginRight: 0 }}  >
              <span style={{ marginLeft: 15 }}>
                Select Tier
         </span>
              <div style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, marginBottom: 15 }}>
                {/* <div style={{ height: 28, width: 28, backgroundColor: 'pink', borderRadius: 80, margin: 5 }}>
                  <StarRate className={classes.icons} style={{ color: 'white', fontSize: 28 }} />
                </div> */}
                <FormControl variant="outlined" style={{ minWidth: "100%", padding: '5px' }}>

                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectTier}
                    onChange={handleChange}
                    name="Tier"
                    disableUnderline={true}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                    <MenuItem value="Channel Partner">Channel Partner</MenuItem>
                  </Select>
                </FormControl>
                {/* <div style={{ marginLeft: 40, marginBottom: -23, fontSize: 15, marginTop: -32, fontWeight: 'bolder' }}> Bronze</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: -6, marginRight: 8 }}>   	<ExpandMore /> </div>
               */}
              </div>
            </div>



            <div className='col-lg-4 col-sm-12' style={{ marginRight: 0 }}  >


              <div style={{ marginLeft: 15 }}>
                Search
              </div>

              <input
                value={search}
                name="Email"
                onChange={handleChange}
                className='col-lg-12 col-sm-12' type="text" placeholder="search..." style={{ paddingLeft: 10, marginBottom: 15, fontSize: 15, background: 'transparent', borderStyle: 'solid', borderWidth: 1, borderColor: '#bf891b', height: 40, borderRadius: 40, }} />
            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-12 col-sm-12" style={{ alignItems: 'center' }}>
        <div class="p-1 rounded  mt-3 " >
          <div class="col-lg-12 col-sm-12">




            <div className="row" style={{ display: "flex", flexDirection: "row", paddingTop: 15 }} >
              <Table responsive size="lg" style={{ margin: '20px' }}>
                <thead style={{ backgroundColor: 'black' }}>
                  <tr >
                    <th >
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}> Name</p>
                      </div>
                    </th>
                    <th>
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}> User ID</p>
                      </div>
                    </th>
                    <th>
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}> Mobile No.</p>
                      </div>
                    </th>
                    <th>
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}>Email ID </p>
                      </div>
                    </th>
                    <th>
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}>Segment </p>
                      </div>
                    </th>
                    <th>
                      <div class="col-lg-12 col-sm-3"  >
                        <p style={{ color: 'white', fontWeight: 'bold', }}>Tier</p>
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
                  {data ? data.map((res) => {
                    return (
                      <>
                        <tr key={res.UserId} style={{ backgroundColor: 'white' }} >
                          <td>{res.Name}</td>
                          <td>{res.UserId}</td>
                          <td>{res.MobileNo}</td>
                          <td>{res.Email}</td>
                          <td>{res.Segment}</td>
                          <td>{res.Amount}</td>

                          <td >
                            {/* <Link to="/admin/useruserview"> */}
                            <div className="delete" onClick={() => deleteUser(res)} style={{ padding: '3px', marginRight: '3px', width: "22%", borderRadius: '20px', display: "inline-block", backgroundColor: "#ffDB58" }}>
                              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <VisibilityOffIcon style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            <div className="delete" style={{ padding: '3px', marginRight: '3px', width: "22%", borderRadius: '20px', display: "inline-block", backgroundColor: "#28D179" }}>
                              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <VisibilityIcon style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/admin/uedit"> */}
                            <div onClick={() => openEdit(res)} className="delete" style={{ padding: '3px', marginRight: '3px', width: "22%", borderRadius: '20px', display: "inline-block", backgroundColor: "#FF3B30" }}>
                              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <EditOutlined style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/admin/ublock"> */}
                            <div className="delete" onClick={() => openDeactivate(res)} style={{ padding: '3px', width: "22%", borderRadius: '20px', display: "inline-block", backgroundColor: "blue" }}>
                              <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <Block style={{ color: 'white', fontSize: 20, fontWeight: "1000" }} />
                              </div>
                            </div>
                            {/* </Link> */}
                          </td>
                        </tr>
                        <div style={{ marginBottom: '10px' }} />
                      </>
                    )
                  }) : data}
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
        show={show}
        onHide={() => setShow(false)}

        style={{
          paddingTop: 320,
          backgroundColor: 'rgba(100,100,100,0.6)'
        }}>
        <div style={{ width: 1500, height: 340, }}>
          <Clear style={{ color: 'gray', fontSize: 22, justifyContent: 'flex-end', marginTop: 20, marginLeft: 455 }} onClick={handleClose} />
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
  );
}