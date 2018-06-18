class Twitter {

  getTweets() {
    return fetch(`/tweets`)
  }

}

export default Twitter;
