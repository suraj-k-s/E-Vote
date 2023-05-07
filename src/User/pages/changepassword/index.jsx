import React, { Component } from 'react'
import Header from '../../../Admin/components/Header'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';

export default class Changepassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            userid: window.sessionStorage.getItem("userid"),
            password: "",
            newpassword: "",
            confirmpassword: "",
        }
    }


    saveData = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
    
        formData.append('password',this.state.password);
        formData.append('newpassword',this.state.newpassword);
        formData.append('confirmpassword',this.state.confirmpassword);
        formData.append('userid',this.state.userid)
        axios({
    
            method: "POST",
            url: "http://localhost/e-vote/api/Userchangepassword.php",
            data: formData,
            headers:{ "Content-Type": "multipart/form-data"},
            })
            .then(function (response){
              if (response.data === "Success")
              {
               alert("password is updated") ;
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

    

  render() {
    return (
      <div>
        <Box padding="20px">
                <div style={{ margin: "0 auto", width: "fit-content" }}>
                    <Header title="CHANGE PASSWORD" />
                </div>
                <div style={{ margin: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            label="Current Password"
                            name="password"
                            sx={{ gridColumn: "span 2" }}
                            onChange={this.inputSet}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            label="New Password"
                            name="newpassword"
                            sx={{ gridColumn: "span 2" }}
                            onChange={this.inputSet}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            label="Confirm Password"
                            name="confirmpassword"
                            sx={{ gridColumn: "span 2" }}
                            onChange={this.inputSet}
                        />
                    </div>
                    <div>
                        <Box display="flex" justifyContent="center" mt="20px" >
                            <div style={{ margin: "10px" }}>
                                <Button type="submit" color="secondary" variant="contained" onClick={this.saveData}>
                                    Submit
                                </Button>
                            </div>

                        </Box>
                    </div>
                </div>
            </Box>
      </div>
    )
  }
}
