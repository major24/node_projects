var http = require('http');

var employees = [
	{id: 1, name: 'Steve Rocker'},
	{id: 2, name: 'Reyhan Smith'}
];

// test debug
var sum = 0;
for(var i = 0; i < 3; i++){
	sum = sum++;
}

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(employees));
}).listen(3000);

console.log('server starting at port 3000');