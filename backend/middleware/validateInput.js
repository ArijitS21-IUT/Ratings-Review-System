module.exports = (req, res, next) => {
  const { user_id, product_id, rating, review_text } = req.body;

  if (!user_id || !product_id) {
    return res.status(400).json({ error: "User ID and Product ID are required." });
  }

  if (rating !== undefined) {
    const r = Number(rating);
    if (isNaN(r) || r < 1 || r > 5) {
      return res.status(400).json({ error: "Rating must be a number between 1 and 5." });
    }
  }

  if (review_text && review_text.length > 1000) {
    return res.status(400).json({ error: "Review is too long. Max 1000 characters." });
  }

  next();
};
