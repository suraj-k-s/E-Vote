import React, { Component } from 'react';
import { Box, Button, TextField } from "@mui/material";
import Header from "../../components/Header";
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default class Sectionpart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionpart: "",
      sectionpartData: [],
      columns: [
        { field: "id", headerName: "Sl.No" },
        {
          field: "sectionpart_name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline style={{ color: "red", cursor: "pointer" }}
                  onClick={() => this.sectionpartDelete(params.row.sectionpart_id)}
                />
              </>
            );
          },
        }
      ]
    };
  }

  sectionpartDelete = (id) => {
    axios
      .post(
        "http://localhost/e-vote/api/Sectionpart.php?delid=" + id
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
        } else {
          alert("Failed")
        }
      });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      sectionpart: this.state.sectionpart,
    };

    axios
      .post(
        "http://localhost/e-vote/api/Sectionpart.php",
        dat
      )
      .then((response) => {
        console.log(response.data);
        if (response.data === "Success") {
          this.cancelCourse();
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/e-vote/api/Sectionpart.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ sectionpartData: data });
      });
  }

  cancelCourse = () => {
    document.getElementById("sectionpartForm").reset();
  };

  render() {
    return (
      <>
        <Box m="20px">
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <Header title="SECTIONPART REGISTRATION" />
          </div>
          <div >
            <form method="post" id="sectionpartForm" name="sectionpartForm">
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": "span 4",
                }}
              >
                <label>
                </label>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Sectionpart Name"
                  sx={{ gridColumn: "span 2" }}
                  name="sectionpart"
                  onChange={this.inputSet}
                />
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button type="submit" color="secondary" onClick={this.saveData} variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          </div>
        </Box>
        <Box>
          <Box m="20px">
            <div style={{ margin: "0 auto", width: "fit-content" }}>
              <Header
                title="SECTIONPART"
              />
            </div>

            <Box
              m="40px 0 0 0"
              height="75vh"
              margin="0px 100px 0px 100px"
              paddingBottom="20px"
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
                rows={this.state.sectionpartData}
                columns={this.state.columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                components={{ Toolbar: GridToolbar }}
              />

            </Box>
          </Box>
        </Box>
      </>
    )
  }
}
