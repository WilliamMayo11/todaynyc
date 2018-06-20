const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config({ silent: true });

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

function getWeather(req, res, next) {
  fetch(`${WEATHER_API_URL}id=${'5128638'}&units=imperial&APPID=${WEATHER_API_KEY}`)
  .then(r => r.json())
  .then(data => {
    res.data = data;
    next();
  })
  .catch(err => {
      console.log(err)
      next(err)
  })
}

module.exports = {
  getWeather
}
