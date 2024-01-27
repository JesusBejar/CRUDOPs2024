const dotenv = require('dotenv');
// where is dotenv
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

// function below initializes the db
const initDb = (callback) => {
    if(database){
        console.log('database is initialized');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err);
    })
};
// function below checks if database if not initialized
const getDatabase = () => {
    if(!database){
        throw Error('database is not initialized');
    }
    return database;
};

module.exports = {
    initDb, 
    getDatabase
};