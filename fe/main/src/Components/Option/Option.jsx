import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Option.css";
import SearchResult2 from "../View/SeacrhResult2/SearchResult2";
import SearchResult1 from "../View/SearchResult1/SearchResult1";

const Options = () => {
  const [activeOption, setActiveOption] = useState("list");

  return (
    <div className="options">
      <Link to="/newcars/carlist">
        <button
          className={`options-button ${
            activeOption === "list" ? "active" : ""
          }`}
          onClick={() => setActiveOption("list")}
        >
          <i className="fas fa-list"></i> {/* Biểu tượng danh sách */}
        </button>
      </Link>
      <Link to="/newcars/all-carlist">
        <button
          className={`options-button ${
            activeOption === "grid" ? "active" : ""
          }`}
          onClick={() => setActiveOption("grid")}
        >
          <i className="fas fa-th"></i> {/* Biểu tượng lưới */}
        </button>
      </Link>
    </div>
  );
};

export default Options;
