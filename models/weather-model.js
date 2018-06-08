const express = require('express');
// const Router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config({ silent: true });

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

function getWeather(req, res, next) {
  console.log('weather api key: ', process.env.WEATHER_API_KEY)
  fetch(`${WEATHER_API_URL}q=${'new york'}&units=imperial&APPID=${WEATHER_API_KEY}`)
  .then(r => r.json())
  .then(data => {
    console.log('weather back', data);
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
