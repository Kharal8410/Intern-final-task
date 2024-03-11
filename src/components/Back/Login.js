import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
import logo from "./../../assets/images/logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: username,
      password: password,
    };

    try {
      const response = await fetch("https://dayafoundation.org.np/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Invalid credentials");
      }

      setSuccessMessage("Login successful!");

      setName(responseData.data.name);
      console.log(responseData.data.name);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" className="piv-image " />
        <h2 className="">Cosmic International Acedemy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          dolorum vel obcaecati quidem atque nesciunt harum quia fugit nihil
          esse quae placeat eius tenetur!
        </p>
      </div>

      <div className="login-box">
        <h2>Admin Panel</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fas fa-eye-slash password-icon"></i>
          </div>
          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {name && <p className="name-message">Welcome, {name}!</p>}
          <input type="submit" value="Login" />
          <p>By Elite Infotech</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
