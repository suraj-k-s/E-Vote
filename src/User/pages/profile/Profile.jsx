import "./profile.scss";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, MenuItem, Popover, Stack, TextField, alpha } from "@mui/material";
import Post from "../../components/post/Post";
const Profile = () => {
  const { id } = useParams();
  const [Pro, setPro] = useState(false);
  const [passPro, setPassPro] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [curpass, setCurpass] = useState("");

  const [rows, setRows] = useState([]);
  const [r, setR] = useState([]);
  const [ro, setRo] = useState([]);
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
    console.log(ro);
    console.log(id);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleClickOpen = () => {
    setPro(true);
    setOpen(null);

  };

  const handleClickClose = () => {
    setPro(false);
  };
  const handleClickpassOpen = () => {
    setPassPro(true);
    setOpen(null);

  };

  const handleClickpassClose = () => {
    setPassPro(false);
  };
  const fetchData = () => {
    axios.get("http://localhost/e-vote/api/Userprofile.php?aid=" + id)
    .then((response) => {
      var data = response.data.UserProfile;
      setRows(data[0]);


    });
    axios.get("http://localhost/e-vote/api/Campaigncan.php?uid=" + id)
    .then((response) => {
      var data = response.data.CampaignCan;
      setR(data);
      setRo(data[0].user_id);
      console.log(data);
      console.log(data[0].user_id);
      console.log(id);

    });


  };
  
  
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="profile">
      <div className="images">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1FUfkHVudHDsautSa_h4Mj-eiz-QCPYnMg&usqp=CAU"
          alt=""
          className="cover"
        /> */}
        <img
          src={rows.user_photo}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">

          <div className="center">
            <span>{rows.user_name}</span>
            <div className="info">
              <div className="item">
                Email  :&nbsp;&nbsp;{rows.user_email}
              </div>
            </div>
            <div className="info">

              <div className="item">
                Address :&nbsp;&nbsp;{rows.user_address}
              </div>
            </div>
          </div>

          {/* <EmailOutlinedIcon /> */}

            
        </div>
        
      </div>
        <div className="posts">
          {r.map(post => (
            
            <Post post={post} Campaign={post.campaign_id} key={post.id} />
           
          ))}
        </div>

    </div>

  );
};

export default Profile;
