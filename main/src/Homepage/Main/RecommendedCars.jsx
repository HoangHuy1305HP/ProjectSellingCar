import React from "react";
import car from "../RecommendedCars";
import Review from "../../Components/Review/Review";
import "./RecommendedCars.css";
import { FaCalendarAlt } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { RiGasStationLine } from "react-icons/ri";
import { RiParentLine } from "react-icons/ri";

function RecommendedCars({ car }) {
  const h3style = {
    color: "#007CC7",
    fontSize: "24px",
  };

  return (
    <div className="car-recommend">
      <img src={car.img} alt={car.name} className="car-image" />
      <div className="car-inf">
        <div className="new-thanh">
          <p className="p-new">New</p>
        </div>
        <h3
          style={{
            fontSize: "20px",
            fontFamily: "sans-serif",
            fontWeight: "500",
            height: "47px",
          }}
        >
          {car.name}
        </h3>
        <h3 style={h3style}>{car.price}</h3>
        <p style={{ fontSize: "16px", color: "white" }}>{car.place}</p>
        <div className="thongTin">
          <div className="col1">
            <div className="calendar">
              <FaCalendarAlt className="calendarIcon" />
              <p style={{ fontSize: "16px", width: "114px", color: "white" }}>
                {car.year}
              </p>
            </div>
            <div className="calendar">
              <RiGasStationLine className="calendarIcon" />
              <p style={{ fontSize: "16px", width: "114px", color: "white" }}>
                {car.energy}
              </p>
            </div>
          </div>
          <div className="col2">
            <div className="calendar">
              <TbSteeringWheel className="calendarIcon" />
              <p style={{ fontSize: "16px", width: "200px", color: "white" }}>
                {car.wheel}
              </p>
            </div>
            <div className="calendar">
              <RiParentLine className="calendarIcon" />
              <p style={{ fontSize: "16px", width: "114px", color: "white" }}>
                {car.seat}
              </p>
            </div>
          </div>
        </div>
        <Review></Review>
      </div>
    </div>
  );
}

export default RecommendedCars;
