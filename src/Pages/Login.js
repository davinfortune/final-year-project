import React from 'react';
import LoginUser from '../ProcessingComponents/Database/LoginUser';
import '../CSS/Login.css';

function Login() {
  return (
    <div>
      <div class = "background">
      </div>
      <div class = "loginContainer">
        <div class = "centerWrapper">
            <div class = "loginTitle">
              <h1>Login</h1>
            </div>
            <div class = "coreContent">
                    <LoginUser/>
                    <button type="button" onClick={() => window.location = "/register"}id = "registerButton" href="/register">Register</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;