import {React, useState} from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ColoredLine from '../StyleCompenents/ColoredLine';
import RegisterUser from '../ProcessingComponents/Database/RegisterUser';
import "../CSS/Register.css";
import "../CSS/Login.css";



function Register() {

  return (
        <div>
        <div class = "background">
        </div>
        <div class = "loginContainer">
          <div class = "centerWrapper">
              <div class = "coreContent">
              <RegisterUser/>
                <p>Already have an account? <a href="/">Sign in</a>.</p>
              </div>
          </div>
        </div>
      </div>
  );
}

export default Register;