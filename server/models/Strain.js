// strain name, strain id, image, description, link, type(sativa, indica, hybrid), flavor, recommended for illnesses(array of illnesses)

const { Schema, model } = require('mongoose');

// both subdocument schema for user's saved strains but also used to map through on result component
const strainSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  strainId: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  illness: {
      type: String,
      required: true,
    },
});

const Strain = model('Strain', strainSchema);

module.exports = strainSchema;