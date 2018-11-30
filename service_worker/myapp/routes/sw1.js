var express = require('express');
var router = express.Router();

/* GET todos page. */
router.get('/', function(req, res, next) {
  res.render('sw1', { title: 'Service Worker1' });
});

module.exports = router;