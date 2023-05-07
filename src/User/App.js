import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Userprofile from "./pages/userprofile";
import Changepassword from "./pages/changepassword";
import Editprofile from "./pages/editprofile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Declaration from "./pages/Declaration";
import Candidateregistration from "./pages/candidateregistration";
import Vote from "./pages/vote";
import Complaint from "./pages/complaint";
import Payment from "./pages/payment";
import { VoteButton } from "./pages/Votebutton";
import Feedback from "./pages/feedback"

import React from 'react'

export default function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/userprofile" element={<Userprofile />} />
            <Route path="/changepassword" element={<Changepassword />} />
            <Route path="/candidateregistration/:eid" element={<Candidateregistration />} />
            <Route path="/declaration" element={<Declaration />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/votebutton" element={<VoteButton />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <RightBar />
      </div>
    </div>
  )
}
