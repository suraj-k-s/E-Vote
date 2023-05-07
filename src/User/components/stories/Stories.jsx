import { useEffect, useState } from "react";
import "./stories.scss"
import axios from "axios";


const Stories = () => {

  const [rows, setRows] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost/e-vote/api/Result.php?id=" + sessionStorage.getItem("userid")).then((response) => {
      var data = response.data.Result;

      setRows(data);
      console.log(data);


    });
  };
  useEffect(() => {
    fetchData();

  }, []);


  return (

    <div className="stories" >


      {rows.map(story => (
        <div className="story">
          <img src={story.user_photo} />
          <div className="name">
            <p>{story.user_name}</p>
            <p>{story.vote}</p>
          </div>
        </div>
      ))}



    </div>
  )
}

export default Stories