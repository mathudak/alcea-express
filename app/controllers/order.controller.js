const Order = require('../models/order.model');

exports.index = (req, res) => {
  // console.log('Order "get" request:', req);
  Order.get((err, orders) => {
    if (err) {
      res.status(400).json({
        message: 'Unable to get orders',
        error: err        
      })
    } else {
      res.status(200).json({
        message: 'Orders retreived successfully',
        data: orders
      })
    }
  })
};

exports.new = (req, res) => {
  console.log('Oder "new" request:', req.body);
  let order = new Order({
    ...req.body
  });
  console.log('Order', order);
  order.save((err) => {
    if (err) {
      res.status(400).json({
        message: 'Failed to save new order',
        error: err        
      });
    } else {
      res.status(200).json({
        message: 'New order created',
        data: order
      });
    }
  });
}

exports.update = (req, res) => {
  // console.log(req)  
  // console.log('Order "update" query:', req.query);
  Order.findById(req.query.order_id, (err, order) => {
    console.log(err, order);
    if (err) {
      res.status(400).json({
        message: `Order with ID: ${req.params.order_id} does not exist`,
        error: err        
      });
    } else {
      order.set({
        ...order,
        ...req.body
      });
      // console.log("Order update:", order);
      order.save((err) => {
        if (err) {
          res.status(400).json({
            message: `Failed to update order with ID: ${order._id}`,
            error: err            
          })
        } else {
          res.status(200).json({
            message: 'Order updated',
            data: order
          })
        }
      });
    }
  });
}

exports.delete = (req, res) => {
  Order.deleteOne({ _id: req.query.order_id}, (err) => {
    if (err) {
      res.status(400).json({
        message: `Failed to delete Order with ID: ${req.query.order_id}`,
        error: err
      });
    } else {
      res.status(200).json({
        message: `Deleted Order with ID: ${req.query.order_id}`
      });
    }
  });
}