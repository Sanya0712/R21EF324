// src/pages/AllProducts.js
import React, { useState } from 'react';
import dummyData from '../data/dummyData';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

const AllProducts = () => {
  const [products, setProducts] = useState(dummyData);
  const [filters, setFilters] = useState({ category: '', company: '', rating: '', priceRange: '', availability: '' });
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filteredProducts = products
    .filter(product => 
      (!filters.category || product.category === filters.category) &&
      (!filters.company || product.company === filters.company) &&
      (!filters.rating || product.rating >= filters.rating) &&
      (!filters.priceRange || product.price <= filters.priceRange) &&
      (!filters.availability || product.availability === filters.availability)
    )
    .sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'discount') return b.discount - a.discount;
      return 0;
    });

  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <h1>All Products</h1>
      <Filters filters={filters} handleFilterChange={handleFilterChange} handleSortChange={handleSortChange} />
      <div className="products-grid">
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={Math.ceil(filteredProducts.length / itemsPerPage)} handlePageChange={handlePageChange} />
    </div>
  );
};

export default AllProducts;