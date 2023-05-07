import React, { Component } from 'react'

import { Box, Modal, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import axios from 'axios';
import ImageIcon from '@mui/icons-material/Image';

export default class Electionagentnotassignlist extends Component {
  constructor(props) {
    super(props);
    this.state = {

      open: false,
      agentImage: "",

      style: [{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }],
      electionagentData: [],
      columns: [
        { field: "id", headerName: "ID", flex: 0.1 },
        {
          field: "electionagent_name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "electionagent_address",
          headerName: "Address",
          flex: 1.5,
        },
        {
          field: "place_name",
          headerName: "Place",
          flex: 1,
        },
        {
          field: "electionagent_employementidno",
          headerName: "Employement Number",
          type: "number",
          headerAlign: "left",
          align: "left",
          flex: 1.3,
        },
        {
          field: "electionagent_phonenumber",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "electionagent_email",
          headerName: "Email",
          flex: 1.3,
        },
        {
          field: "electionagent_aadharcardno",
          headerName: "Aadharcard No",
          flex: 1,
        },
        {
          field: "electionagent_photo",
          headerName: "Photo",
          width: 100,
          renderCell: (params) => {
            return (
                <ImageIcon onClick={()=>this.handleOpen(params.row.electionagent_photo)} />
                
            );
          },
        },
      ],
    }


  }


  handleOpen = (e) => {
    this.setState({ open: true });
    this.setState({ agentImage: e });
  }


  handleClose = () => {
    this.setState({ open: false });
  }


  componentDidMount() {
    axios
      .get(
        "http://localhost/e-vote/api/Electionagentnotassignedlist.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ electionagentData: data });
      });
  }

  render() {
    console.log(this.state.agentImage);
    return (
      <>
      <Box m="20px">
        <div style={{ margin: "0 auto", width: "fit-content" }}><Header
          title="ELECTION AGENT NOT ASSIGNED LIST"
        /></div>
        
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: "#70aaa2",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#3e4396",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": {
              color: "#3e4396",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: "#3e4396",
            },
          }}
        >
          <DataGrid
            rows={this.state.electionagentData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>

      </Box>
      <Modal
      keepMounted
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={this.state.style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          photo
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <img src={this.state.agentImage} alt="" width= "200px" height="200px" />
        </Typography>
      </Box>
    </Modal>
    </>
    )
  }
}
