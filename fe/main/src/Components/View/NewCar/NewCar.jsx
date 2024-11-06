import React, { useState, useContext, useEffect } from "react";
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
import axios from "axios";

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
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
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
    mileage: "",
    image: "",
  });

  const {
    cart,
    showIcon,
    handleIconClick,
    showBanner,
    handleBannerClose,
    orderStatus,
    receivedCount,
  } = useContext(CartContext);

  // Fetch danh sách xe từ API
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

  useEffect(() => {
    fetchCars();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddMoreCars = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/product/addcar",
        newCarData
      );

      await fetchCars(); // Thêm xe mới vào danh sách

      setShowForm(false);
      // Reset form fields
      setNewCarData({
        name: "",
        price: "",
        place: "",
        year: "",
        style: "",
        energy: "",
        seat: "",
        brand: "",
        color: "",
        mileage: "",
        image: "",
      });
    } catch (error) {
      console.error("Lỗi khi thêm xe:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewCarData((prevData) => ({
          ...prevData,
          image: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car._id !== id));
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
          <CarList
            filters={filters}
            searchTerm={searchTerm}
            cars={cars}
            onDelete={handleDeleteCar}
          />
          <button className="add-more-cars-btn" onClick={handleAddMoreCars}>
            +
          </button>

          {/* Form to add new car */}
          {showForm && (
            <div className="overlay">
              <form className="new-car-form" onSubmit={handleFormSubmit}>
                <h2>Thêm Thông Tin Xe</h2>
                <div className="form-content">
                  <div className="image-upload">
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="image-input"
                    />
                    <span className="add-image-text">Add Image</span>
                  </div>

                  <div className="input-fields-right">
                    <input
                      name="name"
                      placeholder="Name"
                      value={newCarData.name}
                      onChange={handleInputChange}
                    />
                    <input
                      name="price"
                      placeholder="Price"
                      value={newCarData.price}
                      onChange={handleInputChange}
                    />
                    <input
                      name="place"
                      placeholder="Place"
                      value={newCarData.place}
                      onChange={handleInputChange}
                    />
                    <input
                      name="year"
                      placeholder="Year"
                      value={newCarData.year}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="input-fields-below">
                  <input
                    name="style"
                    placeholder="Style"
                    value={newCarData.style}
                    onChange={handleInputChange}
                  />
                  <input
                    name="energy"
                    placeholder="Energy"
                    value={newCarData.energy}
                    onChange={handleInputChange}
                  />
                  <input
                    name="seat"
                    placeholder="Seat"
                    value={newCarData.seat}
                    onChange={handleInputChange}
                  />
                  <input
                    name="brand"
                    placeholder="Brand"
                    value={newCarData.brand}
                    onChange={handleInputChange}
                  />
                  <input
                    name="color"
                    placeholder="Color"
                    value={newCarData.color}
                    onChange={handleInputChange}
                  />
                  <input
                    name="mileage"
                    placeholder="Mileage"
                    value={newCarData.mileage}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-buttons">
                  <button type="submit">Lưu</button>
                  <button type="button" onClick={() => setShowForm(false)}>
                    Hủy
                  </button>
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
