import {React, useState} from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ColoredLine from '../StyleCompenents/ColoredLine';
import "../CSS/Register.css";
import FormInput from "../ProcessingComponents/FormInput"

function Register() {


  const [values, setValues] = useState({
    username:"",
    email:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email"
    }
  ]

  const handleSubmit = (e) => {
    alert(values.username);
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value})
  };



  return (
    <div>
      <form id = "RegisterForm" action="" method = "" onSubmit={handleSubmit}>
        <div class = "container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <ColoredLine color="red"/>
            {inputs.map((input)=>(
              <FormInput 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={onChange}
              />
            ))}

            <ColoredLine color="red"/>

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button type="submit" class="registerbtn">Register</button>
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