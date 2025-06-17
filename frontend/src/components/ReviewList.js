import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/reviews/product/${productId}`);
        setReviews(res.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <div className="review-list">
      <h4>Reviews:</h4>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((r, idx) => (
          <div className="review" key={idx}>
            <strong>Rating:</strong> {r.rating} ⭐<br />
            <strong>Review:</strong> {r.review_text || "No text"}<br />
            <small><em>User ID: {r.user_id}</em></small>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
