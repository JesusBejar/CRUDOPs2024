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
  .use('/', require('./routes'))
  .use(cors({methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}))
  .use(cors({ origin: '*'}))
  .use('/', require('./routes/index.js'));

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
function(acessToken, refreshToken, profile, done) {
  return done(null, profile);
}))

// passport OAuth code below
passport.serializeUser((user, done) => {
  done(null, user)
});
passport.deserializeUser((user, done) => {
  done(null, user)
});

app.get('/', (req, res) => { res.send(req.session.user !== undefined ? `logged in as ${req.session.user.displayName}` : 'Logged Out')});

app.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/api-docs', session: false}),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  });

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

