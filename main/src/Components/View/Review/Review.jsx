import React from "react";
import Header from "../../Header/Header";
import Content from "../Content/Content";
import Search from "../../Search";
import OurReviews from "./OurReview/OurReview";
import CustomerReview from "./CustomerReviews/CustomerReviews";
import Footer from "../../../componentOfThanh/Footer";
const Review = () => {
  const handleSearch = (term) => {
    console.log("Search term:", term); // Xử lý logic tìm kiếm ở đây
  };

  const handleButtonClick = () => {
    handleSearch(""); // Có thể thay đổi hoặc làm gì đó khác với giá trị mặc định
  };

  return (
    <div>
      <Header />
      <Content
        title="Car Review"
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <Search onSearch={handleSearch} />
          <button
            onClick={handleButtonClick}
            style={{
              padding: "12px 24px", // Tăng padding để làm cho nút lớn hơn
              fontSize: "16px", // Tăng kích thước font chữ
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "6px", // Làm cho góc bo tròn hơn
              cursor: "pointer",
              marginLeft: "50px", // Khoảng cách giữa thanh tìm kiếm và nút
              marginTop: "10px",
            }}
          >
            Search
          </button>
        </div>
        <div>
          <h1
            style={{
              color: "white",
              position: "relative",
              right: "-55px",
              top: "20px",
            }}
          >
            Our review
          </h1>
          <OurReviews></OurReviews>
        </div>
        <CustomerReview></CustomerReview>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Review;
