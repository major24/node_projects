
var express = require('express');
var router = express.Router();
var http = require('http');

var HOST = 'localhost';
var PORT = '3002';
var GET  = 'GET';
var POST = 'POST';

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// define the home page route
router.get('/', function (req, res) {
  res.send('vehicles home. use /api/* to get data');
});



router.get('/vehicles/test', function (req, res) {
  var httpOpts = {  
    host: HOST,
      port: PORT,
      path: '/api/test',
      method: GET
  };

  doAjax(req, res, httpOpts);
});

router.get('/vehicles', function (req, res) {
  var httpOpts = {  
      host: HOST,
      port: PORT,
      path: '/api/vehicles',
      method: GET
  };

  doAjax(req, res, httpOpts);
});

// Get single customer
router.get('/api/vehicles/:id', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   var custId = req.params.id;
   var httpOpts = {
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



















//-----------------------------------------------------------------------------------------------------------------------







// Get all customers
var extVehiApiOpts = {
	host: 'localhost',
    port: '3002',
    path: '/api/vehicles',
    method: 'GET'
};

router.get('/api/vehicles', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   
   var respData = '';
   http.request(extVehiApiOpts, function(extRes){
   		extRes.setEncoding('utf-8');
   		extRes.on('data', function(data){
   			//console.log('here..');
   			respData += data;   // collect data from ext api
   		});

   		extRes.on('end', function(){
   			res.status(200).json(respData);
   		});
   }).end();

});
//--------------------------------------------------------------------------------------------





module.exports = router;