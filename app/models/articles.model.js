const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  perex: {
    type: String,
    required: true
  },
  paragraphs: {
    type: [{
      style: {
        type: String,
      },
      text: {
        type: String,
        required: true
      },
      pictures: {
        type: [String]
      }
    }],
    required: true
  }
});

let Article = module.exports = mongoose.model('article', articleSchema);

module.exports.get = (callback, limit) => {
  Article.find(callback).limit(limit);
}