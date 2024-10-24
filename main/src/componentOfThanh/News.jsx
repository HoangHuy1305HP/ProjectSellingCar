import React from "react";
import "./News.css";
import Navbar from "../Components/NavBar";
import Footer from "./Footer";
import news1 from "../images/news1.png";
import { MdInsertComment } from "react-icons/md";
import cmtUser from "../images/cmtUser.png";
import cmtC from "../images/commentCar.png";
import cmtC1 from "../images/commentCar1.png";
import { CiSearch } from "react-icons/ci";

function News() {
  return (
    <div>
      <div className="Mews-Narbar">
        <Navbar></Navbar>
      </div>
      <div className="main-news-thanh">
        <div className="title-news-thanh">
          <h1 className="h1-news-thanh">News</h1>
          <p className="p-news-thanh">Homepage - Article- News</p>
        </div>
        <h2 className="h2-news-thanh" style={{ marginBottom: "20px" }}>
          Latest News
        </h2>
        <div>
          <img src={news1} alt="" />
          <div className="latest-news-thanh">
            <h2
              className="h2-news-thanh"
              style={{ color: "#007CC7", marginBottom: "30px" }}
            >
              Lorem Ipsum
            </h2>
            <p className="p-news-thanh" style={{ marginBottom: "35px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget praesent gravida sed rutrum suspendisse eu. Lectus fermentum
              in gravida nibh in vel. Accumsan gravida nec ultricies risus eget
              arcu turpis sit lorem.{" "}
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
        <div className="cmt-search-news-thanh">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="firstCmt-news-thanh">
              <div className="time1">June, 01 2021</div>
              <img src={cmtC} className="cmtC-news-thanh" />
              <div className="cmtOfCustemer">
                <h2>Etiam Eget</h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    marginBottom: "30px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eget praesent gravida sed rutrum suspendisse eu. Lectus
                  fermentum in gravida nibh in vel. Accumsan gravida nec
                  ultricies risus eget arcu turpis sit lorem.
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
                  <p style={{ color: "#004A77" }}>1 Comment </p>
                </div>
              </div>
            </div>
            <div className="firstCmt-news-thanh">
              <div className="time1">June, 01 2021</div>
              <img src={cmtC} className="cmtC-news-thanh" />
              <div className="cmtOfCustemer">
                <h2>Etiam Eget</h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    marginBottom: "30px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eget praesent gravida sed rutrum suspendisse eu. Lectus
                  fermentum in gravida nibh in vel. Accumsan gravida nec
                  ultricies risus eget arcu turpis sit lorem.
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
                  <p style={{ color: "#004A77" }}>1 Comment </p>
                </div>
              </div>
            </div>
          </div>
          <div className="searchCmt-news-thanh">
            <input
              className="input-search-news"
              type="text"
              placeholder="Search"
            />
            <CiSearch className="sicon1" />
            <div className="popolar-news">
              <h3
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "400px",
                }}
              >
                Popular News
              </h3>
              <div className="line-news"></div>
              <div className="smallCmt-popular-news">
                <img src={cmtC} style={{ width: "124px", height: "83px" }} />
                <div className="smallcmt">
                  <h3
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "500px",
                      marginBottom: "15px",
                    }}
                  >
                    Accumsan Gravida
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={cmtUser}
                      style={{ width: "24px", height: "24px" }}
                    />
                    <p style={{ color: "#004A77", fontSize: "12px" }}>
                      By Carla Baptista - May, 28 2021
                    </p>
                  </div>
                </div>
              </div>
              <div className="smallCmt-popular-news">
                <img src={cmtC1} style={{ width: "124px", height: "83px" }} />
                <div className="smallcmt">
                  <h3
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "500px",
                      marginBottom: "15px",
                    }}
                  >
                    Turpis Sit
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={cmtUser}
                      style={{ width: "24px", height: "24px" }}
                    />
                    <p style={{ color: "#004A77", fontSize: "12px" }}>
                      By Carla Baptista - May, 28 2021
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="tags-smallcmt-news">
              <h3
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "400px",
                }}
              >
                Tags
              </h3>
              <div style={{ marginBottom: "20px" }} className="line-news"></div>
              <div>
                <ul className="ul-smallcmt-news">
                  <li>Autopilot</li>
                  <li>Car</li>
                  <li>Dealer</li>
                  <li>Electric</li>
                  <li>Race</li>
                  <li>Speed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default News;
