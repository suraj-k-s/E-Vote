import React, { Component } from 'react'
import "./topbar.css";
import { NotificationsNone, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';

export default class Topbar extends Component {
constructor(props){
  super(props);
  this.state={
    agentData: [],
    agentid: window.sessionStorage.getItem("electionagentid")
  }
}


   logout = () => {
  sessionStorage.removeItem("electionagentid");
  window.location.href= "/";
}

  componentDidMount(){
  var electionagentid = this.state.agentid;
  axios
            .get(
              `http://localhost/e-vote/api/Electionagentregistration.php?electionagentid=${electionagentid}`
            )
            .then((response) => response.data  )
            .then((data) => {
                this.setState({ agentData: data });
            });
}
  render() {
    return (
      <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Online Voting</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
          <LogoutIcon onClick={this.logout} />
          </div>
          <Link to="./profile">
            {this.state.agentData.map((result,key)=>(
          <img src={result.electionagent_photo} key={key} alt="" className="topAvatar" />
          ))}
          </Link>
        </div>
      </div>
    </div>
    )
  }
}

