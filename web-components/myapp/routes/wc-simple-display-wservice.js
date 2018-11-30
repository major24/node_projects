var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('wc-simple-display-wservice', { title: 'WebComponents-simple-display-wservice' });
});

module.exports = router;