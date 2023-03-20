import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Search from './Components/Search/Search';
import Home from './Components/HomePage/Home';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Explore from './Components/Explore/explore';
import Map from "./Components/Map/Map"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/map" element={<Map/>} />
      </Routes>
    </Router>
  );
}

export default App;
