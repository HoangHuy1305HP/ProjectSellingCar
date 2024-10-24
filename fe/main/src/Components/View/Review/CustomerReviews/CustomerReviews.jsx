import React, { useState } from "react";
import car1 from "../../../../img/Tesla.png";
import car2 from "../../../../img/Ford.png";
import car3 from "../../../../img/Honda.png";
import car4 from "../../../../img/Chevrolet.png"
import Page from "../../../Page/Page";
import { Link } from "react-router-dom";

const vehicles = [
  {
    image: car2,
    title: "Ford F-250 Super Duty",
    price: "$82,098 - $92,050",
    year: "2021",
    driveType: "Four-wheel Drive",
    fuelType: "Diesel",
    passengers: 5,
    rating: 5,
    reviews: 12,
  },
  {
    image: car1,
    title: "Tesla Model S",
    price: "$94,990 - $129,990",
    year: "2021",
    driveType: "All-wheel Drive",
    fuelType: "Electric",
    passengers: 5,
    rating: 4,
    reviews: 18,
  },
  {
    image: car3,
    title: "Honda Pilot Touring 7-Passenger",
    price: "$43,735 - $44,560",
    year: "2021",
    driveType: "All-wheel Drive",
    fuelType: "Gasoline",
    passengers: 7,
    rating: 4,
    reviews: 12,
  },
  {
    image: car4,
    title: "Chervolet Equinox LS",
    price: "$15,520 - $22,560",
    year: "2021",
    driveType: "Front-wheel Drive",
    fuelType: "Gasoline",
    passengers: 7,
    rating: 4,
    reviews: 10,
  }
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVehicle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= vehicles.length ? 0 : prevIndex + 2
    );
  };

  const prevVehicle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vehicles.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="customer-reviews">
      <h1>Customer Review</h1>
      <div className="reviews-slider">
        {vehicles
          .slice(currentIndex, currentIndex + 2)
          .map((vehicle, index) => (
            <div className="review-card" key={index}>
              <div
                className="review-image"
                style={{
                  backgroundImage: `url(${vehicle.image})`,
                }}
              ></div>
              <div className="review-content">
                <Link to="/homepage/article/review/tesla">
                  <h3 style={{ marginBottom: "20px" }}>{vehicle.title}</h3>
                </Link>
                <h3
                  style={{
                    marginBottom: "10px",
                    color: "hsla(203, 100%, 39%, 1)",
                  }}
                >
                  {vehicle.price}
                </h3>
                <ul>
                  <div
                    style={{ display: "flex", gap: "100px", color: "white" }}
                  >
                    <li>{vehicle.year}</li>
                    <li>{vehicle.driveType}</li>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "100px",
                      color: "white",
                      marginTop: "30px",
                    }}
                  >
                    <li>{vehicle.fuelType}</li>
                    <li>Passengers: {vehicle.passengers}</li>
                  </div>
                </ul>
                <div className="rating">
                  {"★".repeat(vehicle.rating)}
                  {"☆".repeat(5 - vehicle.rating)}
                  <span>({vehicle.reviews} Reviews)</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="pagination-controls">
        <button className="pagination-button" onClick={prevVehicle}>
          &lt;
        </button>
        <button className="pagination-button" onClick={nextVehicle}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
