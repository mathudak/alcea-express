const mongoose = require("mongoose");

let hydroSchema = mongoose.Schema({
  trip: {
    type: String,
    required: true
  },
  lsid: {
    type: String,
    required: true
  },
  permanent: {
    type: Boolean,
    required: true
  },
  limitLow: {
    type: Number,
    required: true
  },
  optimalLow: {
    type: Number,
    required: true
  },
  optimalHigh: {
    type: Number,
    required: true
  },
  limitHigh: {
    type: Number,
    required: true
  }
});

let Hydro = module.exports = mongoose.model('hydro', hydroSchema);

module.exports.get = (callback, limit) => {
  Hydro.find(callback).limit(limit);
}