const express = require('express');
const Router = express.Router();
const Twitter = require('twitter');
require('dotenv').config({ silent: true });

let client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

function getTweets(req, res, next) {

  let params = {screen_name: 'nyctsubway', count: 150, exclude_replies: true, tweet_mode: 'extended'};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.data = tweets;
      next();
    }
  })
}


module.exports = {
  getTweets
}








// const express = require('express');
// const Router = express.Router();
// const fetch = require('node-fetch');
// require('dotenv').config({ silent: true });
// var request = require("request");
//
// let OAUTH_CONSUMER_KEY = process.env.OAUTH_CONSUMER_KEY;
// let OAUTH_TOKEN = process.env.OAUTH_TOKEN;
// let OAUTH_SIGNATURE = process.env.OAUTH_SIGNATURE;
// let POSTMAN_TOKEN = process.env.POSTMAN_TOKEN;
//
// // POSTMAN TOKEN 568b74fa-e374-434e-9b9c-17329ebeb1f3
//
// function getTweets(req, res, next) {
//
//   var options = { method: 'GET',
//     url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
//     qs:
//      { screen_name: 'nyctsubway',
//        count: '150', // WHEN UPDATING COUNT, RUN IT IN POSTMAN FIRST. THEN COPY/PASTE HERE AND REWRITE HEADERS (DELETE SLASHES AND QUOTES)
//        exclude_replies: 'true' },
//     headers:
//      { 'Postman-Token': `${POSTMAN_TOKEN}`,
//        'Cache-Control': 'no-cache',
//        Authorization: `OAuth oauth_consumer_key=${OAUTH_CONSUMER_KEY},oauth_token=${OAUTH_TOKEN},oauth_signature_method=HMAC-SHA1,oauth_timestamp=1529281648,oauth_nonce=3bc808b5a1daac2a00cd72ede9a4121f,oauth_version=1.0,oauth_signature=${OAUTH_SIGNATURE}` } };
//
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
    // res.data = response;
//     next();
//   });
//
// }
//
//
// module.exports = {
//   getTweets
// }
