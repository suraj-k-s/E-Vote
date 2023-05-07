import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import Header from '../../components/Header'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default class Declaration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      electiondeclaration: "",
      electiondeclarationData: [],
      columns: [
        { field: "id", headerName: "ID", flex: 0.1 },
        {
          field: "election_details",
          headerName: "Election Description",
          flex: 3,
          cellClassName: "name-column--cell",
        },
        {
          field: "election_date",
          headerName: "Declaration Date",
          flex: 1,
        },
        {
          field: "election_for_date",
          headerName: "Election Date",
          flex: 1,
        },
        {
          field: "assign",
          headerName: "Assign Agent",
          width: 100,
          renderCell: (params) => {
            return (
              <>
                <Link to={`/Admin/Assignelectionagentlist/${params.row.election_id}`}>
                  <AddTaskIcon />
                </Link>
              </>
            );
          },
        },
        {
          field: "delete",
          headerName: "Delete",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline style={{ color: "red", cursor: "pointer" }}
                  onClick={() => this.electionDelete(params.row.election_id)}
                />
              </>
            );
          },
        }
      ],
    }
  }


  electionDelete = (id) => {
    axios
      .post(
        "http://localhost/e-vote/api/Electiondeclaration.php?delid=" + id
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
      electiondeclaration: this.state.electiondeclaration,
      date: this.state.date,
    };

    axios
      .post(
        "http://localhost/e-vote/api/Electiondeclaration.php",
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
        "http://localhost/e-vote/api/Electiondeclaration.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ electiondeclarationData: data });
        // console.log(data);
      });
  }

  cancelCourse = () => {
    document.getElementById("electiondeclarationForm").reset();
  };

  render() {
    return (
      <>
        <Box m="20px">
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <Header title="ELECTION DECLARATION" />
          </div>


          <div >
            <form method="post" id="electiondeclarationForm" name="electiondeclarationForm">
              <Box
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
                  label="Election Description"
                  sx={{ gridColumn: "span 2" }}
                  name="electiondeclaration"
                  onChange={this.inputSet}
                />

                <Box display="flex" justifyContent="center" >
                  <input type="date" name="date" onChange={this.inputSet} style={{ background: "rgb(41,48,64)", border: "none", color: "white", height: "50px", padding: "20px", marginTop: "10px" }}></input>
                </Box>


              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button type="submit" color="secondary" onClick={this.saveData} variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          </div>
          <Box mt="20px">
            <div style={{ margin: "0 auto", width: "fit-content" }}><Header
              title="Election List"
            /></div>
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
              rows={this.state.electiondeclarationData}
              columns={this.state.columns}
              pageSize={9}
              rowsPerPageOptions={[5]}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
          <br></br>
        </Box>
      </>
    )
  }
}
