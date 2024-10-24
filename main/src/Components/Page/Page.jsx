import React, { useState } from "react";
import "./Page.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // You can dynamically set this value based on your data

  return (
    <div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Page;