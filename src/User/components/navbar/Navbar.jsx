import React, { Component } from 'react'
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import axios from 'axios';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: window.sessionStorage.getItem("userid"),
      userData : [],
    }
  }

  logOut = (e) => {
    sessionStorage.removeItem("userid")
    window.location.href= "/"
  }

componentDidMount(){
  var userid = this.state.userid;
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
      <div className="navbar-user">
      <div className="left">
        <span>Online Voting</span>
        <Link to="/User" style={{ textDecoration: "none" }}>
          <HomeOutlinedIcon />
        </Link>
        {/* {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )} */}
        {/* <GridViewOutlinedIcon /> */}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Link to="./userprofile" >
          <PersonOutlinedIcon />
        </Link>
        <Link to="./declaration">
          <NotificationsOutlinedIcon />
        </Link>
        <Link to="./complaint"> 
        <EmailOutlinedIcon />
        </Link>
        <div className="user">
          <Link to={`./profile/${window.sessionStorage.getItem("userid")}`}>
            {this.state.userData.map((result,key)=>(
            <img
              src={result.user_photo}
              alt=""
              key={key}
            />
            ))}
          </Link>
          {this.state.userData.map((result,key)=>(
          <span key={key}>{result.user_name}</span>
          ))}
        </div>
        <div className="my-icon">
            <LogoutIcon  className="fa fa-home" onClick={this.logOut}/>
            <i className="icon-label">logout</i>
        </div>
      </div>
    </div>
    )
  }
}





