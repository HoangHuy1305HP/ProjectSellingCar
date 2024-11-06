import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import axios from "axios";
import "./CarList.css";

// Hàm lọc xe dựa trên bộ lọc và từ khóa tìm kiếm
const filterCars = (cars, filters = {}, searchTerm = "") => {
  return cars.filter((car) => {
    // Kiểm tra nếu car tồn tại và có các thuộc tính cần thiết
    if (!car || !car.year || !car.brand || car.price == null) return false;

    // Kiểm tra và xử lý `price` nếu là chuỗi
    const price =
      typeof car.price === "string"
        ? parseInt(car.price.replace("$", "").replace(",", ""), 10)
        : car.price;

    // Kiểm tra các giá trị trong `filters` để đảm bảo không bị undefined
    const yearMatch = filters.year
      ? filters.year.length === 0 || filters.year.includes(car.year)
      : true;
    const brandMatch = filters.brand
      ? filters.brand.length === 0 || filters.brand.includes(car.brand)
      : true;
    const priceMatch = filters.priceRange
      ? price >= (filters.priceRange[0] || 0) &&
        price <= (filters.priceRange[1] || Infinity)
      : true;

    const modelMatch = filters.model
      ? car.name && car.name.toLowerCase().includes(filters.model.toLowerCase())
      : true;
    const bodyTypeMatch = filters.bodyType
      ? car.style &&
        car.style.toLowerCase().includes(filters.bodyType.toLowerCase())
      : true;
    const transmissionMatch = filters.transmission
      ? car.transmission &&
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      : true;
    const fuelTypeMatch = filters.fuelType
      ? car.energy &&
        car.energy.toLowerCase().includes(filters.fuelType.toLowerCase())
      : true;
    const drivetrainMatch = filters.drivetrain
      ? car.drivetrain &&
        car.drivetrain.toLowerCase().includes(filters.drivetrain.toLowerCase())
      : true;
    const passengerCapacityMatch = filters.passengerCapacity
      ? car.seat === filters.passengerCapacity
      : true;
    const exteriorColorMatch = filters.exteriorColor
      ? car.exteriorColor &&
        car.exteriorColor
          .toLowerCase()
          .includes(filters.exteriorColor.toLowerCase())
      : true;

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

    const matchesSearch = searchTerm
      ? car.name && car.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesFilters && matchesSearch;
  });
};

const CarList = ({ filters, searchTerm, onDelete }) => {
  const [cars, setCars] = useState([]);

  // Hàm lấy dữ liệu từ API
  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:2000/product/getcars");
      console.log("Dữ liệu sản phẩm nhận được:", response.data); // In ra dữ liệu
      if (Array.isArray(response.data)) {
        setCars(response.data);
      } else {
        console.error("Dữ liệu không phải là mảng:", response.data);
        setCars([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách xe:", error);
    }
  };
  // Gọi API khi component được mount
  useEffect(() => {
    fetchCars();
  }, []);

  // Hàm xóa sản phẩm
  const handleDelete = async (carId) => {
    try {
      await axios.delete(`http://localhost:2000/product/deletecar/${carId}`);
      setCars(cars.filter((car) => car._id !== carId)); // Cập nhật danh sách sau khi xóa
    } catch (error) {
      console.error("Lỗi khi xóa xe:", error);
    }
  };

  const filteredCars = filterCars(cars, filters, searchTerm);
  console.log("Filtered Cars:", filteredCars);

  // useEffect để theo dõi sự thay đổi của `cars`
  useEffect(() => {
    console.log("Danh sách xe sau khi cập nhật:", cars);
  }, [cars]); // Mỗi khi `cars` thay đổi, sẽ log danh sách xe

  return (
    <div className="car-list">
      {filteredCars.map((car) => (
        <CarCard key={car._id} car={car} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default CarList;
