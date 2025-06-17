import React from 'react';
import ReviewList from './ReviewList';

const ProductCard = ({ product, onReview }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <button onClick={() => onReview(product)}>Rate / Review</button>
    
    {/* Show reviews for this product */}
    <ReviewList productId={product.id} />
  </div>
);


export default ProductCard;
