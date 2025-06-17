const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const validateInput = require('../middleware/validateInput');

router.post('/submit', validateInput, reviewController.postReview);
router.get('/product/:product_id', reviewController.getReviews);

module.exports = router;

