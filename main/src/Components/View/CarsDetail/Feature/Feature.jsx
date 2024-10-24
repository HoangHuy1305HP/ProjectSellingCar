import React from "react";
import "./Feature1.css";

const features = [
  "Autopilot",
  "Summon",
  "Autopark",
  "Auto Lane Change",
  "15 inch Touchscreen Display",
  "360° Camera",
  "12 Ultrasonic Sensor",
];

const FeatureComponent = () => {
  return (
    <div className="feature-container">
      <h2>Feature</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <input
              className="feature-item-input"
              type="checkbox"
              checked
              readOnly
            />
            <label>{feature}</label>
          </div>
        ))}
      </div>
      <div className="show-more">Show more</div>
    </div>
  );
};

export default FeatureComponent;
