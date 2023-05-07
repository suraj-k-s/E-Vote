import { Box, TextField } from '@mui/material'
import React, { Component } from 'react'
import Header from '../../components/Header'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      complaintData: [],
      columns: [
        { field: "id", headerName: "ID", flex: 0.1 },
        {
          field: "user_name",
          headerName: "Name",
          flex: 1.5,
          cellClassName: "name-column--cell",
        },
        {
          field: "feedback_content",
          headerName: "Feedback",
          flex: 4,
        },
      ]
    }
  }




  componentDidMount() {
    axios
      .get(
        "http://localhost/e-vote/api/Userfeedback.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ complaintData: data });
      });
  }

  render() {
    return (
      <div>
        <Box m="20px">
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <Header
              title="USER COMPLAINTS"
            />
          </div>
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
              rows={this.state.complaintData}
              columns={this.state.columns}
              pageSize={9}
              rowsPerPageOptions={[5]}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>


        </Box>
      </div>
    )
  }
}
