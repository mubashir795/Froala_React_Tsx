import React from 'react';
import './App.css'
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Download from './components/pages/Download';
import Features from './components/pages/Features';
import Docs from './components/pages/Docs';
import Tour from './components/pages/Tour';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/download' element={<Download/>} />
      <Route path='/features' element={<Features/>} />
      <Route path='/docs' element={<Docs/>} />
      <Route path='/tour' element={<Tour/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
