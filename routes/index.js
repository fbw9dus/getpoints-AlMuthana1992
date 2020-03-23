var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var hi = 'Server funktioniert'
  res.status(200).send(hi);
});

module.exports = router;       