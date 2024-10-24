import React from "react";
import "../Css/Search.css";
import { CiSearch } from "react-icons/ci";

function Search({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <div>
        <CiSearch className="searchIcon1" />
        <div>
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
