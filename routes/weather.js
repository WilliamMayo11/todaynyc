var express = require('express');
var router = express.Router();
// var fetch = require('node-fetch');

const { getCurrentWeather, getWeatherForecast } = require('../models/weather-model');

router.get('/', getCurrentWeather, function(req, res, next) {
  res.json(res.data || {});
});

router.get('/forecast', getWeatherForecast, function(req, res, next) {
  res.json(res.data || {});
});

module.exports = router;
