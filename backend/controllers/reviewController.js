const Review = require('../models/reviewModel');

exports.postReview = async (req, res) => {
  const { user_id, product_id, rating, review_text, image_url } = req.body;

  if (await Review.hasUserReviewed(user_id, product_id)) {
    return res.status(400).json({ error: 'You have already reviewed this product.' });
  }

  await Review.addReview({ user_id, product_id, rating, review_text, image_url });
  res.status(201).json({ message: 'Review submitted successfully.' });
};

exports.getReviews = async (req, res) => {
  const { product_id } = req.params;
  const reviews = await Review.getProductReviews(product_id);
  res.json(reviews);
};
