import React from "react";
import "./Price.css";
const PriceButton = ({ price, carInfo }) => {
  const handleClick = () => {
    alert("Mua xe thành công");
    localStorage.setItem("carInfo", JSON.stringify(carInfo));
  };

  return (
    <button className="price-button" onClick={handleClick}>
      {price}
    </button>
  );
};

export default PriceButton;
