const req = require('express/lib/request');
const res = require('express/lib/response');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// these match with endpoints in ./routes/contacts.js
const getAllListings = async (req, res) => {
    console.log(mongodb);
    // #swagger.tags=['Contacts']
    const result = await mongodb.getDatabase().db().collection('listingsAndReviews').find().toArray((err, lists) => {
        if (err) {
            res.status(400).json({message:err});
        }
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts);
    }).catch();
};

// CREATE = post
const createListing = async (req, res) => {
    const listingId = new ObjectId(req.params.id);
    // execution
    const listing = {
        listing_url:req.body.listing_url,
        name:req.body.name, 
        summary:req.body.summary,
        space:req.body.space,
        description:req.body.description,
        neighborhood_overview:req.body.neighborhood_overview, 
        notes:req.body.notes,
        transit:req.body.transit,
        access:req.body.access,
        interaction:req.body.interaction,
        house_rules:req.body.house_rules,
        property_type:req.property_type,
        room_type:req.body.room_type,
        bed_type:req.body.bed_type,
        minimum_nights:req.body.minimum_nights,
        maximum_nights:req.body.maximum_nights,
        cancellation_policy:req.body.cancellation_policy,
        last_scraped:req.body.last_scraped,
        calendar_last_scraped:req.body.calendar_last_scraped,
        first_review:req.body.first_review,
        last_review:req.body.last_review,
        accommodates : req.body.accommodates,
        bedrooms: req.body.bedrooms,
        beds:req.body.beds
    };
    const response = await mongodb.getDatabase().db().collection('listingsAndReviews').insertOne({_id: listingId}, listing);
    // execution check
    if(response.modifiedCount > 0){
        res.status(204).send();
    }
    else{
        // 401 = unauthorized
        res.status(401).json(response.error || "You done messed up AAron!");
    }
};
// UPDATE = put
const updateListing = async (req, res) => {
    // execution
    const listingId = new ObjectId(req.params.id);
    const listing = {
        _id:req.body._id,
        listing_url:req.body.listing_url,
        name:req.body.name, 
        summary:req.body.summary,
        space:req.body.space,
        description:req.body.description,
        neighborhood_overview:req.body.neighborhood_overview, 
        notes:req.body.notes,
        transit:req.body.transit,
        access:req.body.access,
        interaction:req.body.interaction,
        house_rules:req.body.house_rules,
        property_type:req.property_type,
        room_type:req.body.room_type,
        bed_type:req.body.bed_type,
        minimum_nights:req.body.minimum_nights,
        maximum_nights:req.body.maximum_nights,
        cancellation_policy:req.body.cancellation_policy,
        last_scraped:req.body.last_scraped,
        calendar_last_scraped:req.body.calendar_last_scraped,
        first_review:req.body.first_review,
        last_review:req.body.last_review,
        accommodates : req.body.accommodates,
        bedrooms: req.body.bedrooms,
        beds:req.body.beds
    };
    const response = await mongodb.getDatabase().db().collection('listingsAndReviews').replaceOne({_id: listingId}, listing);
    // execution check
    if(response.acknowledged > 0){
        res.status(204).send();
    }
    else{
        // 403 = Forbidden
        res.status(403).json(response.error || "You done messed up AAron!");
    }
};

// DELETE = delete
const deleteListing = async (req, res) => {
    // execution
    const listingId = new ObjectId(req.params.id);
    const listing = {
        _id:req.body._id,
        listing_url:req.body.listing_url,
        name:req.body.name, 
        summary:req.body.summary,
        space:req.body.space,
        description:req.body.description,
        neighborhood_overview:req.body.neighborhood_overview, 
        notes:req.body.notes,
        transit:req.body.transit,
        access:req.body.access,
        interaction:req.body.interaction,
        house_rules:req.body.house_rules,
        property_type:req.property_type,
        room_type:req.body.room_type,
        bed_type:req.body.bed_type,
        minimum_nights:req.body.minimum_nights,
        maximum_nights:req.body.maximum_nights,
        cancellation_policy:req.body.cancellation_policy,
        last_scraped:req.body.last_scraped,
        calendar_last_scraped:req.body.calendar_last_scraped,
        first_review:req.body.first_review,
        last_review:req.body.last_review,
        accommodates : req.body.accommodates,
        bedrooms: req.body.bedrooms,
        beds:req.body.beds
    };
    const response = await mongodb.getDatabase().db().collection('listingsAndReviews').deleteOne({_id: listingId});
    // execution check
    if(response.deletedCount > 0){
        res.status(204).send();
    }
    else{
        // 400 = bad request
        res.status(400).json(response.error || "You done messed up AAron!");
    }
};

module.exports = {
    createListing, 
    updateListing, 
    deleteListing, 
    getAllListings
};