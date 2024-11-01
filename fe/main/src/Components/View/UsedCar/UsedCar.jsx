import React, { useState, useContext } from "react";
import FilterSidebar from "../../FilterSidebar";
import Search from "../../Search";
import Result from "../../Result";
import CarList2 from "../../Card2/CarList2";
import Page from "../../Page/Page";
import Header from "../../Header/Header";
import Content from "../Content/Content";
import "./UsedCar.css";
import Footer from "../../../componentOfThanh/Footer";
import { CartContext } from "../../../componentOfThanh/ShoppingCart/CartContext ";
import { BsCartCheckFill } from "react-icons/bs";

const UsedCar = () => {
  const [filters2, setFilters] = useState({
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
  const [showForm, setShowForm] = useState(false); // State to show form
  const [usedCarData, setUsedCarData] = useState({
    name: "",
    price: "",
    place: "",
    year: "",
    style: "",
    energy: "",
    seat: "",
    brand: "",
    color: "",
    mileage: ""
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleAddMoreCars = () => {
    setShowForm(true); // Show form when button is clicked
    console.log("Thêm thẻ xe mới");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("New car data:", usedCarData);
    setShowForm(false); // Close form after submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsedCarData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUsedCarData((prevData) => ({
          ...prevData,
          image: e.target.result, // URL của ảnh xem trước
        }));
      };
      reader.readAsDataURL(file); // Chuyển file ảnh sang URL để xem trước
    }
  };
  const handleRemoveImage = () => {
    setUsedCarData((prevData) => ({
      ...prevData,
      image: "", // Xóa URL ảnh
    }));
  };
  return (
    <div>
      <Header />
      <Content title="Used Cars" description="Homepage - Used Cars"></Content>

      <main style={{ display: "flex", background: "black" }}>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div
          style={{ display: "flex", flexDirection: "column", margin: "148px" }}
        >
          <Search onSearch={handleSearch} />
          <Result />
          <CarList2 filters={filters2} searchTerm={searchTerm} />
          {/* Button dấu cộng để thêm thẻ xe */}
    <button className="add-more-cars-btn" onClick={handleAddMoreCars}>+</button>
      {/* Form to add new car */}
      {showForm && (
  <div className="overlay">
    <form className="new-car-form" onSubmit={handleFormSubmit}>
      <h2>Thêm Thông Tin Xe</h2>
      <div className="form-content">
        {/* Phần upload ảnh và các input bên phải */}
        <div className="image-upload">
  
  <input
    id="file-upload"
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="image-input"
  />
  <span className="add-image-text">Add Image</span>

  {usedCarData.image && (
    <>
      <img
        src={usedCarData.image}
        alt="Car preview"
        className="image-preview"
      />
      <button type="button" className="remove-image-btn" onClick={handleRemoveImage}>
        Xóa ảnh
      </button>
    </>
  )}
</div>

        <div className="input-fields-right">
          <input name="name" placeholder="Name" value={usedCarData.name} onChange={handleInputChange} />
          <input name="price" placeholder="Price" value={usedCarData.price} onChange={handleInputChange} />
          <input name="place" placeholder="Place" value={usedCarData.place} onChange={handleInputChange} />
          <input name="year" placeholder="Year" value={usedCarData.year} onChange={handleInputChange} />
        </div>
      </div>

      {/* Các input còn lại ở dưới ảnh */}
      <div className="input-fields-below">
        <input name="style" placeholder="Style" value={usedCarData.style} onChange={handleInputChange} />
        <input name="energy" placeholder="Energy" value={usedCarData.energy} onChange={handleInputChange} />
        <input name="seat" placeholder="Seat" value={usedCarData.seat} onChange={handleInputChange} />
        <input name="brand" placeholder="Brand" value={usedCarData.brand} onChange={handleInputChange} />
        <input name="color" placeholder="Color" value={usedCarData.color} onChange={handleInputChange} />
        <input name="mileage" placeholder="Mileage" value={usedCarData.mileage} onChange={handleInputChange} />
      </div>

      <div className="form-buttons">
        <button type="submit">Lưu</button>
        <button type="button" onClick={() => setShowForm(false)}>Hủy</button>
      </div>
    </form>
  </div>
)}
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

export default UsedCar;
