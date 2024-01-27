const express = require('express');
const router  = express.Router();
const listingsController = require('../controllers/listings');
// const validator = require('../middleware/validate');

// these match with functions in ./controllers/listings.js
// CREATE
router.post('/', listingsController.createListing)
// UPDATE
router.put('/:id', listingsController.updateListing)

module.exports = router;
