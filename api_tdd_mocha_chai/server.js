var express = require('express');
var bodyParser = require('body-parser');  // to get json data

var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// simple get on port
app.get('/', function (req, res) {
   //console.log('home');
   res.status(200).json({"message": "welcome to api test with mocha."}); //'Hello to api test with mocha and chai');
});


// return json data (sample data)
app.get('/api/simple-array', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   var data = ["Apple", "Starberry", "Orange"];
   res.status(200).json({"fruits": data});
});



app.post('/api/add', function (req, res) {
   //console.log('add two numbers function');
   res.setHeader('Content-Type', 'application/json');
   var num1 = req.body.num1;
   var num2 = req.body.num2;
   //console.log(num1 + num2);
   var sum = num1 + num2;
   res.status(200).json({"sum": sum});
});


// long running request
app.get('/api/long-running-request', function (req, res) {
	setTimeout(function(){
		res.status(200).json({"message": "done - long running process"}); 
	}, 500);
   
});



var server = app.listen(3000, function () {
  console.log("Example app listening at http://localhost:3000");
})