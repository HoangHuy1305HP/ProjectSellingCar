import React from "react";
import "./Search.css";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function Search() {
  return (
    <div className="SearchBar">
      <div className="tab">
        <h3>ALL</h3>
        <h3>NEW</h3>
        <h3>USED</h3>
      </div>
      <div className="search1">
        <CiSearch className="sicon" />
        <input type="text" placeholder="Search" />
        <select>
          <option>Model</option>
        </select>
        <select>
          <option>Brand</option>
        </select>
      </div>
      <div className="location-thanh">
        <IoLocationOutline className="licon" />
        <input type="text" placeholder="Location" />
        <div className="pricerange">
          <MultiRangeSlider></MultiRangeSlider>
        </div>
        <div className="searchbtn">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
