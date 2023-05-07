import { Box, Button, TextField } from "@mui/material";
import Header from "../../components/Header";
import "./Table.css";

import React, { Component } from 'react'
import { DeleteOutline } from "@mui/icons-material";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { mockDataContacts } from "../../data/mockData";




export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: "",
      districtData: [],
      columns: [
        { field: "id", headerName: "Sl.No" },
        {
          field: "district_name",
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
                  onClick={() => this.districtDelete(params.row.district_id)}
                />
              </>
            );
          },
        }
      ]
    };
  }



  districtDelete = (id) => {
    axios
      .post(
        "http://localhost/e-vote/api/District.php?delid=" + id
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      district: this.state.district,
    };

    axios
      .post(
        "http://localhost/e-vote/api/District.php",
        dat
      )
      .then((response) => {
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
        "http://localhost/e-vote/api/District.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ districtData: data });
        // console.log(data);
      });
  }

  cancelCourse = () => {
    document.getElementById("districtForm").reset();
  };



  render() {
    return (
      <>
        <Box m="20px">
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <Header title="DISTRICT REGISTRATION" />
          </div>


          <div >
            <form method="post" id="districtForm" name="districtForm">
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": "span 4",
                }}
              >
                <label >

                </label>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="District Name"
                  sx={{ gridColumn: "span 2" }}
                  name="district"
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
                title="DISTRICT"
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
                rows={this.state.districtData}
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


