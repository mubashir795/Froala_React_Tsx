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
import Customers from './components/pages/Customers';
import Plugin from './components/pages/Plugin';
import Uploader from './components/pages/Uploader';
import Sdkc from './components/pages/Sdkc';
import Solution from './components/pages/Solution';
import Extend from './components/pages/Extend';
import Contact from './components/pages/Contact';
import Online from './components/pages/Online';
import Toolbar from './components/pages/Toolbar';
import Pricing from './components/pages/Pricing';
import Artstation from './components/pages/Artstation';

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
      <Route path='/customers' element={<Customers/>} />
      <Route path='/plugin' element={<Plugin/>} />
      <Route path='/uploader' element={<Uploader/>} />
      <Route path='/sdkc' element={<Sdkc/>} />
      <Route path='/solution' element={<Solution/>} />
      <Route path='/extend' element={<Extend/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/online' element={<Online/>} />
      <Route path='/toolbar' element={<Toolbar/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/artstation' element={<Artstation/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
