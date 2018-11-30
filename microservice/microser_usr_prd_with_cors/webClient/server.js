var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'static_files')));


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('running at localhost:' + port);
});




/*
// ** test api on same domain to see if works before accessing cross domain **
app.all('/api/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

// test api on same domain
app.get('/api/test', function (req, res) {
   console.log('get test..');
   //res.send(data);
   res.send({"dt":"test"});
});

*/