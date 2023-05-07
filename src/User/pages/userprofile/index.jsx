import { Box, Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import Header from '../../../Admin/components/Header'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            userid: window.sessionStorage.getItem("userid"),
        }
    }

    componentDidMount() {
        var userid= this.state.userid;
        axios
            .get(
                `http://localhost/e-vote/api/Userregistration.php?userid=${userid}`
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ userData: data });
            });

    }



    render() {
        return (
            <Box padding="20px">
                <div style={{ margin: "0 auto", width: "fit-content" }}>
                    <Header title="PROFILE" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "20px" }} >
                    {this.state.userData.map((result,key)=> (
                    <img
                        src={result.user_photo}
                        alt=""
                        style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "fill" }}
                    />
                    ))}
                </div>
                {this.state.userData.map((result,key)=>(
                <div style={{ margin: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Name"
                            name="name"
                            value={result.user_name}
                            sx={{ gridColumn: "span 2" }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address"
                            name="address"
                            value={result.user_address}
                            sx={{ gridColumn: "span 2" }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            name="email"
                            value={result.user_email}
                            sx={{ gridColumn: "span 2" }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Phone Number"
                            name="phoneno"
                            value={result.user_phonenumber}
                            sx={{ gridColumn: "span 2" }}
                        />
                    </div>
                    <div>
                        <Box display="flex" justifyContent="center" mt="20px" >
                            <div style={{ margin: "10px" }}>
                                <Link to="/User/editprofile">
                                    <Button type="submit" color="secondary" variant="contained">
                                        Edit Profile
                                    </Button>
                                </Link>
                            </div>
                            <div style={{ margin: "10px" }}>
                                <Link to={"/User/changepassword"}>
                                    <Button type="button" color="secondary" variant="contained" >
                                        Change Password
                                    </Button>
                                </Link>

                            </div>

                        </Box>
                    </div>
                </div>
                ))}
            </Box>
        )
    }
}
