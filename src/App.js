import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Login/>}/>
        <Route exact path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
