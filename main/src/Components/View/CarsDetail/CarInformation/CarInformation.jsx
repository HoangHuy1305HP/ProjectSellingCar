import React from "react";
import "./CarInformation.css";

const CarInformation = () => {
  return (
    <div className="car-details">
      <h2>Car Details</h2>
      <div className="car-detail-section">
        <div className="detail">
          <span className="label">Brand</span>
          <span className="value">Tesla</span>
        </div>
        <div className="detail">
          <span className="label">Model</span>
          <span className="value">Model 3</span>
        </div>
        <div className="detail">
          <span className="label">Condition</span>
          <span className="value">New</span>
        </div>
        <div className="detail">
          <span className="label">Year</span>
          <span className="value">2019</span>
        </div>
        <div className="detail">
          <span className="label">Body Type</span>
          <span className="value">Sedan</span>
        </div>
        <div className="detail">
          <span className="label">Seats</span>
          <span className="value">5 people</span>
        </div>
        <div className="detail">
          <span className="label">Exterior Color</span>
          <span className="value">Red</span>
        </div>
      </div>

      <h3>Engine</h3>
      <div className="car-detail-section">
        <div className="detail">
          <span className="label">Fuel Type</span>
          <span className="value">Electric</span>
        </div>
        <div className="detail">
          <span className="label">Mileage</span>
          <span className="value">340 km</span>
        </div>
        <div className="detail">
          <span className="label">Transmission</span>
          <span className="value">Automatic</span>
        </div>
        <div className="detail">
          <span className="label">Drivetrain</span>
          <span className="value">Rear-wheel Drive</span>
        </div>
        <div className="detail">
          <span className="label">Power</span>
          <span className="value">283 hp (211 kW)</span>
        </div>
      </div>

      <h3>Battery and Charging</h3>
      <div className="car-detail-section">
        <div className="detail">
          <span className="label">Battery Capacity</span>
          <span className="value">55.0 kWh</span>
        </div>
        <div className="detail">
          <span className="label">Charge Speed</span>
          <span className="value">64 km/h</span>
        </div>
        <div className="detail">
          <span className="label">Charge Port</span>
          <span className="value">Type 2</span>
        </div>
        <div className="detail">
          <span className="label">Charge Time (0-Full)</span>
          <span className="value">330 mnt</span>
        </div>
      </div>

      <h3>Dimension</h3>
      <div className="car-detail-section">
        <div className="detail">
          <span className="label">Length</span>
          <span className="value">4694 mm</span>
        </div>
        <div className="detail">
          <span className="label">Width</span>
          <span className="value">1849 mm</span>
        </div>
        <div className="detail">
          <span className="label">Height</span>
          <span className="value">1443 mm</span>
        </div>
        <div className="detail">
          <span className="label">Cargo Volume</span>
          <span className="value">542 L</span>
        </div>
      </div>

      <div className="vehicle-history">
        <a href="#">Vehicle History ↗</a>
        <div className="rating">★★★★☆ (12 Reviews)</div>
      </div>
    </div>
  );
};

export default CarInformation;
