import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/dashboard"><Button>Dashboard Button</Button></Link>
    </div>
  );
}

export default Login;