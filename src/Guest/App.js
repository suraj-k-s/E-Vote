import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {  Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Userregistration from './components/pages/Userregistration';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Userregistration' element={<Userregistration/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
