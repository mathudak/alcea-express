const Shmu = require('./shmu.controller');
const Hydro = require('../models/hydro.model');

exports.index = (req, res) => {
  Hydro.get((err, hydro) => {
    if (err) {
      res.status(400).json({
        message: 'Unable to get hydro data',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Hydro retrieved successfully',
        data: hydro
      });
    }
  });
};

exports.new = (req, res) => {
  console.log('New "hydro" request:', req.body)
  let hydro = new Hydro({
    ...req.body
  });
  hydro.save((err) => {
    if (err) {
      res.status(400).json({
        message: 'Failed to save new Hydro',
        errorr: err
      });
    } else {
      res.status(200).json({
        message: 'New hydro created',
        data: hydro
      });
    }
  });
};

exports.update = (req, res) => {  
  Hydro.findByIdAndUpdate(req.query.hydro_id, { $set: { ...req.body }}, (err) => {
    if (err) {
      res.status(400).json({
        message: `Hydro with ID: ${req.query.hydro_id} does not exist`,
        error: err        
      });
    } else {
      res.status(200).json({
        message: 'Upo-dato successfullo admino-san'
      });
    }
  });
}


exports.delete = (req, res) => {
  Hydro.deleteOne({ _id: req.query.hydro_id}, (err) => {
    if (err) {
      res.status(400).json({
        message: `Failed to delete hydro with ID: ${req.query.hydro_id}`,
        error: err
      });
    } else {
      res.status(200).json({
        message: `Deleted hydro with ID: ${req.query.hydro_id}`
      });
    }
  });
}