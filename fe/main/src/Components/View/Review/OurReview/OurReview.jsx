import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import review1 from "../../../../img/Review1.png";
import review2 from "../../../../img/Review2.png";
import user from "../../../../img/user1.png";
import "./OurReview.css";
import Footer from "../../../../componentOfThanh/Footer";

const OurReviews = () => {
  const reviews = [
    {
      image: review1,
      title: "Etiam Eget",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: { name: "Carla Baptista", image: user },
      date: "June 01, 2021",
      rating: 4,
      comments: 1,
    },
    {
      image: review2,
      title: "Tesla Model 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: { name: "Carla Baptista", image: user },
      date: "June 01, 2021",
      rating: 4,
      comments: 1,
    },
  ];

  return (
    <div className="our-reviews">
      <h2>Our Reviews</h2>
      <div className="reviews-slider">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default OurReviews;
