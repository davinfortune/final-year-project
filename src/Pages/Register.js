import {React, useState} from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ColoredLine from '../StyleCompenents/ColoredLine';
import "../CSS/Register.css";
import RegisterUser from '../ProcessingComponents/Database/RegisterUser';


function Register() {

  return (
    <div>
      <form action="" >
        <div class = "container">
            <RegisterUser/>
            <ColoredLine color="red"/>
        </div>

        <div class="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
            <Link to="/"><Button variant="outline-secondary">Go Back</Button></Link>
        </div>
        </form>             
    </div>
  );
}

export default Register;