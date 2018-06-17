const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config({ silent: true });
var request = require("request");

function getTweets(req, res, next) {

  var options = { method: 'GET',
    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
    qs:
     { screen_name: 'nyctsubway',
       count: '10', // WHEN UPDATING COUNT, RUN IT IN POSTMAN FIRST. THEN COPY/PASTE HERE AND REWRITE HEADERS (DELETE SLASHES AND QUOTES)
       exclude_replies: 'true' },
    headers:
     { 'Postman-Token': '568b74fa-e374-434e-9b9c-17329ebeb1f3',
       'Cache-Control': 'no-cache',
       Authorization: 'OAuth oauth_consumer_key=UG9X0qDgU5h1jjWz5KPMJCVJm,oauth_token=1001284476452921345-WqSMClmQHtYHSflj9MvlPrh3y8XfTn,oauth_signature_method=HMAC-SHA1,oauth_timestamp=1529265473,oauth_nonce=3bc808b5a1daac2a00cd72ede9a4121f,oauth_version=1.0,oauth_signature=wE8ze9labyEJWktNucu6NXvKolg%3D' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    response => response.json()
    console.log('response.body: ', response.body)
    res.data = response.body;
    next();
  });

}


module.exports = {
  getTweets
}
