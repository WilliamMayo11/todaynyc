import React, { Component, Fragment } from 'react';
var Twitter = require('twitter');

class TwitterComponent extends Component {
  constructor(props){
    super(props);
  }

componentDidMount() {
  var client = new Twitter({
    consumer_key: 'ZapAoGfsW0DFsV262k537HAIo',
    consumer_secret: 'DIwG08mILz3dB1PjQLbsuuQ5NKgRdoKJztbh9muNXBDSk62cpz',
    access_token_key: '1001284476452921345-3t19HNCTf0qGIQ2szJqG7EqTm3o5lu',
    access_token_secret: '2Ax9SkfFKxpIJaQt6OcMZtMS7nT38ZdpEISOcE8Fg9Siw'
  });
  var params = {screen_name: 'nyctsubway', count: 150, exclude_replies: true};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    console.log('response: ', response);
    if (!error) {
      console.log(tweets);
    }
  });
}

  render() {
    return(
      <p>Twitter</p>
    )
  }

};

export default TwitterComponent
