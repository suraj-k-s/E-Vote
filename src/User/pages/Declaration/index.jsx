import { Avatar, Box, Card, CardContent, Grid, Paper, Tooltip, Typography } from '@mui/material'
import React, { Component } from 'react'
import axios from 'axios';

export default class Declaration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userid: window.sessionStorage.getItem("userid"),
            date: "",
            electiondeclaration: "",
            electiondeclarationData: [],
           
        }
    }

    componentDidMount() {
        var userid = this.state.userid;
        axios
            .get(
                `http://localhost/e-vote/api/Candidateregistrationlist.php?userid=${userid}`
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ electiondeclarationData: data });
                console.log(data);
            });
    }

    inputData = (wid, eid) => {
        var dat = {
            userid : this.state.userid,
            election: eid,
            ward: wid,
          };
          axios
          .post(
            "http://localhost/e-vote/api/Nomination.php",
            dat
          )
          .then((response) => {
            
            if ((response.data[0].message === "Success")) {
                window.sessionStorage.setItem('pid',response.data[0].pid)
                window.location="/payment";
              }
              else 
              {
                alert(response.data);
              }
          });
    }


    render() {
        return (
            <div>
                <Box display="flex" flexDirection="row" marginLeft="20px" my={1} mx={2}>

                    <Paper elevation={3} style={{ padding: '15px', maxWidth: '800', width: '100%', textAlign: 'left' }}>

                        <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>Election </Typography>
                        {this.state.electiondeclarationData.map((e, key) => (
                            <Card key={key} elevation={3} style={{ padding: '10px', marginTop: '15px' }}>
                                <CardContent>
                                    <Grid container spacing={2} justify="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2" component="p" align="right">
                                                {e.election_date}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="h5" component="h2">
                                                {e.place_name}&nbsp;
                                                {e.election_details}
                                            </Typography>
                                            <Typography variant="h5" component="h2" style={{ marginRight: '20px' }}>
                                                <Tooltip title="Ward" arrow>
                                                    <Avatar
                                                        style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer' }}
                                                    >
                                                        {e.ward_name}
                                                    </Avatar>
                                                </Tooltip>
                                            </Typography>

                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="body2" component="p">
                                                Election date : {e.election_for_date}
                                            </Typography>
                                        </Grid>
                                        
                                    </Grid>
                                    <Typography variant="body2" component="p" align='right' onClick={() => { this.inputData(e.ward_id, e.election_id) }} style={{cursor: "pointer"}}> 
                                        click here to nominate for Candidate!
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Paper>
                </Box>
            </div>
        )
    }
}
