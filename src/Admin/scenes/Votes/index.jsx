import React, { Component } from 'react'

import { Box, Button, Modal, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import axios from 'axios';

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {

      
      agentImage: "",

      
      electionagentData: [],
      columns: [
        { field: "id", headerName: "ID", flex: 0.1 },
        {
          field: "user_name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "user_address",
          headerName: "Address",
          flex: 1.5,
        },
        {
          field: "user_phonenumber",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "user_email",
          headerName: "Email",
          flex: 1.3,
        },
        {
          field: "user_aadharcardno",
          headerName: "Aadharcard No",
          flex: 1,
        },
      ],
    }


  }

  saveData = () => {

    axios
    .post(
        "http://localhost/e-vote/api/Resultpublished.php"
    
      )
      .then((response) => {
        if (response.data === "Success") {
          alert("Result Published");
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });

  } 

  componentDidMount() {
    axios
      .get(
        "http://localhost/e-vote/api/Allvotes.php"
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
          title="VOTE LIST"
        /></div>
        <Box display="flex" justifyContent="center" mt="20px">
        <Button type="submit" color="secondary" onClick={this.saveData} variant="contained">
                  PUBLISH RESULT
                </Button>
        </Box>
        
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
      
    </>
    )
  }
}
