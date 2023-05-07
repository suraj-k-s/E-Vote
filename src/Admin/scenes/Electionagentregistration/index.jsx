import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import axios from 'axios';
import React, { Component } from 'react'
import Header from '../../components/Header'

export default class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photo: "",
      address: "",
      gender: "",
      employementidno: "",
      districtData: [],
      district: "",
      placeData: [],
      place: "",
      email: "",
      password: "",
      voteridno: "",
      aadharcardno: "",
      phoneno: "",

    }

  }


  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name',this.state.name);
    formData.append('address',this.state.address);
    formData.append('gender',this.state.gender);
    formData.append('place',this.state.place);
    formData.append('email',this.state.email);
    formData.append('password',this.state.password);
    formData.append('voteridno',this.state.voteridno);
    formData.append('employementidno',this.state.employementidno);
    formData.append('aadharcardno',this.state.aadharcardno);
    formData.append('phoneno',this.state.phoneno);
    formData.append('photo',this.state.photo);
    axios({

        method: "POST",
        url: "http://localhost/e-vote/api/Electionagentregistration.php",
        data: formData,
        headers:{ "Content-Type": "multipart/form-data"},
        })
        .then(function (response){
          if (response.data === "Success")
          {
           alert("A NEW ELECTION AGENT IS ADDED") ;
           window.location.reload();
          }
          else{
            alert("failed");
          }
        }); 
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
  }

  selPlace=(e)=>{

    var district = e.target.value;
   
    axios
        .get(
            `http://localhost/e-vote/api/Place.php?district=${district}`
        )
        .then((response) => response.data)
        .then((data) => {
         
            this.setState({ placeData: data });
        });

  }



  render() {
    return (
      <div>
        <Box padding="20px">
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <Header title="Election Agent Registration" />
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
              <div style={{ background: "rgb(41,48,64)", color: "grey", borderBottom: "1px solid white" }}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginLeft: "10px" }}>Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    style={{ marginLeft: "10px", color: "white" }}
                    onChange={this.inputSet}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div style={{ borderBottom: "1px solid white" }}>
                <select name='district' id='district' style={{ width: "500px", minWidth: "300px", backgroundColor: "rgb(41,48,64)", padding: "10px", color: "white", border: "none" }}  onChange={this.selPlace}>
                  <option defaultValue="" style={{ color: "white" }}>District</option>
                  {this.state.districtData.map((result, key) => (
                    <option defaultValue="" key={key} value={result.district_id} style={{ color: "white" }}>{result.district_name}</option>
                  ))}
                </select>
              </div>
              <div style={{ borderBottom: "1px solid white" }}>
                <select name='place' id='place' style={{ width: "500px", minWidth: "300px", backgroundColor: "rgb(41,48,64)", padding: "10px", color: "white", border: "none" }} onChange={this.inputSet}>
                  <option defaultValue="" style={{ color: "white" }}>Place</option>
                  {this.state.placeData.map((result, key)=>(
                  <option defaultValue="" key={key}  value={result.place_id} style={{ color: "white" }}>{result.place_name}</option>
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
                  label="Employement Id No"
                  name="employementidno"
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
              <div>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Phone Number"
                  name="phoneno"
                  sx={{ gridColumn: "span 2" }}
                  onChange={this.inputSet}
                />
              </div>
              <div style={{ backgroundColor: "rgb(41,48,64)", color: "grey", paddingTop: "20px", paddingBottom: "10px", borderBottom: "1px solid black" }}>
                <Box display="flex" >
                  <div style={{ marginLeft: "10px", color: "white" }}>
                    Upload Photo:
                  </div>
                  <div style={{ marginLeft: "10px", color: "white" }}>
                    <input type="file" onChange={(e) => this.setState({ photo: e.target.files[0] })}></input>
                  </div>
                </Box>
              </div>
              <div>
                <Box display="flex" justifyContent="center" mt="20px">
                  <Button type="submit" color="secondary" variant="contained" onClick={this.saveData}>
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
