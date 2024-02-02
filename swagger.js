const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Airbnb Listings API",
        description: "Made 2024 in the CSE341 class"
    },
    // 2nd port (the 1st is in server.js)
    // host: "locahost:3001",
    host: "localhost:3010",
    // adding ['http'] here makes the app unsecure??
    schemes: ["http"]
};
const outputfile = './swagger.json';
const endpointsfile = ['./routes/index.js'];

swaggerAutogen(outputfile, endpointsfile, doc);