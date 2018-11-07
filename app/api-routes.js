let router = require('express').Router();

let orderController = require('./controllers/order.controller');
let articlesController = require('./controllers/articles.controller');
let shmuController = require('./controllers/shmu.controller');
let hydroController = require('./controllers/hydro.controller');

router.get('/', (req, res) => {
  console.log('Req', req);
  res.status(200).json({
    message: 'API is working'
  });
});

router.route('/order')
  .get(orderController.index)
  .post(orderController.new)
  .put(orderController.update)
  .patch(orderController.update)
  .delete(orderController.delete);

router.route('/articles')
  .get(articlesController.index)
  .post(articlesController.new);


router.route('/hydro')
  .get(hydroController.index)
  .post(hydroController.new)
  .patch(hydroController.update)
  .put(hydroController.update)
  .delete(hydroController.delete);

router.route('/shmu')
  .get(shmuController.index);

module.exports = router;