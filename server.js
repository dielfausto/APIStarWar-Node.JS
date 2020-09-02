var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./src/models/model'),
  bodyParser = require('body-parser');

const cors = require("cors");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apib2w', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./src/routes/routes');
routes(app);

app.listen(port);

console.log('API server started on: ' + port);