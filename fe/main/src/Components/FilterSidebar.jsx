import React, { useState } from "react";
import "../Css/FilterSidebar.css";
import RangeSlider from "./RangeSlider/RangeSlider";

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    year: [],
    brand: [],
    priceRange: [0, 3000000],
    model: "",
    bodyType: "",
    transmission: "",
    fuelType: "",
    drivetrain: "",
    passengerCapacity: "",
    exteriorColor: "",
  });

  // Trạng thái để quản lý xem các thương hiệu và năm có được hiển thị không
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [showMoreYears, setShowMoreYears] = useState(false);

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      const newFilters = { ...prevFilters, [category]: updatedCategory };
      onFilterChange(newFilters); // Cập nhật bộ lọc
      return newFilters;
    });
  };

  const handleRangeChange = (priceRange) => {
    const newFilters = { ...filters, priceRange };
    setFilters(newFilters);
    onFilterChange(newFilters); // Cập nhật bộ lọc
  };

  const handleDropdownChange = (category, value) => {
    const newFilters = {
      ...filters,
      [category]: value ? [value] : [],
    };
    setFilters(newFilters);
    onFilterChange(newFilters); // Cập nhật bộ lọc
  };

  const handleResetFilters = () => {
    const defaultFilters = {
      year: [],
      brand: [],
      priceRange: [0, 3000000],
      model: "",
      bodyType: "",
      transmission: "",
      fuelType: "",
      drivetrain: "",
      passengerCapacity: "",
      exteriorColor: "",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters); // Cập nhật bộ lọc
  };

  // Thay đổi trạng thái để hiện/ẩn các thương hiệu và năm
  const toggleShowMoreBrands = () => setShowMoreBrands(!showMoreBrands);
  const toggleShowMoreYears = () => setShowMoreYears(!showMoreYears);

  // Danh sách các thương hiệu và năm mẫu
  const allBrands = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Ford",
    "Honda",
    "Kia",
    "Mini",
    "Jeep",
    "Land Rover",
    "Toyota",
  ];
  const allYears = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

  return (
    <div className="filter-sidebar">
      <div className="Filter">
        <h2 className="underline">Filter</h2>
      </div>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search"
          className="filter-search"
          onChange={(e) => handleDropdownChange("model", e.target.value)}
        />
      </div>
      <div className="filter-section2">
        <div className="filter-options">
          <select
            className="year-select"
            onChange={(e) => handleDropdownChange("year", e.target.value)}
          >
            <option value="">Year</option>
            {(showMoreYears ? allYears : allYears.slice(0, 5)).map(
              (year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
          <div className="filter-options">
            {(showMoreYears ? allYears : allYears.slice(0, 5)).map(
              (year, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange("year", year)}
                  />{" "}
                  {year}
                </label>
              )
            )}
          </div>
          <a
            href="#"
            className="see-more"
            onClick={(e) => {
            e.preventDefault();
            toggleShowMoreYears();
  }}
>
  {showMoreYears ? "See Less" : "See More"}
</a>
        </div>
      </div>
      <div className="filter-section3">
        <select
          className="brand-select"
          onChange={(e) => handleDropdownChange("brand", e.target.value)}
        >
          <option value="">Brand</option>
          {(showMoreBrands ? allBrands : allBrands.slice(0, 5)).map(
            (brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            )
          )}
        </select>
        <div className="filter-options">
          {(showMoreBrands ? allBrands : allBrands.slice(0, 5)).map(
            (brand, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange("brand", brand)}
                />{" "}
                {brand}
              </label>
            )
          )}
        </div>
        <a
        href="#"
        className="see-more2"
        onClick={(e) => {
        e.preventDefault();
        toggleShowMoreBrands();
  }}
>
  {showMoreBrands ? "See Less" : "See More"}
</a>
      </div>
      <div className="filter-section">
        <div className="filter-options">
          {[
            "Model",
            "Body Type",
            "Transmission",
            "Fuel Type",
            "Drivetrain",
            "Passenger Capacity",
            "Exterior Color",
          ].map((category) => (
            <select
              className="bodytype-select"
              key={category}
              onChange={(e) =>
                handleDropdownChange(
                  category.toLowerCase().replace(" ", ""),
                  e.target.value
                )
              }
            >
              <option value="">{category}</option>
              {/* Add options for each category */}
            </select>
          ))}
        </div>
      </div>
      <RangeSlider onPriceChange={handleRangeChange} />
    </div>
  );
};

export default FilterSidebar;