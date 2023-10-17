// name of illness

const { Schema, model } = require('mongoose');

// used to map through on questionnaire component
const illnessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  illnessId: {
    type: String,
    required: true,
  },
  effectOnUser: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
});

const Illness = model('Illness', illnessSchema);

module.exports = illnessSchema;