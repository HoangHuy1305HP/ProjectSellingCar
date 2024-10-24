import React from "react";
import Header from "../../Header/Header";
import Content from "../Content/Content";
import anh01 from "../../../img/Review1.png";
import anh02 from "../../../img/Review3.png";
import RatingComponent from "./Rating/Rating";
import Why from "./why-section/why";
import Conclusion from "./conclusion/conclusion";
import Dealer from "../CarsDetail/Dealer/Dealer";
import CommentBox from "./Comment/Comment";
import OldComment from "./OldComment/OldComment";
import Footer from "../../../componentOfThanh/Footer";
import "./Tesla.css";
const Tesla = () => {
  return (
    <div>
      <Header />
      <Content
        title="Tesla Model 3"
        description="Homepage - Article - Car Review"
      />
      <main
        style={{
          display: "flex",
          background: "black",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="review-section">
          <div className="image-container">
            <img src={anh01} alt="Tesla Model 3" style={{ width: "1000px" }} />
            <button className="play-button">&#9654;</button>
          </div>
          <RatingComponent></RatingComponent>
          <div className="image-container">
            <img src={anh02} alt="Tesla Model 3" style={{ width: "1000px" }} />
            <Why></Why>
          </div>
          <div className="conclusion">
            <Conclusion></Conclusion>
          </div>
        </div>
        <div className="container1">
          <div className="divider1"></div>
          <div className="date-box1">June, 01 2021</div>
        </div>
        <div>
          <Dealer></Dealer>
        </div>
        <div>
          <OldComment></OldComment>
        </div>
        <div>
          <CommentBox></CommentBox>
        </div>
      </main>
    </div>
  );
};

export default Tesla;
