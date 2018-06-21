class Twitter {

  getTweets() {
    return fetch(`tweets`)  // http://todaynyc.us-east-1.elasticbeanstalk.com/tweets
  }

}

export default Twitter;
