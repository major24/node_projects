var express = require('express');
var app = express();

var sampleData = {
   "vehicles": [
      {"id": "1", "brand": "Honda"},
      {"id": "2", "brand": "Toyota"}
   ] 
};

//app.all('/api/*', function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //next();
 //});

app.get('/', function (req, res) {
   console.log('home');
   res.send('Home-vehicles api - /api/vehicles');
});

app.get('/api/test', function (req, res) {
   console.log('get customers api test');
   var date = new Date();
   var data = { "data": "From vehicles MS-api - " + date }
   res.send(data);
});

app.get('/api/vehicles', function (req, res) {
   console.log('get vehicles..');
   var data = { "data": sampleData };
   res.send(data);
});

var server = app.listen(3002, function () {
  console.log("Example app listening at http://localhost:3002");
})