import React, { Component } from 'react';
import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default class Ward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            districtData: [],
            sectionpartData: [],
            eid: window.location.href.split('/')[5],
            aid: window.location.href.split('/')[6],
            district: "",
            section: "",
            place: "",
            placeData: [],
            ward: "",
            wardData: [],
            assignData: [],
            columns: [
                { field: "id", headerName: "Sl.No" },
                {
                    field: "electionagent_name",
                    headerName: "Name",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "electionagent_employementidno",
                    headerName: "Employement Id",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "district_name",
                    headerName: "District",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "sectionpart_name",
                    headerName: "Section",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "place_name",
                    headerName: "Place",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "ward_name",
                    headerName: "Ward",
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
                                    onClick={() => this.assignDelete(params.row.assign_id,params.row.electionagent_id)}
                                />
                            </>
                        );
                    },
                }
            ]
        }

    }

    assignDelete = (id,eid) => {
        axios
            .post(
                `http://localhost/e-vote/api/Assignagent.php?aid=${id}&agent=${eid}`
            )
            .then((response) => {
                if (response.data === "Success") {
                    alert("deleted")
                    this.componentDidMount();
                } else {
                    alert("Failed");
                }
            });
    };

    

    reloadSet = (e) => {
        this.setState({ sectionpartData: [] });
        this.setState({ placeData: [] });
        this.setState({ wardData: [] });
        axios
            .get(
                "http://localhost/e-vote/api/Sectionpart.php"
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ sectionpartData: data });
            });

    }

    saveData = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('election', this.state.eid);
        formData.append('agent', this.state.aid);
        formData.append('ward', this.state.ward);

        axios({

            method: "POST",
            url: "http://localhost/e-vote/api/Assignagent.php",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                if (response.data === "Success") {
                    alert("ELECTION AGENT IS ASSIGNED");


                }
                else {
                    alert("failed");
                }
            });
        this.componentDidMount();
        this.cancelCourse();
    };



    cancelCourse = () => {
        document.getElementById("assignForm").reset();
    };

    inputSet = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });

    };



    componentDidMount() {
       
        axios
            .get(
                "http://localhost/e-vote/api/District.php"
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ districtData: data });
            });
       
       
        axios
            
            .get(
                "http://localhost/e-vote/api/Assignagent.php"
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ assignData: data });
                // console.log(data);
            });

    }



    selPlace = (e) => {

        var section = e.target.value;
        var district = this.state.district;
        this.setState({ placeData: [] });
        this.setState({ wardData: [] });

        axios
            .get(
                `http://localhost/e-vote/api/Place.php?district=${district}&section=${section}`
            )
            .then((response) => response.data)
            .then((data) => {

                this.setState({ placeData: data });
            });

    }


    selWard = (place) => {

        this.setState({ wardData: [] });
        axios
            .get(
                `http://localhost/e-vote/api/Ward.php?place=${place}`
            )
            .then((response) => response.data)
            .then((data) => {
                
                this.setState({ wardData: data });
            });

    }




    render() {
        return (
            <>
                <div>
                    <form method="post" id="assignForm" name="assignForm">
                        <div style={{ margin: "0 auto", width: "fit-content" }}>
                            <Box m="10px">
                                <div style={{ margin: "0 auto", width: "fit-content" }}>
                                    <Header title="ASSIGN" />
                                </div>
                                <select name="district" id="district" onChange={e => { this.inputSet(e); this.reloadSet() }} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "white" }}>
                                    <option defaultValue="" style={{ color: "black" }}>District</option>
                                    {this.state.districtData.map((result, key) => (
                                        <option defaultValue="" key={key} value={result.district_id} style={{ color: "black" }}>{result.district_name}</option>
                                    ))}
                                </select>

                            </Box>
                            <Box m="10px">
                                <select name='section' id='section' onChange={this.selPlace} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "white" }}>
                                    <option defaultValue="" style={{ color: "black" }}>Sectionpart</option>
                                    {this.state.sectionpartData.map((result, key) => (
                                        <option defaultValue="" key={key} value={result.sectionpart_id} style={{ color: "black" }}>{result.sectionpart_name}</option>
                                    ))}
                                </select>
                            </Box>
                            <Box m="10px">
                                <select name='place' id='place' onChange={(e) => this.selWard(e.target.value)} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "white" }}>
                                    <option defaultValue="" style={{ color: "black" }}>place</option>
                                    {this.state.placeData.map((result, key) => (
                                        <option key={key} value={result.place_id} style={{ color: "black" }}>{result.place_name}</option>
                                    ))}
                                </select>
                            </Box>
                            <Box m="10px">
                                <select name='ward' id='ward' onChange={this.inputSet} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "white" }}>
                                    <option defaultValue="" style={{ color: "black" }}>ward</option>
                                    {this.state.wardData.map((result, key) => (
                                        <option defaultValue="" key={key} value={result.ward_id} style={{ color: "black" }}>{result.ward_name}</option>
                                    ))}
                                </select>
                            </Box>
                        </div>

                        <Box m="20px">
                            <div >


                                <Box display="flex" justifyContent="center" mt="20px">
                                    <Button type="submit" color="secondary" onClick={this.saveData} variant="contained">
                                        Submit
                                    </Button>
                                </Box>
                            </div>
                        </Box>
                    </form>
                </div>
                <Box>
                    <Box m="20px">
                        <div style={{ margin: "0 auto", width: "fit-content" }}>
                            <Header
                                title="Assigned Agent"
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
                                rows={this.state.assignData}
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
