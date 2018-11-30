var express = require('express');
var router = express.Router();

/* GET todos page. */
router.get('/', function(req, res, next) {
  res.render('todos', { title: 'ToDos' });
});

module.exports = router;