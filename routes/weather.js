var express = require('express');
var router = express.Router();
// var fetch = require('node-fetch');

const { getWeather } = require('../models/weather-model');

router.get('/', getWeather, function(req, res, next) {
  res.json(res.data || {});
});

module.exports = router;
