let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
require('dotenv').config();

// MongoDB connection via mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
let db = mongoose.connection;
// console.log('DB:', db);

// Default Express setup with routing
// const apiRoutes = require('./api-routes');

let app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    messsage: 'Hello Alcea user'
  });
});

// app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
})