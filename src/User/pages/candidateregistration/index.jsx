import { Box, Button } from '@mui/material';
import React, { Component } from 'react'
import Header from '../../../Admin/components/Header';
import axios from 'axios';

export default class Candidateregistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: window.sessionStorage.getItem("userid"),
            eid: window.location.href.split('/')[5],
            districtData: [],
            sectionpartData: [],
            district: "",
            section: "",
            place: "",
            placeData: [],
            ward: "",
            wardData: [],
        }
    }

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
        formData.append('user', this.state.userid);
        formData.append('ward', this.state.ward);

        axios({

            method: "POST",
            url: "http://localhost/e-vote/api/Nomination.php",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                if (response.data === "Success") {
                    alert("Nomination Submitted");


                }
                else {
                    alert("failed");
                }
            });
        this.componentDidMount();
        this.cancelCourse();
    };

    cancelCourse = () => {
        document.getElementById("candidateForm").reset();
    };

    componentDidMount(){
        axios
            .get(
                "http://localhost/e-vote/api/District.php"
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ districtData: data });
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

    inputSet = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });

    };

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
            <div>
                <div>
                    <form method="post" id="candidateForm" name="assignForm">
                        <div style={{ margin: "0 auto", width: "fit-content" }}>
                            <Box m="10px">
                                <div style={{ margin: "0 auto", width: "fit-content" }}>
                                    <Header title="ASSIGN" />
                                </div>
                                <select name="district" id="district" onChange={e => { this.inputSet(e); this.reloadSet() }} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "black" }}>
                                    <option defaultValue="" style={{ color: "black" }}>District</option>
                                    {this.state.districtData.map((result, key) => (
                                        <option defaultValue="" key={key} value={result.district_id} style={{ color: "black" }}>{result.district_name}</option>
                                    ))}
                                </select>

                            </Box>
                            <Box m="10px">
                                <select name='section' id='section' onChange={this.selPlace} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "black" }}>
                                    <option defaultValue="" style={{ color: "black" }}>Sectionpart</option>
                                    {this.state.sectionpartData.map((result, key) => (
                                        <option defaultValue="" key={key} value={result.sectionpart_id} style={{ color: "black" }}>{result.sectionpart_name}</option>
                                    ))}
                                </select>
                            </Box>
                            <Box m="10px">
                                <select name='place' id='place' onChange={(e) => this.selWard(e.target.value)} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "black" }}>
                                    <option defaultValue="" style={{ color: "black" }}>place</option>
                                    {this.state.placeData.map((result, key) => (
                                        <option key={key} value={result.place_id} style={{ color: "black" }}>{result.place_name}</option>
                                    ))}
                                </select>
                            </Box>
                            <Box m="10px">
                                <select name='ward' id='ward' onChange={this.inputSet} style={{ width: "fit-content", minWidth: "300px", backgroundColor: "transparent", padding: "10px", color: "black" }}>
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
            </div>
        )
    }
}
