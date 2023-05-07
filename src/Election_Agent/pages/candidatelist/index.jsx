import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../../Admin/components/Header';
import axios from 'axios';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CloseIcon from '@mui/icons-material/Close';

export default class Candidatelist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidateData: [],
            agentid: window.sessionStorage.getItem("electionagentid"),
            columns: [
                { field: "id", headerName: "ID", width: 90 },
                {
                    field: "user_name",
                    headerName: "Name",
                    width: 200,
                    renderCell: (params) => {
                        return (
                            <div className="userListUser">
                                <img className="userListImg" src={params.row.user_photo} alt="" />
                                {params.row.user_name}
                            </div>
                        );
                    },
                },
                { field: "user_address", headerName: "Address", width: 200 },
                {
                    field: "user_gender",
                    headerName: "Gender",
                    width: 120,
                },
                {
                    field: "user_voteridno",
                    headerName: "Voter Id",
                    width: 160,
                },
                {
                    field: "user_phonenumber",
                    headerName: "Phone No",
                    width: 160,
                },
                {
                    field: "user_aadharcardno",
                    headerName: "Aadhar Card No",
                    width: 160,
                },
                {
                    field: "candidate_status",
                    headerName: "Payment",
                    width: 160,
                },
                {
                    field: "accept",
                    headerName: "Accept",
                    width: 60,
                    renderCell: (params) => {
                        return (
                            <>
                            
                                <TaskAltIcon onClick={() => this.userAccept(params.row.candidate_id)} />
                            </>
                        );
                    },
                },
                {
                    field: "delete",
                    headerName: "Reject",
                    width: 60,
                    renderCell: (params) => {
                        return (
                            <>
                                <CloseIcon onClick={() => this.userReject(params.row.candidate_id)} />
                                
                            </>
                        );
                    },
                }
            ]
        }
    }

    componentDidMount(){

        axios
        .get(
          "http://localhost/e-vote/api/Candidatelist.php?aid="+sessionStorage.getItem("electionagentid")
        )
        .then((response) => response.data)
        .then((data) => {
            console.log(data);
          this.setState({ candidateData: data });
        });

    }

    userAccept = (id) => {
        axios
            .get(
                "http://localhost/e-vote/api/Candidateaccept.php?id=" + id
            )
            .then((response) => {
                if (response.data === "Success") {
                    alert("updated")
                    this.componentDidMount();
                } else {
                    alert("Failed");
                }
            });

    }

    userReject = (uid) => {
        axios
            .get(
                "http://localhost/e-vote/api/Candidateaccept.php?uid=" + uid
            )
            .then((response) => {
                if (response.data === "Success") {
                    alert("Rejected")
                    this.componentDidMount();
                } else {
                    alert("Failed");
                }
            });

    }

    render() {
        return (
            <div style={{ flex: "4" }}>
                <Box m="20px">
                    <Box>
                        <div style={{ margin: "0 auto", width: "fit-content" }}>
                            <Header title="CNADIDATE LIST" />
                        </div>
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
                            rows={this.state.candidateData}
                            columns={this.state.columns}
                            components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </Box>
            </div>
        )
    }
}
