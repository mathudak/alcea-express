const Article = require('../models/articles.model');

exports.index = (req, res) => {
  console.log('Req query:', req.query);
  Article.get((err, articles) => {
    if (err) {
      res.status(400).json({
        message: 'Unable to get articles',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Articles retreived successfully',
        data: articles
      });
    }
  });
}

exports.new = (req, res) => {
  let article = new Article({
    ...req.body
  });
  article.save((err) => {
    if (err) {
      res.status(400).json({
        message: 'Failed to save new article',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'New article added',
        data: article
      })
    }
  });
}

exports.update = (req, res) => {
  Article.findByIdAndUpdate(req.query.article_id, Art)
}