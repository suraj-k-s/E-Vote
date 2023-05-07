import React, { Component } from 'react';
import { Box, Button, TextField } from "@mui/material";
import Header from "../../components/Header";
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default class Place extends Component {
    constructor(props) {
        super(props);
        this.state = {
            districtData: [],
            sectionpartData: [],
            district: "",
            section: "",
            place: "",
            placeData: [],
            columns: [
                { field: "id", headerName: "Sl.No" },
                {
                    field: "district_name",
                    headerName: "District Name",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "sectionpart_name",
                    headerName: "Sectionpart Name",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "place_name",
                    headerName: "Place Name",
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
                                    onClick={() => this.placeDelete(params.row.place_id)}
                                />
                            </>
                        );
                    },
                }
            ]
        }

    }

    saveData = (e) => {
        e.preventDefault();

        var dat = {
            section: this.state.section,
            district: this.state.district,
            place: this.state.place
        };

        axios
            .post(
                "http://localhost/e-vote/api/Place.php",
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

    placeDelete = (id) => {
        axios
            .post(
                "http://localhost/e-vote/api/Place.php?delid=" + id
            )
            .then((response) => {
                if (response.data === "Success") {
                    this.componentDidMount();
                } else {
                    alert("Failed");
                }
            });
    };

    cancelCourse = () => {
        document.getElementById("placeForm").reset();
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
                "http://localhost/e-vote/api/Sectionpart.php"
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ sectionpartData: data });
            });

        axios
            .get(
                "http://localhost/e-vote/api/Place.php"
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ placeData: data });
            });
    }






    render() {
        //console.log(this.state.placeData);
        return (
            <>
                <div>
                    <form method="post" id="placeForm" name="placeForm">
                        <div style={{ margin: "0 auto", width: "fit-content" }}>
                            <Box m="10px">
                                <div style={{ margin: "0 auto", width: "fit-content" }}>
                                    <Header title="PLACE REGISTRATION" />
                                </div>
                                <select name="district" id="district" onChange={this.inputSet} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "white" }}>
                                    <option defaultValue="" style={{ color: "black" }}>District</option>
                                    {this.state.districtData.map((result, key) => (
                                        <option defaultValue="" key={key} value={result.district_id} style={{ color: "black" }}>{result.district_name}</option>
                                    ))}
                                </select>

                            </Box>
                            <Box m="10px">
                                <select name='section' id='section' onChange={this.inputSet} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "white" }}>
                                    <option defaultValue="" style={{ color: "black" }}>Sectionpart</option>
                                    {this.state.sectionpartData.map((result, key) => (
                                        <option defaultValue="" key={key} value={result.sectionpart_id} style={{ color: "black" }}>{result.sectionpart_name}</option>
                                    ))}
                                </select>
                            </Box>
                        </div>

                        <Box m="20px">
                            <div >

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
                                        label="Place Name"
                                        sx={{ gridColumn: "span 2" }}
                                        name="place"
                                        onChange={this.inputSet}
                                    />
                                </Box>
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
                                title="PLACE"
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
                                rows={this.state.placeData}
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
