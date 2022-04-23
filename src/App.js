import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import Registered from "./Pages/Registered";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Login/>}/>
        <Route exact path="/dashboard" element = {<Dashboard/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        <Route exact path="/registered" element = {<Registered/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
