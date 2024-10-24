import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Navbar from "../Components/NavBar";
import Footer from "./Footer";
import logo from "../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State để quản lý hiển thị mật khẩu
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleKeyPress = (e) => {
    // Ngăn nhập ký tự không phải số
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e, nextInputId) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.id === "registerEmail" && !validateEmail(email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Vui lòng bao gồm '@' trong địa chỉ email",
        }));
        return; // Ngăn không cho tiêu điểm di chuyển nếu có lỗi
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "", // Xóa lỗi email nếu địa chỉ hợp lệ
        }));
      }
      const nextInputElement = document.getElementById(nextInputId);
      if (nextInputElement) {
        nextInputElement.focus();
      }
    }
  };

  // const handleRegister = () => {
  //   const newErrors = {};
  //   if (!name || !phone || !email || !password || !validateEmail(email)) {
  //     alert("Vui lòng điền đầy đủ thông tin");
  //     return;
  //   }
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);

  //     return;
  //   }

  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   if (users.some((user) => user.name === name)) {
  //     // Thay đổi từ username thành phone
  //     alert("Name number already exists");
  //   } else {
  //     users.push({ name, phone, email, password });
  //     localStorage.setItem("users", JSON.stringify(users));
  //     alert("Đăng ký thành công");
  //     navigate("/login");
  //   }
  // };

  const handleRegister = async () => {
    const newErrors = {};
    if (!name || !phone || !email || !password || !validateEmail(email)) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    try {
      const response = await axios.post("http://localhost:2000/auth/register", {
        name: name,
        phone: phone,
        email: email,
        password: password,
      });

      // if (response.status === 201) {
      //   alert("Đăng ký thành công");
      //   navigate("/login"); // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
      // } else {
      //   // Hiển thị thông báo lỗi nếu không đăng ký thành công
      //   alert(response.data.message || "Đăng ký thất bại, vui lòng thử lại.");
      // }
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.message || "Đã xảy ra lỗi, vui lòng thử lại."
        );
      } else {
        alert("Đã xảy ra lỗi, vui lòng thử lại.");
      }
      // console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="narbar-login">
        <Navbar></Navbar>
      </div>
      <div className="container-thanh text-center">
        <div className="div1-login-thanh">
          <div className="input-group">
            <label htmlFor="registerName">Name</label>
            <input
              className="input-register"
              id="registerName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "registerPhone")}
              required
              placeholder="Full name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="registerPhone">Phone</label>{" "}
            {/* Cập nhật label từ Username thành Phone */}
            <input
              className="input-register"
              id="registerPhone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "registerEmail")}
              onKeyPress={handleKeyPress}
              pattern="[0-9]{10,15}"
              required
              placeholder="000-000-000"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="registerEmail">Email</label>
            <input
              className="input-register"
              id="registerEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "registerPassword")}
              placeholder="name@gmail.com"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="registerPassword">Password</label>
            <input
              className="input-register"
              id="registerPassword"
              type={showPassword ? "text" : "password"} // Hiển thị mật khẩu nếu showPassword là true
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "registerTerms")}
              placeholder="password"
              required
            />
            {showPassword ? (
              <IoEyeSharp
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <BsFillEyeSlashFill
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          {/* <div className="checkbox-group">
        <input
          id="registerTerms"
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label htmlFor="registerTerms">
          I have read and agree to the terms
        </label>
        {errors.agreed && <p className="error">{errors.agreed}</p>}
      </div> */}
          <button className="btn-thanh" onClick={handleRegister}>
            Create My Account
          </button>
          <p className="p-register-thanh">
            Already a member?{" "}
            <a className="link" onClick={() => navigate("/login")}>
              Login Here
            </a>
          </p>
        </div>
        <div className="div2-login-thanh">
          <div className="box-login-thanh">
            <img
              src={logo}
              alt="carlogo"
              style={{ width: "236px", height: "63px" }}
            />
            <div className="welcome-login">
              <h2 className="h2-login">Login</h2>
              <p className="p-login">Welcome to Autohunt</p>
            </div>
            <div className="socialIcon">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Register;
