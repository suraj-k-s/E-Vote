import { Box, Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import Header from '../../../Admin/components/Header'
import axios from 'axios';

export default class Editprofile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            userid: window.sessionStorage.getItem("userid"),
            name: "",
            address: "",
            phoneno: "",
            email: "",
            photo: "",
            photourl: "",
        }
    }

    saveData = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
    
        formData.append('name',this.state.name);
        formData.append('address',this.state.address);
        formData.append('email',this.state.email);
        formData.append('phoneno',this.state.phoneno);
        formData.append('photo',this.state.photo);
        formData.append('userid',this.state.userid)
        formData.append('photourl',this.state.photourl)
        axios({
    
            method: "POST",
            url: "http://localhost/e-vote/api/Userregistrationeditprofile.php",
            data: formData,
            headers:{ "Content-Type": "multipart/form-data"},
            })
            .then(function (response){
              if (response.data === "Success")
              {
               alert("profile is updated") ;
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
        var userid= this.state.userid;
        axios
            .get(
                `http://localhost/e-vote/api/Userregistration.php?userid=${userid}`
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ userData: data });
                this.setState({name: data[0].user_name})
                this.setState({address: data[0].user_address})
                this.setState({phoneno: data[0].user_phonenumber})
                this.setState({email: data[0].user_email})
                this.setState({photourl: data[0].user_photo})
            });
            
    }

  render() {
    return (
      <div>
        <Box padding="20px">
            <form name="editprofile" id="editprofile">
                <div style={{ margin: "0 auto", width: "fit-content" }}>
                    <Header title="EDIT PROFILE" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "20px" }} >
                    {this.state.userData.map((result,key)=>(
                    <img
                        key={result.user_id}
                        src={result.user_photo}
                        alt=""
                        style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "fill" }}
                    />
                    ))}
                </div>
                <div style={{display: "flex", justifyContent: "center",margin: "20px"}}>
                <input type="file" name="photo" id="photo" onChange={(e) => this.setState({ photo: e.target.files[0] })}></input>
                </div>
                {this.state.userData.map((result,key)=>(
                    
                <div style={{ margin: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <TextField
                            fullWidth
                            key={key}
                            variant="filled"
                            type="text"
                            label="Name"
                            name="name"
                            defaultValue={result.user_name}
                            sx={{ gridColumn: "span 2" }}
                            onChange={this.inputSet}
                        />
                    </div>
                    <div>
                        <TextField
                        key={key}
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address"
                            name="address"
                            defaultValue={result.user_address}
                            sx={{ gridColumn: "span 2" }}
                            onChange={this.inputSet}
                        />
                    </div>
                    <div>
                        <TextField
                        key={key}
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            name="email"
                            defaultValue ={result.user_email}
                            sx={{ gridColumn: "span 2" }}
                            onChange={this.inputSet}
                        />
                    </div>
                    <div>
                        <TextField
                        key={key}
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Phone Number"
                            name="phoneno"
                            defaultValue={result.user_phonenumber}
                            sx={{ gridColumn: "span 2" }}
                            onChange={this.inputSet}
                        />
                    </div>
                    <div>
                        <Box display="flex" justifyContent="center" mt="20px" >
                            <div style={{ margin: "10px" }}>
                                <Button type="submit" color="secondary" variant="contained" onClick={this.saveData}>
                                    Save
                                </Button>
                            </div>
                        </Box>
                    </div>
                </div>
                ))}
            </form>
            </Box>
      </div>
    )
  }
}
