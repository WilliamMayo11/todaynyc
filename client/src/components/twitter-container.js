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
        console.log('twitter data: ', JSON.parse(data.body))
        this.setState({
          tweets: JSON.parse(data.body)
        })
      })
      .catch(err => console.log(err))
      this.renderTweets()
  }

  renderTweets() {
    return this.state.tweets.map((tweet, i) => {
      return <p>{tweet.text}</p>
    })
  }


  render() {
    return(
      <Fragment>
        <h1>tweets</h1>
        {this.renderTweets()}
      </Fragment>
    )
  }

}

export default TwitterContainer;
