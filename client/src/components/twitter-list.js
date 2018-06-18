import React, { Component, Fragment } from 'react';

class TwitterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderTweets() {
    return this.props.tweets.map((tweet, i) => {
      return <p>{tweet.text}</p>
    })
  }

  render() {
    return(
      <Fragment>
        {this.renderTweets()}
      </Fragment>
    )
  }

}

export default TwitterList;
