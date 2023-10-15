// strain name, strain id, image, description, link, type(sativa, indica, hybrid), flavor, recommended for illnesses(array of illnesses)

const { Schema, model } = require('mongoose');

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
    required: true,
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
  flavor: {
    type: String, 
    required: true,
  },
  illnesses: [
    {
      type: String,
      required: true,
    },
  ],
});

const Strains = model('Strain', strainSchema);

module.exports = strainSchema;