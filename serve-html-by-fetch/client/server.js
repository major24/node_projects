var express = require('express');
var app = express();
var path = require('path');

var headerRouter = require('./header-router');
var addressControlsRouter = require('./address-controls-router');

// static contents..
app.use(express.static('public'))
// additional routes
app.use('/', headerRouter);
app.use('/', addressControlsRouter);

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log('staring at http://localhost:8080');

app.listen(8080);