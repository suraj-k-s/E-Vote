import { useEffect, useState } from "react";
import "./comments.scss";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const Comments = ({ campaign, usid }) => {
  const [rows, setRows] = useState([]);
  const [profile, setProfile] = useState([]);
  const [comment, setComment] = useState("")

  const inputData = () => {

    const formData = new FormData();

    formData.append('userid', sessionStorage.getItem("userid"));
    formData.append('campaign', campaign);
    formData.append('content', comment);

    axios({

      method: "POST",
      url: "http://localhost/e-vote/api/Comment.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {

        console.log(response.data);
        setComment([])
        fetchData();
      });
  };

  const deleteData = (cmid) => {
    axios.post("http://localhost/e-vote/api/Commentdelete.php?cmid="+ cmid)
    .then((response) => {
      console.log(response.data);
      fetchData();


    });
  }
  const fetchData = () => {
    axios.get("http://localhost/e-vote/api/Comment.php?cid=" + campaign)
      .then((response) => {
        var data = response.data.Comment;
        console.log(data);
        setRows(data);

      });

    // axios.get("http://localhost:4000/UserProfile/" + sessionStorage.getItem("userid")).then((response) => {
    //   var d = response.data.UserProfile;

    //   setProfile(d[0]);


    // });




  };
  useEffect(() => {
    fetchData();

  }, []);


  return (
    <div className="comments">
      {rows.map((comment) => (
        <div className="comment">
          <img src={comment.user_photo} alt="" />
          <div className="info">
            <span>{comment.user_name}</span>
            <p>{comment.comment_content}</p>
          </div>
          {
            (profile.user_id === comment.user_id || sessionStorage.getItem("userid") === usid) ? (<IconButton aria-label="delete" onClick={() => { deleteData(comment.comment_id) }}>
              <DeleteIcon />
            </IconButton>) : null

          }


          <span className="date">{comment.time.time_elapsed}</span>
        </div>
      ))}
      <div className="write">
        <img src={profile.user_photo} alt="" />
        <input type="text" value={comment} placeholder="write a comment" onChange={(e) => setComment(e.target.value)} />
        <button onClick={() => { inputData() }}>Send</button>
      </div>
    </div>
  );
};

export default Comments;
