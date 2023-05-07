import { Box, Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Admin/components/Header'
import axios from 'axios';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentData: [],
            agentid: window.sessionStorage.getItem("electionagentid"),

        }
    }


    componentDidMount() {
        var electionagentid = this.state.agentid;
        axios
            .get(
                `http://localhost/e-vote/api/Electionagentregistration.php?electionagentid=${electionagentid}`
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ agentData: data });
            });
    }


    render() {
        return (
            <div style={{ flex: "4" }}>
                <Box padding="20px">
                    <div style={{ margin: "0 auto", width: "fit-content" }}>
                        <Header title="PROFILE" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }} >
                        {this.state.agentData.map((result, key) => (
                            <img
                                src={result.electionagent_photo}
                                alt=""
                                style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "fill" }}
                            />
                        ))}
                    </div>
                    {this.state.agentData.map((result, key) => (
                        <div style={{ margin: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Name"
                                    name="name"
                                    value={result.electionagent_name}
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
                                    value={result.electionagent_address}
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
                                    value={result.electionagent_email}
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
                                    value={result.electionagent_phonenumber}
                                    sx={{ gridColumn: "span 2" }}
                                />
                            </div>
                            <div>
                                <Box display="flex" justifyContent="center" mt="20px" >
                                    <div style={{ margin: "10px" }}>
                                        <Link to={"/Agent/changepassword"}>
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
            </div>
        )
    }
}
