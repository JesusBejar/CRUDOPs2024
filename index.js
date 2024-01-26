// index.js

// EXPRESS - installed
const express = require('express');
// MONGOOSE - installed
const mongoose = require('mongoose');
// BODY-PARSER - installed
const bodyParser = require('body-parser');
// SWAGGER-ATUOGEN -installed
const swaggerAutogen = require('swagger-autogen');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sample_airbnb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your REST API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
