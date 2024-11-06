import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/NavBar";
import Footer from "./Footer";
import "./resetPassword.css";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState(""); // Lưu mật khẩu mới
  const [message, setMessage] = useState(""); // Lưu thông báo
  const [showPassword, setShowPassword] = useState(false); // Trạng thái hiển thị mật khẩu
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:2000/auth/reset-password`, // Gọi API reset password
        { newPassword },
        { withCredentials: true } // Gửi mật khẩu mới
      );
      setMessage(response.data.message); // Hiển thị thông báo từ server

      // Điều hướng đến trang đăng nhập sau 2 giây
      setTimeout(() => {
        navigate("/login"); // Chuyển hướng đến trang đăng nhập
      }, 2000);
    } catch (error) {
      setMessage("Error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reset-password-container">
        <h2 style={{ color: "#007bff" }}>Reset Password</h2>
        <form onSubmit={handleSubmit} className="formResetPassword">
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"} // Thay đổi type của input
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} // Cập nhật mật khẩu mới
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
        {message && <p>{message}</p>} {/* Hiển thị thông báo */}
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
