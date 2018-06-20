class Twitter {

  getTweets() {
    return fetch(`http://todaynyc.us-east-1.elasticbeanstalk.com/twitter`)
  }

}

export default Twitter;
