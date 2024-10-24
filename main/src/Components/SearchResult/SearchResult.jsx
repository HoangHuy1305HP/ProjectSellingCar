import React from 'react';
import './SearchResult.css';
import Data from '../../Data';
import Review from '../Review/Review';

const SearchResult = ({ filters, searchTerm }) => {
  // Áp dụng bộ lọc cho dữ liệu
  const filteredCars = Data.filter(car => {
    // Kiểm tra bộ lọc năm
    if (filters.year.length > 0 && !filters.year.includes(car.year)) {
      return false;
    }
    // Kiểm tra bộ lọc thương hiệu
    if (filters.brand.length > 0 && !filters.brand.includes(car.brand)) {
      return false;
    }
    // Kiểm tra từ khóa tìm kiếm
    if (searchTerm && !car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // Kiểm tra phạm vi giá
    if (car.price < filters.priceRange[0] || car.price > filters.priceRange[1]) {
      return false;
    }
    // Kiểm tra các bộ lọc khác nếu có (ví dụ: model, bodyType, transmission, ...)
    // Thêm logic kiểm tra cho các bộ lọc khác nếu cần
    return true;
  });

  // Chia dữ liệu thành các hàng
  const carRows = filteredCars.reduce((rows, car, index) => {
    if (index % 2 === 0) rows.push([]);
    rows[rows.length - 1].push(car);
    return rows;
  }, []);

  return (
    <div className="search-result">
      {carRows.map((row, index) => (
        <div key={index} className="car-row">
          {row.map(car => (
            <div key={car.id} className="car-card1">
              <img src={car.image} alt={car.name} className="car-image1" />
              <div className="car-info1">
                <div className='condition'><p>New</p></div>
                <h3>{car.name}</h3>
                <h3 className="car-price">{car.price} {car.oldPrice && <span className="old-price">{car.oldPrice}</span>}</h3>
                <p className="car-place">{car.place}</p>
                <p className="car-year">{car.year} • {car.style}</p>
                <p className="car-energy">{car.energy} • {car.seat} seats</p>
                <Review />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SearchResult;