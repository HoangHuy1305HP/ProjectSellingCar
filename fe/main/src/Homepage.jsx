import React from "react";
import "./Homepage.css";
import Header from "./Homepage/Header";
import Footer from "./componentOfThanh/Footer";
import Main from "./Homepage/Main/Main";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
