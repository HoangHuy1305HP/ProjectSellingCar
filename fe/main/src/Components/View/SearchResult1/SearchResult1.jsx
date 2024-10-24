import React, {useState} from 'react';
import Content from '../Content/Content';
import FilterSidebar from '../../FilterSidebar';
import Search from '../../Search';
import Result2 from '../../Result2/Result2';
import CarList3 from '../../Card3/CarList3';
import Page from '../../Page/Page';
import Header from '../../Header/Header';
const SearchResult1 = () => {
  
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
        <div
          style={{ display: "flex", flexDirection: "column", margin: "148px" }}
        >
          <Search onSearch={handleSearch} />
          <Result2 />
          <CarList3 filters={filters} searchTerm={searchTerm} />
          <Page />
        </div>
      </main>
        </div>
    );
}

export default SearchResult1;
