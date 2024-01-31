const express = require('express');
const router  = express.Router();
const listingsController = require('../controllers/listings');
// authentication code found in authenticate.js & index.js
const { isAuthenticated } = require('authenticate.js')
// const validator = require('../middleware/validate');

// these match with functions in ./controllers/listings.js
// GET ALL
router.get('/', listingsController.getAllListings);
// CREATE
router.post('/', isAuthenticated, listingsController.createListing)
// UPDATE
router.put('/:id', isAuthenticated, listingsController.updateListing)
// DELETE
router.delete('/', isAuthenticated, listingsController.deleteListing)

module.exports = router;