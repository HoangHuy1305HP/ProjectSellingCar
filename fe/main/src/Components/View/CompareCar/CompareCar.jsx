import React, { useState } from 'react';
import "./CompareCar.css";
import Data from '../../../Data.js';
import Header from '../../Header/Header.jsx';
import Footer from '../../../componentOfThanh/Footer.jsx';
import Content from '../Content/Content.jsx';
const CompareCar = () => {
    const [selectedCar1, setSelectedCar1] = useState(null);
    const [selectedCar2, setSelectedCar2] = useState(null);

    const handleSelectCar1 = (event) => {
        const carId = parseInt(event.target.value);
        setSelectedCar1(Data.find(car => car.id === carId));
    };

    const handleSelectCar2 = (event) => {
        const carId = parseInt(event.target.value);
        setSelectedCar2(Data.find(car => car.id === carId));
    };

    const resetSelection = () => {
        setSelectedCar1(null);
        setSelectedCar2(null);
    };

    const carComparisonData = [
        {
            label: "Year",
            value1: selectedCar1 ? selectedCar1.year : '',
            value2: selectedCar2 ? selectedCar2.year : ''
        },
        {
            label: "Color",
            value1: selectedCar1 ? "Red" : '', // Giả sử màu sắc
            value2: selectedCar2 ? "Blue" : '' // Giả sử màu sắc
        },
        {
            label: "Fuel",
            value1: selectedCar1 ? selectedCar1.energy : '',
            value2: selectedCar2 ? selectedCar2.energy : ''
        },
        {
            label: "Mileage",
            value1: selectedCar1 ? "15,000 miles" : '', // Giả sử quãng đường
            value2: selectedCar2 ? "20,000 miles" : '' // Giả sử quãng đường
        },
        {
            label: "Condition",
            value1: selectedCar1 ? "New" : '', // Tình trạng xe
            value2: selectedCar2 ? "Used" : '' // Tình trạng xe
        },
        {
            label: "Seats",
            value1: selectedCar1 ? selectedCar1.seat : '',
            value2: selectedCar2 ? selectedCar2.seat : ''
        },
    ];

    return (
        <div>
            <Header />
            <Content title="New Cars" description="Homepage - New Cars"></Content>
            <div className="select-container">
                <select className="select" onChange={handleSelectCar1} value={selectedCar1 ? selectedCar1.id : ''}>
                    <option value="" disabled>Select Car 1</option>
                    {Data.map(car => (
                        <option key={car.id} value={car.id}>{car.name}</option>
                    ))}
                </select>
                <select className="select" onChange={handleSelectCar2} value={selectedCar2 ? selectedCar2.id : ''}>
                    <option value="" disabled>Select Car 2</option>
                    {Data.map(car => (
                        <option key={car.id} value={car.id}>{car.name}</option>
                    ))}
                </select>
            </div>
            <div className="comparison-container">
                {selectedCar1 && (
                    <div className="compare-card">
                        <img src={selectedCar1.image} alt={selectedCar1.name} className="car-image" />
                        <h3 className="car-name">{selectedCar1.name}</h3>
                        <p className="car-price">{selectedCar1.price}</p>
                    </div>
                )}
                {selectedCar2 && (
                    <div className="compare-card">
                        <img src={selectedCar2.image} alt={selectedCar2.name} className="car-image" />
                        <h3 className="car-name">{selectedCar2.name}</h3>
                        <p className="car-price">{selectedCar2.price}</p>
                    </div>
                )}
            </div>
            {selectedCar1 && selectedCar2 && (
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>{selectedCar1.name}</th>
                            <th>{selectedCar2.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carComparisonData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.label}</td>
                                <td>{item.value1}</td>
                                <td>{item.value2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button className="reset-button1" onClick={resetSelection}>Reset</button>
            <Footer />
        </div>
    );
};

export default CompareCar;
