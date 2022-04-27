import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import Employees from './Pages/Employees';
import AddEmployee from './Pages/SubPages/Employee/AddEmployee';
import EmployeeDetails from './Pages/SubPages/Employee/DetailsEmployee';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Login/>}/>
        <Route exact path="/dashboard" element = {<Dashboard/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        <Route exact path="/employees" element = {<Employees/>}/>
        <Route exact path="/addemployee" element = {<AddEmployee/>}/>
        <Route exact path="/employeedetails" element = {<EmployeeDetails/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
