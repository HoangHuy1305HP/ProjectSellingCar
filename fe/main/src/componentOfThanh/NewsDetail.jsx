import React, { useState, useEffect } from "react";
import "./NewsDetail.css";
import NDcar from "../images/newdetailCar.png";
import NDcar1 from "../images/newdetailCar1.png";
import Navbar from "../Components/NavBar";
import cmtUser from "../images/cmtUser.png";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdInsertComment } from "react-icons/md";
import cmtUser1 from "../images/cmtUser1.png";
import cmtC from "../images/commentCar.png";
import cmtC1 from "../images/commentCar1.png";
import Footer from "./Footer";
import usernewcmt from "../images/usernewcmt.png";

function NewsDetail() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Ryan Carder",
      text: "Orci faucibus sit porttitor amet neque. Luctus ut maecenas urna pretium tristique aliquam, ante. Ut scelerisque mauris consequat, ornare orci enim. Dolor velit, in nisl fermentum vel, tempor vitae neque, libero. Ac quam aliquam vel lectus. Quam dignissim vehicula gravida aliquam aliquam gravida tempus posuere. Volutpat facilisi nunc, quis enim urna est. Suspendisse amet, in blandit nec id mattis in consequat. Mattis enim aliquet pellentesque vel, vitae id. Est et fermentum at tempus eget nibh ultrices.",
      date: "June, 01 2021",
      avatar: cmtUser1,
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập và lấy tên người dùng từ localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const { name } = JSON.parse(loggedInUser);
      setUserName(name);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);

  // const handleAddComment = (e) => {
  //   e.preventDefault();
  //   if (userName) {
  //     if (newComment.trim()) {
  //       setComments([
  //         {
  //           id: comments.length + 1,
  //           user: userName,
  //           text: newComment,
  //           date: new Date().toLocaleDateString(),
  //           avatar: usernewcmt,
  //         },
  //         ...comments,
  //       ]);
  //       setNewComment(""); // Xóa input sau khi thêm bình luận
  //     }
  //   } else {
  //     alert("Please log in to comment.");
  //   }
  // };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      if (newComment.trim()) {
        setComments((prevComments) => [
          ...prevComments,
          {
            id: prevComments.length + 1,
            user: userName,
            text: newComment,
            date: new Date().toLocaleDateString(),
            avatar: usernewcmt,
          },
        ]);
        setNewComment(""); // Xóa input sau khi thêm bình luận
      }
    } else {
      alert("Please log in to comment.");
    }
  };

  return (
    <div>
      <div className="Mews-Narbar">
        <Navbar></Navbar>
      </div>
      <div className="newdetail-body-thanh">
        <div className="title-news-thanh">
          <h1 className="h1-news-thanh" style={{ marginTop: "50px" }}>
            Lorem Ipsum
          </h1>
          <p className="p-news-thanh" style={{ marginBottom: "50px" }}>
            Homepage - Article - News - Lorem Ipsum
          </p>
          <img src={NDcar} alt="" />
        </div>

        <div className="info-cmt-newdetail">
          <p className="p-info-cmt-newdetail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            praesent gravida sed rutrum suspendisse eu. Lectus fermentum in
            gravida nibh in vel. Accumsan gravida nec ultricies risus eget arcu
            turpis sit lorem.{" "}
          </p>
          <p className="p-info-cmt-newdetail">
            Ullamcorper pellentesque diam eget volutpat. Ut senectus tincidunt
            elit sit vitae quam id. Quisque sed at elit sit viverra rutrum id id
            odio. Consequat, convallis iaculis dictum urna lectus fames arcu,
            at. Pretium venenatis pharetra, risus, sagittis rhoncus viverra nunc
            suspendisse facilisis.{" "}
          </p>
          <img src={NDcar1} alt="" />
          <div>
            <h3 style={{ fontSize: "30px", marginBottom: "15px" }}>Why?</h3>
            <ul className="ul-newdetail-thanh">
              <li>
                Leo amet, posuere nibh nam nulla vestibulum sagittis mauris.{" "}
              </li>
              <li>
                Elementum lacus, et sed praesent lectus nisi diam pulvinar eget.{" "}
              </li>
              <li>Vulputate nibh molestie cras dapibus. </li>
              <li>
                Blandit venenatis, commodo magnis dictumst ut consequat, etiam
                sed.{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "30px", marginBottom: "15px" }}>How?</h3>
            <ul className="ul-newdetail-thanh">
              <li>
                Leo amet, posuere nibh nam nulla vestibulum sagittis mauris.{" "}
              </li>
              <li>
                Elementum lacus, et sed praesent lectus nisi diam pulvinar eget.{" "}
              </li>
              <li>Vulputate nibh molestie cras dapibus. </li>
              <li>
                Blandit venenatis, commodo magnis dictumst ut consequat, etiam
                sed.{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "30px", marginBottom: "15px" }}>
              Finishing
            </h3>
            <p className="p-info-cmt-newdetail">
              Leo amet, posuere nibh nam nulla vestibulum sagittis mauris.
              Elementum lacus, et sed praesent lectus nisi diam pulvinar eget.
              Vulputate nibh molestie cras dapibus. Blandit venenatis, commodo
              magnis dictumst ut consequat, etiam sed. Scelerisque non diam ut
              aliquet placerat nibh. Porta sed turpis parturient eu arcu enim
              facilisis. Fermentum, blandit mollis dictumst volutpat. Risus odio
              enim sed a id risus, natoque in.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <ul className="ul-smallcmt-news">
              <li>Autopilot</li>
              <li>Car</li>
            </ul>
            <div className="line-news"></div>
            <div className="contact-user-newdetail">
              <div
                style={{ display: "flex", gap: "31px", alignItems: "center" }}
              >
                <img src={cmtUser} style={{ width: "56px", height: "56px" }} />
                <div>
                  <h3>Carla Baptista</h3>
                  <p>Car Expert</p>
                </div>
                <div className="straightline"></div>
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <IoCallOutline className="icon-contact-user" />
                  <p style={{ fontSize: "18px" }}>240-865-3730</p>
                </div>
                <div className="straightline"></div>
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <MdOutlineMailOutline className="icon-contact-user" />
                  <p style={{ fontSize: "18px" }}>carla.b@mail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <MdInsertComment className="cmt-news-icon" />
              <p>1 Comment</p>
            </div>
            {comments.map((comment) => (
              <div key={comment.id} className="defaultCommnet">
                <img
                  src={comment.avatar}
                  style={{ width: "64px", height: "64px", borderRadius: "50%" }}
                  alt="User"
                />
                <div>
                  <h3
                    style={{
                      color: "#D7D7D7",
                      fontSize: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {comment.user}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#D7D7D7",
                      marginBottom: "30px",
                    }}
                  >
                    {comment.text}
                  </p>
                  <p style={{ fontSize: "12px", color: "#D7D7D7" }}>
                    {comment.date}
                  </p>
                </div>
              </div>
            ))}
            {/* <img src={usernewcmt} style={{width:'64px', height:'64px'}}/> */}
            <form onSubmit={handleAddComment} className="cmt-newdetail-thanh">
              <label
                htmlFor="comment"
                style={{
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Comment
              </label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={
                  isLoggedIn
                    ? "Leave a message here"
                    : "Please log in to comment"
                }
                row="10"
                cols="5"
                className="ta-newdetail-thanh"
              ></textarea>
              <button type="submit" className="btn-cmt-newdetail">
                {isLoggedIn ? "Add Comment" : "Log In to Comment"}
              </button>
            </form>
          </div>
          <div>
            <h1 style={{ fontSize: "36px", marginBottom: "40px" }}>
              Related News
            </h1>
            <div style={{ display: "flex", gap: "45px" }}>
              <div className="user-cmt-newdetail-thanh">
                <div className="time1">June, 01 2021</div>
                <img src={cmtC} style={{ height: " 199px" }} />
                <div className="cmtOfCustemer">
                  <h2>Etiam Eget</h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      marginBottom: "30px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eget praesent gravida sed rutrum suspendisse eu.
                    Lectus fermentum in gravida nibh in vel. Accumsan gravida
                    nec ultricies risus eget arcu turpis sit lorem.
                  </p>
                  <div className="dealer-electric">
                    <p className="p-dealer-electric">Dealer</p>
                    <p className="p-dealer-electric">Electric</p>
                  </div>
                  <div className="cmt-news-thanh">
                    <img src={cmtUser} style={{ marginRight: "10px" }} />
                    <p style={{ color: "#004A77", marginRight: "20px" }}>
                      By Carla Baptista
                    </p>
                    <MdInsertComment className="cmt-news-icon" />
                    <p style={{ color: "#004A77" }}>1 </p>
                  </div>
                </div>
              </div>
              <div className="user-cmt-newdetail-thanh">
                <div className="time1">June, 01 2021</div>
                <img src={cmtC1} style={{ height: " 199px" }} />
                <div className="cmtOfCustemer">
                  <h2>Etiam Eget</h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      marginBottom: "30px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eget praesent gravida sed rutrum suspendisse eu.
                    Lectus fermentum in gravida nibh in vel. Accumsan gravida
                    nec ultricies risus eget arcu turpis sit lorem.
                  </p>
                  <div className="dealer-electric">
                    <p className="p-dealer-electric">Dealer</p>
                    <p className="p-dealer-electric">Electric</p>
                  </div>
                  <div className="cmt-news-thanh">
                    <img src={cmtUser} style={{ marginRight: "10px" }} />
                    <p style={{ color: "#004A77", marginRight: "20px" }}>
                      By Carla Baptista
                    </p>
                    <MdInsertComment className="cmt-news-icon" />
                    <p style={{ color: "#004A77" }}>1 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default NewsDetail;
