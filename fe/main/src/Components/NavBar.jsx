import React, { useEffect, useState } from "react";
import "../Css/NavBar.css";
import img1 from "../img/anh01.png";
import { FaUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          console.log("No token found in localStorage");
          return;
        }

        // Gửi yêu cầu với token trong header
        const response = await axios.get("http://localhost:2000/auth/user", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true, // Thêm cấu hình này nếu cần thiết
        });

        const { name } = response.data;
        setUserName(name);
      } catch (error) {
        console.error("Không thể lấy thông tin người dùng: ", error);

        // if (error.response && error.response.status === 401) {
        //   navigate("/login");
        // }
      }
    };

    fetchUserName();
  }, [navigate]); // Chỉ gọi một lần khi component mount

  const handleSelectChange = (event) => {
    const path = event.target.value;
    if (path) navigate(path);
  };

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      await axios.post(
        "http://localhost:2000/auth/logout",
        { refreshToken },
        {
          withCredentials: true,
        }
      );

      // Xóa token khỏi localStorage sau khi logout thành công
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <ul className="view">
        <li>
          <Link to="/homepage">
            <img src={img1} alt="AutoHunt Logo" width="118" height="32" />
          </Link>
        </li>
        <li>
          <Link to="/newcars">New Cars</Link>
        </li>
        <li>
          <Link to="/usedcars">Used Cars</Link>
        </li>
        <li>
          <Link to="/homepage/comparecar">Compare</Link>
        </li>
        <li>
          <Link to="/homepage/buy">Buy</Link>
        </li>
        <li>
          <select className="article-select" onChange={handleSelectChange}>
            <option style={{ color: "black" }} value="">
              Article
            </option>
            <option style={{ color: "black" }} value="/homepage/article/review">
              Review
            </option>
            <option style={{ color: "black" }} value="/homepage/article/news">
              News
            </option>
            <option
              style={{ color: "black" }}
              value="/homepage/article/news/loremIpsum"
            >
              Lorem Ipsum
            </option>
          </select>
        </li>
      </ul>

      <div className="navbar-right">
        {userName ? (
          <div className="user-info">
            <span style={{ color: "white" }}>
              <span style={{ color: "#007bff", fontSize: "24px" }}>
                Welcome
              </span>
              , {userName}
            </span>
            <button onClick={handleLogout} className="btn-apterlogin">
              Logout
            </button>
          </div>
        ) : (
          <div className="signIn">
            <Link to="/login">
              <FaUser />
              <span className="sign-in">Sign In</span>
            </Link>
          </div>
        )}
        <div className="language">
          <GrLanguage className="lIcon" />
          <select className="language-select">
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;