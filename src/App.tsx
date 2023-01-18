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
import Inline from './components/pages/Inline';
import Unbounce from './components/pages/Unbounce';
import Closeio from './components/pages/Closeio';
import Sencha from './components/pages/Sencha';

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
      <Route path='/inline' element={<Inline/>} />
      <Route path='/unbounce' element={<Unbounce/>} />
      <Route path='/closeio' element={<Closeio/>} />
      <Route path='/sencha' element={<Sencha/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
