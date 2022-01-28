import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import React from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const LoginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={LoginHandler} className="login-screen__form">
        <h3 className="login-screen__title"> Login</h3>
        {error && <span className="error-message">{error}</span>}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>

          <input
            type="password"
            required
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <span className="login-screen__subtext">
          <Link to="/forgotpassword" className="login-screen__forgotpassword">
            Forgot Password?
          </Link>
        </span>
        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
