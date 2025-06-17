import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ product, onClose }) => {
  const [rating, setRating] = useState(0);
  const [review_text, setReview] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/reviews/submit', {
        user_id: 1,
        product_id: product.id,
        rating,
        review_text,
        image_url: null
      });
      onClose();
    } catch (err) {
      alert(err.response?.data?.error || "Error submitting review");
    }
  };

  return (
    <div className="review-form">
  <h4>Review: {product.name}</h4>
  <input
    type="number"
    min="1"
    max="5"
    value={rating}
    onChange={e => setRating(e.target.value)}
    placeholder="Rating (1 to 5)"
  />
  <textarea
    value={review_text}
    onChange={e => setReview(e.target.value)}
    placeholder="Write your review here..."
  />
  <button onClick={handleSubmit}>Submit</button>
  <button onClick={onClose} style={{ marginLeft: '10px', backgroundColor: '#6c757d' }}>Cancel</button>
</div>

  );
};

export default ReviewForm;
