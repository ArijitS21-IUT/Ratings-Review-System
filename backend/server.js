const express = require('express');
const app = require('./app');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();



app.use(cors());
app.use(bodyParser.json());

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
