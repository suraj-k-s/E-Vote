import React, { Component } from 'react'
import "./share.scss";
import Image from "../../assets/img.png";
import { IconButton } from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";
import axios from 'axios';

export default class Share extends Component {
  constructor(props){
    super(props);
    this.state = {
      userid: window.sessionStorage.getItem("userid"),
      userData: [],
      description: "",
      photo: "",
      candidate: props.cid,

    }
  }


  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    
    formData.append('description',this.state.description);
    formData.append('photo',this.state.photo);
    formData.append('candidate',this.state.candidate);

    axios({

        method: "POST",
        url: "http://localhost/e-vote/api/Addcampaining.php",
        data: formData,
        headers:{ "Content-Type": "multipart/form-data"},
        })
        .then(function (response){
          if (response.data === "Success")
          {
           alert("POSTED") ;
           window.location.reload();
          }
          else{
            alert("failed");
          }
        }); 
};


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

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });

  };


  render() {
    return (
      <div className="share">
      <div className="container">
        <div className="top">
          {this.state.userData.map((result,key)=>(
          <img
            src={result.user_photo}
            alt=""
            key={key}
          />
          ))}
          <input type="text" defaultValue="" name="description" placeholder={`What's on your mind ?`} onChange={this.inputSet} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" name="photo" onChange={(e)=>this.setState({ photo: e.target.files[0] })}/>
              <PhotoCamera />&nbsp;
              <div className="item">
                <span>Add Image</span>
              </div>
            </IconButton>
          </div>
          <div className="right">
            <button onClick={this.saveData}>Share</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}



