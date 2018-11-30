var express = require('express');
var router = express.Router();
//var request = require('request');
var https = require('http');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let city = req.query.city;
    console.log('param=' + city);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a07e0e23837f082abc2e2fc0b1d4bef`;
    
    https.get(url, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(data);
        res.send(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });

});

module.exports = router;
