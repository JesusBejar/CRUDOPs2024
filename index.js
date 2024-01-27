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
// app.use(bodyParser.json());
// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/sample_airbnb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// checks for traffic in routes/index.js
app.use('/', require('../routes/index'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
