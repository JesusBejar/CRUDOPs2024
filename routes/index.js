const router = require('express').Router();

router.get('/', (req, res) => {res.send('hola mundo')});
router.use ('/listings', require('./listings'))

module.exports = router;