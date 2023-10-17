// city, state, zip code 

const { Schema } = require('mongoose');

// subdocument schema for user's saved locations
const locationSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  locationId: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
});

module.exports = locationSchema;