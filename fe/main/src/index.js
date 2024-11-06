import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import NewCar from "./Components/View/NewCar/NewCar";
import UsedCar from "./Components/View/UsedCar/UsedCar";
import Login from "./componentOfThanh/Login";
import Register from "./componentOfThanh/Register";
import News from "./componentOfThanh/News";
import CarsDetail from "./Components/View/CarsDetail/CarsDetail";
import SearchResult2 from "./Components/View/SeacrhResult2/SearchResult2";
import NewsDetail from "./componentOfThanh/NewsDetail";
import Review from "./Components/View/Review/Review";
import Tesla from "./Components/View/Tesla Model 3/Tesla";
import ShoppingCart from "./componentOfThanh/ShoppingCart/ShoppingCart";
import { CartProvider } from "../src/componentOfThanh/ShoppingCart/CartContext ";
import YourInfo from "./Components/View/CarsDetail/YourInfor/YourInfor";
import CompareCar from "./Components/View/CompareCar/CompareCar";
import ForgotPassword from "./componentOfThanh/forgotPassword";
import ResetPassword from "./componentOfThanh/resetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/homepage",
    element: <Homepage></Homepage>,
    children: [],
  },
  {
    path: "/homepage/artical/news",
    element: <News></News>,
  },
  {
    path: "/homepage/artical/news/loremIpsum",
    element: <NewsDetail></NewsDetail>,
  },
  {
    path: "/newcars",
    element: <NewCar></NewCar>,
  },
  {
    path: "/usedcars",
    element: <UsedCar></UsedCar>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/homepage/newcarlist/cardetail",
    element: <CarsDetail></CarsDetail>,
  },
  {
    path: "/newcars/carlist",
    element: <NewCar></NewCar>,
  },
  {
    path: "/newcars/all-carlist",
    element: <SearchResult2></SearchResult2>,
  },
  {
    path: "/homepage/article/review",
    element: <Review></Review>,
  },
  {
    path: "/homepage/article/review/tesla",
    element: <Tesla></Tesla>,
  },
  {
    path: "/homepage/buy",
    element: <ShoppingCart></ShoppingCart>,
  },
  {
    path: "/yourInfor",
    element: <YourInfo />,
  },
  {
    path: "/homepage/comparecar",
    element: <CompareCar />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* Bao quanh RouterProvider bằng CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
