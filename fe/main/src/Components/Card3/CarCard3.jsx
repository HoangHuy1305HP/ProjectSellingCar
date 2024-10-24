import React from 'react';
import './CarCard3.css';
import Data3 from '../../Data3';
import Review from '../Review/Review';
const CarCard3 = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-info">
                <div className='new'><p>New</p></div>
                <h3>{car.name}</h3>
                <h3 style={{color:'#007CC7'}}>{car.price}</h3>
                <p>{car.place}</p>
                <div className="car-infor">
                    <div><p>{car.year}</p></div>
                    <div><p>{car.style}</p></div>
                    <div><p>{car.energy}</p></div>
                    <div><p>{car.seat} seats</p></div>
                </div>
                <Review></Review>
            </div>
        </div>
    );
};

export default CarCard3;