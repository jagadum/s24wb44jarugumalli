var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('randomitem', { title: 'A Random item' });
});

module.exports = router;