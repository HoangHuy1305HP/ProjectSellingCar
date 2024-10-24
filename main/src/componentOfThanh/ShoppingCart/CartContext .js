// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [showIcon, setShowIcon] = useState(false);
//   const [showBanner, setShowBanner] = useState(false);
//   const [orderStatus, setOrderStatus] = useState({});
//   const [paymentCompleted, setPaymentCompleted] = useState(false);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//     setOrderStatus((prevStatus) => {
//       const { [productId]: _, ...rest } = prevStatus;
//       return rest;
//     });
//   };

//   const handleCheckout = (productId) => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (!loggedInUser) {
//       alert("Bạn cần đăng nhập để thực hiện thanh toán.");
//       return;
//     }
//     alert("Thanh toán thành công!");
//     setShowIcon(true);
//     setPaymentCompleted(true);

//     // Chỉ cập nhật trạng thái cho sản phẩm cụ thể
//     setOrderStatus((prevStatus) => ({
//       ...prevStatus,
//       [productId]: false, // false means "Đang giao"
//     }));

//     // Initialize order status for all items in the cart
//     const initialStatus = cart.reduce((status, product) => {
//       status[product.id] = false; // false means "Đang giao"
//       return status;
//     }, {});
//     setOrderStatus(initialStatus);
//   };

//   const handleIconClick = () => {
//     setShowBanner(true);
//   };

//   const handleBannerClose = () => {
//     setShowBanner(false);
//   };

//   const handleOrderReceived = (productId) => {
//     setOrderStatus((prevStatus) => ({
//       ...prevStatus,
//       [productId]: true, // true means "Đã nhận hàng thành công"
//     }));
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         handleCheckout,
//         showIcon,
//         handleIconClick,
//         showBanner,
//         handleBannerClose,
//         handleOrderReceived,
//         orderStatus,
//         paymentCompleted,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showIcon, setShowIcon] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [orderStatus, setOrderStatus] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setOrderStatus((prevStatus) => {
      const { [productId]: _, ...rest } = prevStatus;
      return rest;
    });
  };

  const handleCheckout = (productId) => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      alert("Bạn cần đăng nhập để thực hiện thanh toán.");
      return;
    }
    alert(`Thanh toán thành công cho sản phẩm có ID: ${productId}`);
    setShowIcon(true);

    // Chỉ cập nhật trạng thái cho sản phẩm cụ thể
    setOrderStatus((prevStatus) => ({
      ...prevStatus,
      [productId]: false, // false means "Đang giao"
    }));
  };

  const handleIconClick = () => {
    setShowBanner(true);
  };

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  const handleOrderReceived = (productId) => {
    setOrderStatus((prevStatus) => ({
      ...prevStatus,
      [productId]: true, // true means "Đã nhận hàng thành công"
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleCheckout,
        showIcon,
        handleIconClick,
        showBanner,
        handleBannerClose,
        handleOrderReceived,
        orderStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
