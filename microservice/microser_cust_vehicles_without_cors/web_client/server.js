var express = require('express');
var path = require('path');
var app = express();

var customersRouter = require('./customers-router');

var vehiclesRouter = require('./vehicles-router');


// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'static_files')));

// additional routes
app.use('/', customersRouter);
app.use('/', vehiclesRouter);


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('running at localhost:' + port);
});

