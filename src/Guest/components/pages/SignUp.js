import React, { Component } from 'react'
import Cards from '../Cards'
import { Button, Grid, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_password: "",
      type: "",
      id: ""
    }
  }

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };


  saveData = (e) => {
    e.preventDefault();
    axios
      .get(
        "http://localhost/e-vote/api/Login.php?username=" + this.state.user_name + "&password=" + this.state.user_password
      ).then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (data=== "") {
          alert("Invalid User");
        }
        else if (data[1] === "Admin") {
          window.sessionStorage.setItem('adminid', data[0].admin_id);
          window.location = '/Admin';
        }
        else if (data[1] === "User") {
          window.sessionStorage.setItem('userid', data[0].user_id);
          window.location = '/User';
        }
        else if (data[1] === "Agent") {
          window.sessionStorage.setItem('electionagentid', data[0].electionagent_id);
          window.location = '/Agent';
        }
      });
  };


  render() {
    return (
      <div >
        <div className='hero-container' style={{ alignContent: "flex-end" }} >
          <div style={{ margin: "50px", marginTop: "70px", height: "400px", width: "400px" }}>
            <div style={{ justifyContent: "center", display: "flex", fontSize: "20px" }}><h1 style={{ padding: "10px", fontFamily: "monospace" }}>WELCOME</h1></div>
            <div><TextField
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="User Name"
              name="user_name"
              onChange={this.inputSet}
              autoFocus
            />
            </div>
            <div><TextField
              margin="normal"
              required
              fullWidth
              name="user_password"
              label="Password"
              type="password"
              onChange={this.inputSet}
              id="user_password"
            />
            </div>
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
                onClick={this.saveData}
              >
                Sign In
              </Button>
            </div>
            <div>
              <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item >
                  <Link to='/Userregistration' variant="body2" style={{ color: "ActiveCaption" }} >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className='hero-btns'>
            {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
            {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
          </div>
        </div>

        <Cards />
      </div>
    )
  }
}
