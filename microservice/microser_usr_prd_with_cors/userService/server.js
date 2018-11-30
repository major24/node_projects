var express = require('express');
var app = express();

var data = {
   "users": [
      {"user": "mn24", "name": "major"},
      {"user": "mn77", "name": "steve"}
   ] 
}


app.all('/api/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function (req, res) {
   console.log('home');
   res.send('Hello world-user api  /api/users');
});


app.get('/api/users', function (req, res) {
   console.log('get users..');
   var date = new Date();
   var data = { "data": "From USERS MS-api - " + date }
   res.send(data);
});

var server = app.listen(3001, function () {
  console.log("Example app listening at http://localhost:3001");
})