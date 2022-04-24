import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
import LoginUser from '../ProcessingComponents/Database/LoginUser';
import ColoredLine from '../StyleCompenents/ColoredLine';

function Login() {
  return (
    <div class = "container">
      <h1>Login Page</h1>
            <LoginUser/>
            <ColoredLine color="red"/>
      <Link to="/dashboard"><Button>Dashboard Button</Button></Link>
      <Link to="/register"><Button>Register Button</Button></Link>
    </div>
  );
}

export default Login;