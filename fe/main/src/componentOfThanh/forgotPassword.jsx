import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/NavBar";
import Footer from "./Footer";
import "./forgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/auth/forgot-password",
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div narbar-login>
        <Navbar></Navbar>
      </div>
      <div className="forgot-password-container">
        <h2 style={{ color: "#007bff" }}>Forgot Password</h2>
        <form onSubmit={handleSubmit} className="formForgotPassword">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btnSendResetLink">
            Send Reset Link
          </button>
        </form>
        {message && (
          <p style={{ color: "#007bff", fontSize: "20px" }}>{message}</p>
        )}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ForgotPassword;
