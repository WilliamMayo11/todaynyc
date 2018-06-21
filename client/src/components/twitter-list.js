import React, { Component, Fragment } from 'react';
import '../css/twitter.css'

class TwitterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderTweets() {
    return this.props.tweets.map((tweet, i) => {
      return <div className="card">
        <p>{tweet.full_text}</p>
      </div>
    })
  }

  render() {
    return(
      <Fragment>
        <div className="card-container">
          {this.renderTweets()}
        </div>
      </Fragment>
    )
  }
}

export default TwitterList;
