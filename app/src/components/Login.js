// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Login.css';
import logo from '../assets/images/logo-mormedi-blanco.png'; // Import the logo image

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted', { username, password });

    // Add your login logic here (e.g., validate user credentials)
    // For demonstration purposes, let's assume the login is always successful.
    navigate('/upload'); // Navigate to the upload screen on successful login
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="mormedi logo" className="login-logo" /> {/* Use the logo image */}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
