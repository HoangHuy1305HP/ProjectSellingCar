import React, { useContext } from "react";
import "./ShoppingCart.css";
import Navbar from "../../Components/NavBar";
import Footer from "../Footer";
import { CartContext } from "../ShoppingCart/CartContext ";
import { FaCalendarAlt } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { RiGasStationLine } from "react-icons/ri";
import { RiParentLine } from "react-icons/ri";
// import { BsCartCheckFill } from "react-icons/bs";
import { BsCartCheckFill, BsCheckCircle } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

function ShoppingCart() {
  // const { cart, removeFromCart } = useContext(CartContext);

  const {
    cart,
    removeFromCart,
    handleCheckout,
    showIcon,
    handleIconClick,
    showBanner,
    handleBannerClose,
    handleOrderReceived,
    orderStatus,
    // paymentCompleted,
  } = useContext(CartContext);

  // const handleCheckout = () => {
  //   const loggedInUser = localStorage.getItem("loggedInUser");
  //   if (!loggedInUser) {
  //     alert("Bạn cần đăng nhập để thực hiện thanh toán.");
  //     navigate("/login"); // Chuyển hướng đến trang đăng nhập
  //     return;
  //   }
  //   // Xử lý thanh toán ở đây
  //   alert("Thanh toán thành công!");
  //   displayPaymentSuccessIcon(); // Hiển thị biểu tượng thanh toán thành công
  // };
  // const handleIconClick = () => {
  //   setShowBanner(true); // Hiển thị banner thông tin đơn hàng khi nhấn vào biểu tượng
  // };

  // const handleBannerClose = () => {
  //   setShowBanner(false);
  // };
  const receivedCount = Object.values(orderStatus).filter(
    (status) => status
  ).length;

  return (
    <div>
      <div className="Mews-Narbar">
        <Navbar />
      </div>
      <div className="body-shoppingcart">
        <div className="title-news-thanh">
          <h1 className="h1-news-thanh" style={{ marginTop: "50px" }}>
            Shopping Cart
          </h1>
          <p className="p-news-thanh" style={{ marginBottom: "50px" }}>
            Homepage - Shopping Cart
          </p>
        </div>
        <div style={{ display: "flex", gap: "160px" }}>
          <div className="products-shoppingcart">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <h3>{product.name}</h3>
                    <p style={{ color: "#007CC7" }}>{product.price}</p>
                    <p>{product.place}</p>
                    <div className="product-infor">
                      <div style={{ display: "flex", gap: "50px" }}>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <FaCalendarAlt className="calendarIcon" />
                            <p>{product.year}</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <RiGasStationLine className="calendarIcon" />
                            <p>{product.style}</p>
                          </div>
                        </div>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <TbSteeringWheel className="calendarIcon" />
                            <p>{product.energy}</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <RiParentLine className="calendarIcon" />
                            <p>{product.seat} seats</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="remove-from-cart-btn"
                  >
                    Remove
                  </button>
                  {/* {paymentCompleted && (
                    <div className="product-status">
                      {orderStatus[product.id] ? (
                        <p className="status">
                          <BsCheckCircle /> Đã nhận hàng thành công
                        </p>
                      ) : (
                        <p className="status">
                          <RiCloseCircleFill /> Đang giao
                        </p>
                      )}
                      {!orderStatus[product.id] && (
                        <button
                          className="order-received-btn"
                          onClick={() => handleOrderReceived(product.id)}
                        >
                          Xác nhận nhận hàng
                        </button>
                      )}
                    </div>
                  )} */}

                  {orderStatus[product.id] !== undefined && (
                    <div className="product-status">
                      {orderStatus[product.id] ? (
                        <p className="status">
                          <BsCheckCircle /> Đã nhận hàng thành công
                        </p>
                      ) : (
                        <p className="status">
                          <RiCloseCircleFill /> Đang giao
                        </p>
                      )}
                      {!orderStatus[product.id] && (
                        <button
                          className="order-received-btn"
                          onClick={() => handleOrderReceived(product.id)}
                        >
                          Xác nhận nhận hàng
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="empty-product">
                Your cart is empty <span style={{ color: "red" }}>!</span>
              </p>
            )}
          </div>
          <div className="click-buy">
            {cart.map((product) => (
              <button
                key={product.id}
                className="click-buy-box"
                onClick={() => handleCheckout(product.id)} // Chỉ thanh toán sản phẩm cụ thể
              >
                <h3 className="h3-product-btn">Pay with price </h3>
                <p style={{ fontSize: "25px", color: "red", fontWeight: 600 }}>
                  {product.price}
                </p>
              </button>
            ))}
          </div>
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
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
