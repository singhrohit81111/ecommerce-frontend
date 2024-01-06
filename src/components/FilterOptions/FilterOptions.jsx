// FilterOptions.js
import React from "react";
import './FilterOptions.css';

const FilterOptions = ({ onFilterChange }) => {
  return (
    <div className="filter-options">
      <h2>Filter Options</h2>
      <label>
        Size:
        <select onChange={(e) =>{ onFilterChange("size", e.target.value);console.log(e.target.value);}}>
          <option value="">All</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <br />
      <label>
        Price:
        <select onChange={(e) => onFilterChange("price", e.target.value)}>
          <option value="">All</option>
          <option value="0-1500">Rs.0-Rs.1500</option>
          <option value="1500-2500">Rs.1500-Rs.2500</option>
          <option value="2500-5000">Rs.2500-Rs.5000</option>
        </select>
      </label>
    </div>
  );
};

export default FilterOptions;
