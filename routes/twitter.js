var express = require('express');
var router = express.Router();
const { getTweets } = require('../models/twitter-model');

/* GET users listing. */
router.get('/', getTweets, function(req, res, next) {
  res.json(res.data || {});
});

module.exports = router;
