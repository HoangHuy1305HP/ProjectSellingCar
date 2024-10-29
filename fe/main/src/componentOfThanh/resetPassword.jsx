import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./resetPassword.css";
import Navbar from "../Components/NavBar";
import Footer from "./Footer";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";

const ResetPassword = () => {
  const { token } = useParams(); // Lấy token từ URL
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Trạng thái hiển thị mật khẩu
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:2000/auth/reset-password/${token}`,
        { newPassword }
      );
      setMessage(response.data.message);
      // Chuyển hướng người dùng về trang login
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setMessage("Error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="navbar-login">
        <Navbar></Navbar>
      </div>
      <div className="reset-password-container">
        <h2 style={{ color: "#007bff" }}>Reset Password</h2>
        <form onSubmit={handleSubmit} className="formResetPassword">
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"} // Thay đổi type của input
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)} // Thay đổi trạng thái showPassword
              className="password-toggle-icon"
            >
              {showPassword ? (
                <IoEyeSharp className="hideIcon" />
              ) : (
                <BsFillEyeSlashFill className="hideIcon" />
              )}
            </span>
          </div>
          <button type="submit" className="btnResetPassword">
            Reset Password
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ResetPassword;
