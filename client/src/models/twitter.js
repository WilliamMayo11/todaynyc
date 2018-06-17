class Twitter {

  getTweets() {
    console.log('get tweets client side was hit')
    return fetch(`/tweets`)
  }

}

export default Twitter;
