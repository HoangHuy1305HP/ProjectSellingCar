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
  const [showForm, setShowForm] = useState(false); // State to show form
  const [newCarData, setNewCarData] = useState({
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("New car data:", newCarData);
    setShowForm(false); // Close form after submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCarData((prevData) => ({
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
        setNewCarData((prevData) => ({
          ...prevData,
          image: e.target.result, // URL của ảnh xem trước
        }));
      };
      reader.readAsDataURL(file); // Chuyển file ảnh sang URL để xem trước
    }
  };
  const handleRemoveImage = () => {
    setNewCarData((prevData) => ({
      ...prevData,
      image: "", // Xóa URL ảnh
    }));
  };
  
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
          <button className="add-more-cars-btn" onClick={handleAddMoreCars}>
            +
          </button>

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

  {newCarData.image && (
    <>
      <img
        src={newCarData.image}
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
          <input name="name" placeholder="Name" value={newCarData.name} onChange={handleInputChange} />
          <input name="price" placeholder="Price" value={newCarData.price} onChange={handleInputChange} />
          <input name="place" placeholder="Place" value={newCarData.place} onChange={handleInputChange} />
          <input name="year" placeholder="Year" value={newCarData.year} onChange={handleInputChange} />
        </div>
      </div>

      {/* Các input còn lại ở dưới ảnh */}
      <div className="input-fields-below">
        <input name="style" placeholder="Style" value={newCarData.style} onChange={handleInputChange} />
        <input name="energy" placeholder="Energy" value={newCarData.energy} onChange={handleInputChange} />
        <input name="seat" placeholder="Seat" value={newCarData.seat} onChange={handleInputChange} />
        <input name="brand" placeholder="Brand" value={newCarData.brand} onChange={handleInputChange} />
        <input name="color" placeholder="Color" value={newCarData.color} onChange={handleInputChange} />
        <input name="mileage" placeholder="Mileage" value={newCarData.mileage} onChange={handleInputChange} />
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
                  <li key={product.id}>
                    <p
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
      <Footer />
    </div>
  );
};

export default NewCar;
