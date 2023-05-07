import { Box, Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import Header from '../../../Admin/components/Header'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

export default class Complaint extends Component {
    constructor(props){
        super(props);
        this.state = {
            complaint: "",
            complaintData: [],
            userid: window.sessionStorage.getItem("userid"),
            columns: [
                { field: "id", headerName: "ID", flex: 0.1 },
                {
                    field: "complaint_date",
                    headerName: "Date",
                    flex: 3,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "complaint_content",
                    headerName: "Content",
                    flex: 2,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "complaint_reply",
                    headerName: "Reply",
                    flex: 2,
                    cellClassName: "name-column--cell",
                },
            ]

        }
    }


    inputSet = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
        
    };

    saveData = (e) => {
        e.preventDefault();

        const formData = new FormData();
    
        formData.append('complaint',this.state.complaint);
        formData.append('userid',this.state.userid);
        axios({
    
            method: "POST",
            url: "http://localhost/e-vote/api/Usercomplaint.php",
            data: formData,
            headers:{ "Content-Type": "multipart/form-data"},
            })
            .then(function (response){
              if (response.data === "Success")
              {
               alert("COMPLAINT IS ADDED") ;
               window.location.reload();
              }
              else{
                alert("failed");
              }
            }); 
            
    }

    componentDidMount() {

        var userid=this.state.userid;

        axios
            .get(
                `http://localhost/e-vote/api/Usercomplaint.php?userid=${userid}`
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ complaintData: data });
            });
    }

    render() {
        return (
            <div>
                <form name="complaintform" id="complaintform">
                <Box m="20px">
                    <div style={{ margin: "0 auto", width: "fit-content" }}>
                        <Header title="COMPLAINTS" />
                    </div>

                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Complaint Details"
                        sx={{ gridColumn: "span 2" }}
                        name="complaint"
                        onChange={this.inputSet}
                    />
                    <Box display="flex" justifyContent="center" mt="20px">
                        <Button type="submit" color="secondary" onClick={this.saveData} variant="contained">
                            Submit
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
                            color: "black",
                            fontFamily: "monospace",
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
                            />
                    
                </Box>
                </Box>
                </form>
            </div>
        )
    }
}
