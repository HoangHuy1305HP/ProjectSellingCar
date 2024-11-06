import React, { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";
import CarList from "./Components/Card/CarList";
import NewCar from "./Components/View/NewCar/NewCar";

function App() {
  const [cars, setCars] = useState([]); // Khởi tạo danh sách xe

  const handleCarAdded = (newCar) => {
    // Sau khi thêm xe mới, cập nhật lại danh sách
    setCars((prevCars) => [newCar, ...prevCars]);
  };
  return (
    <div className="container">
      <NewCar onCarAdded={handleCarAdded} />
      <CarList cars={cars} /> {/* Truyền danh sách xe vào CarList */}
    </div>
  );
}
export default App;
