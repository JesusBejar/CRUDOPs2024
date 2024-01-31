const express = require('express');
// MONGOOSE - installed
const mongoose = require('mongoose');
// BODY-PARSER - installed
const bodyParser = require('body-parser');
// SWAGGER-ATUOGEN -installed
const swaggerAutogen = require('swagger-autogen');
// PASSPORT - installed
const passport = require('passport');
// EXPRESS SESSION - installed
const sess = require('express-session');
// GITHUB PASSPORT - installed
const GithubStrategy = require('passport-github2').Strategy;
// CORS - installed
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app
  .use(bodyParser.json())
  .use(session({
    secret:'cookie1234',
    save: false,
    saveUninitialized: true, 
  }))
  // basic express inicialization
  .use(passport.initialize())
  // init passport on every route call
  .use(passport.session())
  // let passport use express-session
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
    })
  .use("/", require('./routes/index.js'))

// checks for traffic in routes/index.js
app.use('/', require('./routes'));

// Start the server
mongoDB.initDb((err, mongoDB) => {
  if (err) {
    console.log(err)
  }
  else {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
})

