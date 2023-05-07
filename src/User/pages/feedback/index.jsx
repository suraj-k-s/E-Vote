import { Box, Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import Header from '../../../Admin/components/Header'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

export default class Complaint extends Component {
    constructor(props){
        super(props);
        this.state = {
            feedback: "",
            userid: window.sessionStorage.getItem("userid"),
            

        }
    }


    inputSet = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
        
    };

    saveData = (e) => {
        e.preventDefault();

        const formData = new FormData();
    
        formData.append('feedback',this.state.feedback);
        formData.append('userid',this.state.userid);
        axios({
    
            method: "POST",
            url: "http://localhost/e-vote/api/Userfeedbackadd.php",
            data: formData,
            headers:{ "Content-Type": "multipart/form-data"},
            })
            .then(function (response){
              if (response.data === "Success")
              {
               alert("FEEDBACK IS ADDED") ;
               window.location.reload();
              }
              else{
                alert("failed");
              }
            }); 
            
    }


    render() {
        return (
            <div>
                <form name="complaintform" id="complaintform">
                <Box m="20px">
                    <div style={{ margin: "0 auto", width: "fit-content" }}>
                        <Header title="FEEDBACK" />
                    </div>

                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Enter Your Feedback"
                        sx={{ gridColumn: "span 2" }}
                        name="feedback"
                        onChange={this.inputSet}
                    />
                    <Box display="flex" justifyContent="center" mt="20px">
                        <Button type="submit" color="secondary" onClick={this.saveData} variant="contained">
                            Submit
                        </Button>
                    </Box>
                </Box>
                </form>
            </div>
        )
    }
}
