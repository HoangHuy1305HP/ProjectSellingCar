import React from "react";
import SearchCard from "./SearchCard";
import Data from "../../Data";
import "./SearchList.css";
// Hàm lọc xe dựa trên bộ lọc và từ khóa tìm kiếm
const filterCars = (cars, filters, searchTerm) => {
  return cars.filter((car) => {
    // Lọc theo năm
    const yearMatch =
      filters.year.length === 0 || filters.year.includes(car.year);
    // Lọc theo thương hiệu
    const brandMatch =
      filters.brand.length === 0 || filters.brand.includes(car.brand);
    // Lọc theo khoảng giá
    const priceMatch =
      car.price.replace("$", "").replace(",", "") >= filters.priceRange[0] &&
      car.price.replace("$", "").replace(",", "") <= filters.priceRange[1];
    // Lọc theo các tiêu chí khác
    const modelMatch =
      !filters.model ||
      car.name.toLowerCase().includes(filters.model.toLowerCase());
    const bodyTypeMatch =
      !filters.bodyType ||
      car.style.toLowerCase().includes(filters.bodyType.toLowerCase());
    const transmissionMatch =
      !filters.transmission ||
      car.transmission
        .toLowerCase()
        .includes(filters.transmission.toLowerCase());
    const fuelTypeMatch =
      !filters.fuelType ||
      car.energy.toLowerCase().includes(filters.fuelType.toLowerCase());
    const drivetrainMatch =
      !filters.drivetrain ||
      car.drivetrain.toLowerCase().includes(filters.drivetrain.toLowerCase());
    const passengerCapacityMatch =
      !filters.passengerCapacity || car.seat === filters.passengerCapacity;
    const exteriorColorMatch =
      !filters.exteriorColor ||
      car.exteriorColor
        .toLowerCase()
        .includes(filters.exteriorColor.toLowerCase());

    const matchesFilters =
      yearMatch &&
      brandMatch &&
      priceMatch &&
      modelMatch &&
      bodyTypeMatch &&
      transmissionMatch &&
      fuelTypeMatch &&
      drivetrainMatch &&
      passengerCapacityMatch &&
      exteriorColorMatch;

    // Lọc theo từ khóa tìm kiếm
    const matchesSearch = searchTerm
      ? car.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesFilters && matchesSearch;
  });
};

const SearchList = ({ filters, searchTerm }) => {
  const filteredCars = filterCars(Data, filters, searchTerm);

  return (
    <div className="search-list">
      {filteredCars.map((car) => (
        <SearchCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default SearchList;
