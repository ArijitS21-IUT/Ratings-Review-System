const db = require('./db');

exports.addReview = async ({ user_id, product_id, rating, review_text, image_url }) => {
  const [rows] = await db.query(
    'INSERT INTO reviews (user_id, product_id, rating, review_text, image_url) VALUES (?, ?, ?, ?, ?)',
    [user_id, product_id, rating, review_text, image_url]
  );
  return rows;
};

exports.getProductReviews = async (product_id) => {
  const [rows] = await db.query(
    'SELECT * FROM reviews WHERE product_id = ?',
    [product_id]
  );
  return rows;
};

exports.hasUserReviewed = async (user_id, product_id) => {
  const [rows] = await db.query(
    'SELECT COUNT(*) as count FROM reviews WHERE user_id = ? AND product_id = ?',
    [user_id, product_id]
  );
  return rows[0].count > 0;
};
