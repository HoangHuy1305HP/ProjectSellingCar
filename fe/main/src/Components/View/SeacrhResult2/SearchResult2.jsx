import React, { useState } from "react";
import FilterSidebar from "../../FilterSidebar";
import Search from "../../Search";
import Result2 from "../../Result2/Result2";
import SearchResult from "../../SearchResult/SearchResult";
import Content from "../Content/Content";
import Page from "../../Page/Page";
import Header from "../../Header/Header";
import Footer from "../../../componentOfThanh/Footer";
const SearchResult2 = () => {
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

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header />
      <Content title="New Cars" description="Homepage - New Cars" />
      <main style={{ display: "flex", background: "black" }}>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div style={{ display: "flex", flexDirection: "column", margin: "148px" }}>
          <Search onSearch={handleSearch} />
          <Result2 />
          <SearchResult filters={filters} searchTerm={searchTerm} />
          
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SearchResult2;