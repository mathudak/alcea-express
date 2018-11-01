const mongoose = require('mongoose');

let orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  startPlace: {
    type: String,
    required: true
  },
  startDateTime: {
    type: Number,
    required: true
  },
  endPlace: {
    type: String,
    required: true
  },
  endDatTime: {
    type: String,
    required: true
  },
  canoeVydra: {
    type: Number,
  },
  canoePalava: {
    type: Number,
  },
  itemPaddle: {
    type: Number
  },
  itemVest: {
    type: Number
  },
  itemKidsVest: {
    type: Number
  },
  itemBarrel: {
    type: Number
  },
  itemChain: {
    type: Boolean
  }
})

let Order = module.exports = mongoose.model('order', orderSchema);

module.exports.get = (callback, limit) => {
  Order.find(callback).limit(limit);
}