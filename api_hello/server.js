var express = require('express');
var app = express();

var data = [
	{
   		"user1" : {
      		"name" : "mahesh",
      		"password" : "password1",
      		"profession" : "teacher",
      		"id": 1
   		},
   		"user2" : {
      		"name" : "suresh",
      		"password" : "password2",
      		"profession" : "librarian",
      		"id": 2
   		}
	}
];

app.get('/', function (req, res) {
   console.log('home');
   res.send('Hello world');
});


app.get('/api/users', function (req, res) {
   console.log('get users..');
   res.send(data);
});

var server = app.listen(3000, function () {
  console.log("Example app listening at http://localhost:3000");
})