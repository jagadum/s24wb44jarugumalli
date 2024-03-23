var express = require('express');
var router = express.Router();

/* GET grid page. */
router.get('/', function(req, res, next) {
  // Retrieve query parameters
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);

  // Render grid.pug with title and query parameters
  res.render('grid', { title: 'Grid Display', query: query });
});

module.exports = router;
