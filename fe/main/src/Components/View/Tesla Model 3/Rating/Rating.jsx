import React from 'react';
import './Rating.css';

const RatingComponent = () => {
    return (
        <div className="rating-container">
            <h2 style={{color: 'hsla(203, 100%, 39%, 1)'
}}>$56,690 - $57,750</h2>
            <div className="rating-box">
                <div className="star-section">
                    <span className="large-star">★</span>
                    <span className="review-text">12 Review</span>
                </div>
                <div className="rating-details">
                    {['Comfort', 'Design', 'Performance', 'Price', 'Reliability'].map((criteria, index) => (
                        <div key={index} className="rating-row">
                            <span className="criteria-text">{criteria}</span>
                            <div className="stars">
                                {'★★★★★'.slice(0, 5 - index) + '☆☆☆☆☆'.slice(0, index)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="strength-section">
                <h3>Strength</h3>
                <ul>
                    <li>Leo amet, posuere nibh nam nulla vestibulum sagittis mauris.</li>
                    <li>Elementum lacus, et sed praesent lectus nisi diam pulvinar eget.</li>
                    <li>Vulputate nibh molestie cras dapibus.</li>
                    <li>Blandit venenatis, commodo magnis dictumst ut consequat, etiam sed.</li>
                </ul>
            </div>
            
        </div>
    );
};

export default RatingComponent;