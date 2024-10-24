import React from 'react';
import './SearchCard.css';
import Review from '../Review/Review';
import Data from '../../Data';

const SearchCard = () => {
    return (
        <div className="search-card-container">
            {Data.map(car => (
                <div key={car.id} className="car-card">
                    <img src={car.image} alt={car.name} className="car-image" />
                    <div className="car-info">
                        <h3 className="car-name">{car.name}</h3>
                        <p className="car-price">{car.price}</p>
                        <p className="car-place">{car.place}</p>
                        <p className="car-details">
                            {car.year} • {car.style} • {car.energy} • {car.seat} seats
                        </p>
                        <Review /> {/* Bạn có thể tuỳ chỉnh Review component */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchCard;