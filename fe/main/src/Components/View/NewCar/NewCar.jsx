import React, { useState, useContext } from "react";
import FilterSidebar from "../../FilterSidebar";
import Search from "../../Search";
import Result from "../../Result";
import CarList from "../../Card/CarList";
import Page from "../../Page/Page";
import Header from "../../Header/Header";
import Content from "../Content/Content";
import "./NewCar.css";
import Footer from "../../../componentOfThanh/Footer";
import { CartContext } from "../../../componentOfThanh/ShoppingCart/CartContext ";
import { BsCartCheckFill } from "react-icons/bs";

const NewCar = () => {
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleAddMoreCars = () => {
    // Logic để thêm xe mới vào danh sách
    console.log("Thêm thẻ xe mới");
  };

  const {
    cart,
    showIcon,
    handleIconClick,
    showBanner,
    handleBannerClose,
    orderStatus,
    receivedCount,
  } = useContext(CartContext);

  return (
    <div>
      <Header />
      <Content title="New Cars" description="Homepage - New Cars" />
      <main style={{ display: "flex", background: "black" }}>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div
          style={{ display: "flex", flexDirection: "column", margin: "148px" }}
        >
          <Search onSearch={handleSearch} />
          <Result />
          <CarList filters={filters} searchTerm={searchTerm} />
           {/* Button dấu cộng để thêm thẻ xe */}
    <button className="add-more-cars-btn" onClick={handleAddMoreCars}>
      +
    </button>
        </div>
        {showIcon && (
          <div className="checkout-icon" onClick={handleIconClick}>
            <BsCartCheckFill className="icon" />
          </div>
        )}
        {showBanner && (
          <div className="checkout-banner">
            <div className="banner-content">
              <button className="banner-close" onClick={handleBannerClose}>
                ×
              </button>
              <h2>Thông Tin Đơn Hàng</h2>
              <ul>
                {cart.map((product) => (
                  <li>
                    <p
                      key={product.id}
                      style={{
                        color: orderStatus[product.id] ? "red" : "#969494",
                      }}
                    >
                      {product.name} - {product.price}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="status">
                {receivedCount > 0
                  ? `Đã nhận hàng thành công: ${receivedCount}`
                  : "Đang giao"}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default NewCar;
