const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const passport = require('passport');
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));
// router.get('/', (req, res) => {res.send('hola mundo')});
router.use ('/listings', require('./listings'))

// log in
router.get('/login', passport.authenticate('github'), (req, res) => {});

// log out
router.get('/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router;