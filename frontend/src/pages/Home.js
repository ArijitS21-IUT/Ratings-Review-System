import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ReviewForm from '../components/ReviewForm';

const dummyProducts = [
  { id: 1, name: 'Fitwatch 2' },
  { id: 2, name: 'Fitness Tracker Pro' }
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      {dummyProducts.map(product => (
        <ProductCard key={product.id} product={product} onReview={setSelectedProduct} />
      ))}
      {selectedProduct && <ReviewForm product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default Home;
