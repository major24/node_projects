var express = require('express');
var router = express.Router();
var http = require('http');

// define the home page route
router.get('/api/test', function (req, res) {
    var date = new Date();
    var data = { "data": "From test-api - " + date };
    res.send(data);
});

router.get('/api/html/div', function (req, res) {
    var date = new Date();
    var data = '<div style="background-color:lightgreen;">Data within ctrl</div>';
    res.send(data);
});

module.exports = router;