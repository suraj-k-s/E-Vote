import React, { Component } from 'react'
import "./rightBar.scss";
import axios from 'axios';

export default class RightBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      candidateData: [],
    }
  }

  componentDidMount(){
    axios
        .get(
          "http://localhost/e-vote/api/Candidatelistside.php?uid="+sessionStorage.getItem("userid")
        )
        .then((response) => response.data)
        .then((data) => {
            console.log(data);
          this.setState({ candidateData: data });
        });
  }

  render() {
    return (
      <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Candidate List</span>
          <div className="user">
            <div className="userInfo">
              {this.state.candidateData.map((result,key)=>(
              <img
                src={result.user_photo}
                alt=""
              />
              ))}
              {this.state.candidateData.map((result,key)=>(
              <span>{result.user_name}</span>
              ))}
            </div>
            {/* <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div> */}
          </div>
          {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div> */}
        </div>
        {/* <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div> */}
        {/* <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    )
  }
}






// import "./rightBar.scss";

// const RightBar = () => {
//   return (
//     <div className="rightBar">
//       <div className="container">
//         <div className="item">
//           <span>Candidate List</span>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <span>Jane Doe</span>
//             </div>
//             {/* <div className="buttons">
//               <button>follow</button>
//               <button>dismiss</button>
//             </div> */}
//           </div>
//           {/* <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <span>Jane Doe</span>
//             </div>
//             <div className="buttons">
//               <button>follow</button>
//               <button>dismiss</button>
//             </div>
//           </div> */}
//         </div>
//         <div className="item">
//           <span>Latest Activities</span>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//         </div>
//         <div className="item">
//           <span>Online Friends</span>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className="user">
//             <div className="userInfo">
//               <img
//                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="online" />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RightBar;
