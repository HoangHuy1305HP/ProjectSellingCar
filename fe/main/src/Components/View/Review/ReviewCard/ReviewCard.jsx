import React from "react";

const ReviewCard = ({
  image,
  title,
  description,
  author,
  date,
  rating,
  comments,
}) => {
  return (
    <div className="review-card">
      <div
        className="review-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="play-button">
          <i className="fa fa-play"></i>
        </div>
      </div>
      <div className="review-content">
        <h3 style={{marginBottom:'20px'}}>{title}</h3>
        <p style={{color:'white', marginTop:'10px'}}>{description}</p>
        <div className="review-footer">
          <div className="rating">{Array(rating).fill("★").join("")}</div>
          <div className="author-info" style={{marginBottom:'20px'}}>
            <img src={author.image} alt={author.name} style={{marginBottom:'20px'}} />
            <p style={{marginBottom:'20px'}}>{author.name}</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-around',position:'relative',right:'36px'}}>
          <div className="comments">
            <i className="fa fa-comment"></i>
            {comments} Comment{comments > 1 ? "s" : ""}
          </div>
          <div className="date">{date}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
