var express = require('express');
var app = express();

var products = [
   {
      "vegetables":[
         {"name": "cucumber", "price": 2.66},
         {"name": "soya firm pck", "price": 5.99}
      ],

      "fruits":[
         {"name": "apple", "price": 1.58},
         {"name": "orange", "price": 0.87}
      ]
   }
];

app.all('/api/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function (req, res) {
   console.log('home');
   res.send('Home-products api - /api/products');
});


app.get('/api/products', function (req, res) {
   console.log('get products..');
   var date = new Date();
   var data = { "data": "From PRODUCTS MS-api - " + date }
   res.send(data);
});

var server = app.listen(3002, function () {
  console.log("Example app listening at http://localhost:3002");
})