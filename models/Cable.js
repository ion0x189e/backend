const mongoose = require('mongoose');

const CableSchema = new mongoose.Schema({
  reference: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  nbrconductor: {
    type: Number
  },
  diameter: {
    type: Number
  },
  weight: {
    type: Number
  },
  type: {
    type: String
  },
  insulation: {
    type: String
  },
  conductor: {
    type: String
  },
  voltage: {
    type: String
  },
  applications: {
    type: [String]
  },
  temperature_max: {
    type: Number
  },
  oilResistant: {
    type: Boolean
  },
  pricePerMeter: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cable', CableSchema);