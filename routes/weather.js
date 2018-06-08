var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

const { getWeather } = require('../models/weather-model');

/* GET users listing. */
router.get('/', getWeather, function(req, res, next) {
  console.log('wether router working');
  res.json(res.data || {});
});

module.exports = router;
