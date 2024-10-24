import React from 'react';
import './CompareCar.css'; // Đảm bảo file CSS này được sử dụng cho CompareCard

const CompareCard = ({ car }) => {
    return (
        <div className="compare-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3 className="car-name">{car.name}</h3>
            <h4 className="car-price">{car.price}</h4>
            <p>Location: {car.place}</p>
            <p>Year: {car.year}</p>
            <p>Style: {car.style}</p>
            <p>Energy: {car.energy}</p>
            <p>Seats: {car.seat}</p>
        </div>
    );
};

export default CompareCard;
