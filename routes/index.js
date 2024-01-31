const router = require('express').Router();

router.get('/', (req, res) => {res.send('hola mundo')});
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