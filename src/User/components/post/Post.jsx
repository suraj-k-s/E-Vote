import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = ({ post , Campaign}) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [rows, setRows] = useState([]);
  const [like, setLike] = useState([]);
  console.log(post);

  const inputData = () => {
    var dat = {
      userid: sessionStorage.getItem("userid"),
      campaignid:Campaign,
      

    };
    axios.post("http://localhost/e-vote/api/Like.php", dat)
    .then((response) => {
      fetchData();
      setLiked(true)
      
    });
  };
  const deleteData = () => {
    axios.post("http://localhost/e-vote/api/Deletelike.php?uid="+sessionStorage.getItem("userid")+"&cid="+Campaign)
    .then((response) => {
     fetchData();
     setLiked(false);
      
     

    });
  }

  const fetchData = () => {

    axios.get("http://localhost/e-vote/api/Countcomment.php?cid="+Campaign)
    .then((response) => {
      var data = response.data[0].numComment;

      setRows(data);


    });

    axios.get("http://localhost/e-vote/api/Countlike.php?cid="+Campaign)
    .then((response) => {
      var data = response.data[0].numLike;
      setLike(data);
// console.log(data);

    });


    axios.get("http://localhost/e-vote/api/Like.php?uid="+sessionStorage.getItem("userid")+"&cid="+Campaign)
    .then((response) => {
      var data = response.data;
      setLiked(data);


    });
  };
  
  useEffect(() => {
    fetchData();


  },[]);
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.user_photo} alt="" />
            <div className="details">
              <Link
                to={`/User/profile/${post.user_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.user_name}</span>
              </Link>
              <span className="date">{post.time.time_elapsed}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.campaigning_details}</p>
          <img src={post.campaigning_file} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={()=>{liked ? deleteData() : inputData()}}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {like}&nbsp;Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {rows}&nbsp;Comments
          </div>
          
        </div>
        {commentOpen && <Comments campaign={post.campaigning_id} usid={post.user_id}/>}
      </div>
    </div>
  );
};

export default Post;
