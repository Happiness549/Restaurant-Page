import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import './App.css'

function App() {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/menu">Menu</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link> 
      </nav>

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

   </Routes>
    </div>
  );
};

export default App;

