import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { Component } from 'react'
import Header from '../../../Admin/components/Header'



export default class Userregistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photo: "",
            address: "",
            districtData: [],
            district: "",
            sectionpartData: [],
            section: "",
            placeData: [],
            place: "",
            wardData: [],
            ward: "",
            email: "",
            password: "",
            voteridno: "",
            aadharcardno: "",
            phonenumber: "",
        }

    }

    inputSet = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
        
    };


    saveData = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name',this.state.name);
        formData.append('address',this.state.address);
        formData.append('gender',this.state.gender);
        formData.append('ward',this.state.ward);
        formData.append('email',this.state.email);
        formData.append('password',this.state.password);
        formData.append('voteridno',this.state.voteridno);
        formData.append('aadharcardno',this.state.aadharcardno);
        formData.append('photo',this.state.photo);
        formData.append('phonenumber',this.state.phonenumber);
        axios({

            method: "POST",
            url: "http://localhost/e-vote/api/Userregistration.php",
            data: formData,
            headers:{ "Content-Type": "multipart/form-data"},
            })
            .then(function (response){
                console.log(response.data);
              if(response.data === "Success")
              {
                alert("registered")
                window.location='/';
              }
              else
              {
                alert("failed")
              }
            });

        
    };

    cancelCourse = () => {
        document.getElementById("wardForm").reset();
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
            
    }

    selPlace=(e)=>{

        var section = e.target.value;
        var district = this.state.district;
       
        axios
            .get(
                `http://localhost/e-vote/api/Place.php?district=${district}&section=${section}`
            )
            .then((response) => response.data)
            .then((data) => {
                // console.log(data);
                this.setState({ placeData: data });
            });

    }
    
    selWard=(e)=>{

        var place = e.target.value;
       
        axios
            .get(
                `http://localhost/e-vote/api/Ward.php?place=${place}`
            )
            .then((response) => response.data)
            .then((data) => {
                // console.log(data);
                this.setState({ wardData: data });
            });

    }

    reloadSet = (e) => {
        this.setState({ sectionpartData: [] });
        axios
        .get(
            "http://localhost/e-vote/api/Sectionpart.php"
        )
        .then((response) => response.data)
        .then((data) => {
            this.setState({ sectionpartData: data });
        });

    }





    render() {
        // console.log(this.state.placeData);
        return (
            <div>
                <Box padding="20px">
                    <div style={{ margin: "0 auto", width: "fit-content" }}>
                        <Header title="User Registration" />
                    </div>
                    <div style={{ margin: "0 auto", width: "fit-content" }}>
                        <form method="post" id="districtForm" name="districtForm">
                            <div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Name"
                                    name="name"
                                    sx={{ gridColumn: "span 2" }}
                                    onChange={this.inputSet}
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address"
                                    name="address"
                                    sx={{ gridColumn: "span 2" }}
                                    onChange={this.inputSet}
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Phone Number"
                                    name="phonenumber"
                                    sx={{ gridColumn: "span 2" }}
                                    onChange={this.inputSet}
                                />
                            </div>
                            <div style={{ background: "hsla(0,0%,82%,.3)", color: "grey", borderBottom: "1px solid black" }}>
                                <FormControl>
                                    <FormLabel id="gender">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender"
                                        onClick={this.inputSet}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div style={{ borderBottom: "1px solid black" }}>
                                <select name='district' id='district' onChange={e => { this.inputSet(e); this.reloadSet() }} style={{ width: "500px", minWidth: "300px", backgroundColor: "hsla(0,0%,82%,.3)", padding: "10px", color: "grey", border: "none" }}>
                                    <option defaultValue="" style={{ color: "black" }}>District</option>
                                    {this.state.districtData.map((result, key) => (
                                    <option defaultValue="" key={key} value={result.district_id} style={{ color: "black" }}>{result.district_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ borderBottom: "1px solid black" }}>
                                <select name='sectionpart' id='sectionpart' onChange={this.selPlace} style={{ width: "500px", minWidth: "300px", backgroundColor: "hsla(0,0%,82%,.3)", padding: "10px", color: "grey", border: "none" }}>
                                    <option defaultValue="" style={{ color: "black" }}>Sectionpart</option>
                                    {this.state.sectionpartData.map((result, key) => (
                                    <option defaultValue="" key={key} value={result.sectionpart_id} style={{ color: "black" }}>{result.sectionpart_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ borderBottom: "1px solid black" }}>
                                <select name='place' id='place' onChange={this.selWard} style={{ width: "500px", minWidth: "300px", backgroundColor: "hsla(0,0%,82%,.3)", padding: "10px", color: "grey", border: "none" }}>
                                    <option defaultValue="" style={{ color: "black" }}>Place</option>
                                    {this.state.placeData.map((result, key) => (
                                    <option defaultValue="" value={result.place_id} key={key} style={{ color: "black" }}>{result.place_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ borderBottom: "1px solid black" }}>
                                <select name='ward' id='ward' onChange={this.inputSet} style={{ width: "500px", minWidth: "300px", backgroundColor: "hsla(0,0%,82%,.3)", padding: "10px", color: "grey", border: "none" }}>
                                    <option defaultValue="" style={{ color: "black" }}>Ward</option>
                                    {this.state.wardData.map((result, key) =>(
                                    <option defaultValue="" key={key} value={result.ward_id} style={{ color: "black" }}>{result.ward_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email"
                                    name="email"
                                    sx={{ gridColumn: "span 2" }}
                                    onChange={this.inputSet}
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Password"
                                    name="password"
                                    sx={{ gridColumn: "span 2" }}
                                    onChange={this.inputSet}
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Voter Id No"
                                    name="voteridno"
                                    sx={{ gridColumn: "span 2" }}
                                    onChange={this.inputSet}
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Aadhar Card No"
                                    name="aadharcardno"
                                    sx={{ gridColumn: "span 2" }}
                                    onChange={this.inputSet}
                                />
                            </div>
                            <div style={{ backgroundColor: "hsla(0,0%,82%,.3)", color: "grey", paddingTop: "20px", paddingBottom: "10px", borderBottom: "1px solid black" }}>
                                <Box display="flex" >
                                    <div margin="10px">
                                        Upload Photo:
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <input type="file" onChange={(e)=>this.setState({ photo: e.target.files[0] })}></input>
                                    </div>
                                </Box>
                            </div>
                            <div>
                                <Box display="flex" justifyContent="center" mt="20px">
                                    <Button type="submit" color="secondary" onClick={this.saveData} variant="contained">
                                        Submit
                                    </Button>
                                </Box>
                            </div>
                        </form>
                    </div>
                </Box>
            </div>
        )
    }
}
