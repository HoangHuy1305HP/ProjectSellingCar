import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./forgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/auth/forgot-password",
        { email }
      );
      setMessage(response.data.message);
      setIsOtpSent(true); // Hiển thị modal nhập OTP
    } catch (error) {
      setMessage("Error occurred. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email); // In ra email
    console.log("Entered OTP:", otp); // In ra OTP đã nhập
    try {
      const response = await axios.post(
        "http://localhost:2000/auth/verify-otp",
        { email, otp },
        { withCredentials: true }
      );

      // Xử lý phản hồi từ server
      if (response.data.message === "Xác thực OTP thành công") {
        // Chuyển hướng đến trang reset password
        navigate(`/reset-password`);
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
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
            Send Reset OTP
          </button>
        </form>
        {message && (
          <p style={{ color: "#007bff", fontSize: "20px" }}>{message}</p>
        )}

        {/* Modal nhập OTP */}
        {isOtpSent && (
          <div className="otp-modal">
            <h3>Enter OTP</h3>
            <form onSubmit={handleOtpSubmit}>
              <input
                type="text"
                placeholder="Enter your OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit">Verify OTP</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
