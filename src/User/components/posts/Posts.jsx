import axios from "axios";
import Post from "../post/Post";
import "./posts.scss";
import { useEffect, useState } from "react";

const Posts = ({ postRefresh }) => {
 
  const [rows, setRows] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost/e-vote/api/Campiningpost.php?uid="+sessionStorage.getItem("userid"))
    .then((response) => {
      var data = response.data.Campaign;

      setRows(data);


    });
  };
  useEffect(() => {
    
    fetchData();

  },  [postRefresh]);

  return <div className="posts">
    {rows.map(post=>(
      <Post post={post} Campaign={post.campaigning_id} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
