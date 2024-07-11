// src/components/Filters.js
import React from 'react';

const Filters = ({ filters, handleFilterChange, handleSortChange }) => {
  return (
    <div className="filters">
      <input type="text" name="category" placeholder="Category" value={filters.category} onChange={handleFilterChange} />
      <input type="text" name="company" placeholder="Company" value={filters.company} onChange={handleFilterChange} />
      <input type="text" name="rating" placeholder="Rating" value={filters.rating} onChange={handleFilterChange} />
      <input type="text" name="priceRange" placeholder="Price Range" value={filters.priceRange} onChange={handleFilterChange} />
      <input type="text" name="availability" placeholder="Availability" value={filters.availability} onChange={handleFilterChange} />
      <select name="sort" onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default Filters;