import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <div className="review-container">
      <hr className="review-separator" />
      <div className="review-stars">
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">☆</span>
        <span className="review-count">(12 Reviews)</span>
      </div>
    </div>
  );
};

export default Review;
