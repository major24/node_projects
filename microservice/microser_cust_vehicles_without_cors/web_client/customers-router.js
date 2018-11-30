
var express = require('express');
var router = express.Router();
var http = require('http');

var HOST = 'localhost';
var PORT = '3001';
var GET  = 'GET';
var POST = 'POST';

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// define the home page route
router.get('/', function (req, res) {
  res.send('Customers home. use /api/* to get data');
});


router.get('/api/customer-domain/test', function (req, res) {
	var httpOpts = {	
		host: HOST,
    	port: PORT,
    	path: '/api/test',
    	method: GET
	};

	doAjax(req, res, httpOpts);
});

router.get('/api/customers', function (req, res) {
	var httpOpts = {	
		host: HOST,
    	port: PORT,
    	path: '/api/customers',
    	method: GET
	};

	doAjax(req, res, httpOpts);
});

// Get single customer
router.get('/api/customers/:id', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   var custId = req.params.id;
   var 	httpOpts = {
		host: HOST,
    	port: PORT,
    	path: '/api/customers/' + custId,
        method: GET
	};

	doAjax(req, res, httpOpts);
});
//--------------------------------------------------------------------------------------------



// Generic ftn
function doAjax(req, res, httpOpts){
   var respData = '';
   http.request(httpOpts, function(extRes){
   		//extRes.setHeader('Content-Type', 'application/json');
   		extRes.setEncoding('utf-8');
   		extRes.on('data', function(data){
   			respData += data;   // collect data from ext api
   		});

   		extRes.on('end', function(){
   			res.status(200).json(respData);
   		});
   }).end();
}


module.exports = router;