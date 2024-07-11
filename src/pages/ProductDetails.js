// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import dummyData from '../data/dummyData';

const ProductDetails = () => {
  const { id } = useParams();
  const product = dummyData.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;