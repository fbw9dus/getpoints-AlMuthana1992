
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{user: 'fake', password: 'fake'}]);
});

module.exports = router;