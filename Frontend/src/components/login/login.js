import React from 'react';
import './login.css'; // Import your CSS file for styling

const Login = () => {
const goolgeAuth = () =>{
    window.open(
        `${process.env.REACT_APP_API_URL}/auth/google/callback`,
        "_self"
    )
    }
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome to Cyber Security Awarness</h1>
        <p>Please log in to continue</p>
        <button onClick={goolgeAuth}>Login</button>
      </div>
    </div>
  );
};

export default Login;
