import React, { Component, Fragment } from 'react';
import Twitter from '../models/twitter.js';

class TwitterContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: undefined,
    }
  }

  componentDidMount() {
    const twitter = new Twitter();
    let todayTwitter = twitter.getTweets();
    todayTwitter
      .then(r => r.json())
      .then(data => {
        console.log('twitter data: ', data)
        this.setState({
          onetweet: data[0].text
        })
      })
      .catch(err => console.log(err))
  }



  render() {
    return(
      <Fragment>
        <h1>{this.state.onetweet}</h1>
      </Fragment>
    )
  }

}

export default TwitterContainer;
