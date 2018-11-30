var express = require('express');
var app = express();

var sampleData = {
   "customers": [
      {"id": "1", "name": "major"},
      {"id": "2", "name": "steve"},
      {"id": "3", "name": "james"}
   ] 
}

//app.all('/api/customers/*', function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //next();
 //});

app.get('/', function (req, res) {
   console.log('home');
   res.send('Hello world-user api  /api/..');
});


app.get('/api/test', function (req, res) {
   console.log('get customers api test');
   var date = new Date();
   var data = { "data": "From customers MS-api - " + date }
   res.send(data);
});

app.get('/api/customers', function (req, res) {
   console.log('get customers..');
   var data = { "data": sampleData };
   res.send(data);
});


app.get('/api/customers/:id', function (req, res) {
   var custId = req.params.id;
   console.log('get customer by id' + custId);
   var cust = {};
  sampleData.customers.forEach(function(element){
      if (element.id == custId){
        cust = element;
        return;
      }
   });
   var data = { "data": cust}
   res.send(data);
});





var server = app.listen(3001, function () {
  console.log("Example app listening at http://localhost:3001");
})