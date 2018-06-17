var express = require('express');
var router = express.Router();
const { getTweets } = require('../models/twitter-model');

/* GET users listing. */
router.get('/', getTweets, function(req, res, next) {
  // console.log('****************twitter route res.data: :', res.json(res.data))
  res.json(res.body || {});
});

module.exports = router;
