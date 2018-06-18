import React, { Component, Fragment } from 'react';
import Twitter from '../models/twitter.js';
import TwitterList from './twitter-list.js'

class TwitterContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
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
      // this.renderTweets()
  }


  render() {
    return(
      <Fragment>
        <TwitterList
          tweets={this.state.tweets}
        />
      </Fragment>
    )
  }

}

export default TwitterContainer;
