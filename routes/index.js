const express = require('express');
const router  = express.Router();
const listingsController = require('../controllers/lisitings');
// const validator = require('../middleware/validate');

// these match with functions in ./controllers/listing.js
// CREATE
router.post('/', listingsController.createListing)
// UPDATE
router.put('/:id', listingsController.updateListing)

module.exports = router;
