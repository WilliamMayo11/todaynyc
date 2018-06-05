import React, { Component, Fragment } from 'react';
import '../css/live-cam.css';

let videoArr = [
  "https://www.youtube.com/embed/la90mA4VLa4?autoplay=1&controls=0&showinfo=0&mute=1",
  "https://www.youtube.com/embed/hck5LT3HtVE?autoplay=1&controls=0&showinfo=0mute=1",
  "https://www.youtube.com/embed/xGAseSEdcyc?autoplay=1&controls=0&showinfo=0mute=1"
]
let videoIndex = 0;

class LiveCam extends Component {

  constructor(props) {
  super(props)
  this.state = {
    currentVideo: videoArr[0],
  }
}

  componentDidMount() {
    this.switchVideo()
  }

  switchVideo() {
    setInterval(() => {
      switch (this.state.currentVideo) {
        case "https://www.youtube.com/embed/la90mA4VLa4?autoplay=1&controls=0&showinfo=0":
        console.log('videoIndex: ', videoIndex)
          videoIndex++;
          this.setState({
            currentVideo: videoArr[videoIndex]
          })
          return;
        case "https://www.youtube.com/embed/hck5LT3HtVE?autoplay=1&controls=0&showinfo=0":
        console.log('videoIndex: ', videoIndex)
          videoIndex++;
          this.setState({
            currentVideo: videoArr[videoIndex]
          })
          return;
        case "https://www.youtube.com/embed/xGAseSEdcyc?autoplay=1&controls=0&showinfo=0":
        console.log('videoIndex: ', videoIndex)
          videoIndex = 0;
          this.setState({
            currentVideo: videoArr[videoIndex]
          })
          return videoIndex;
        default:
          videoIndex = 0;
      }
    }, 30000);
  }

  render() {
    return(
      <Fragment>
        <div className="intrinsic-container intrinsic-container-16x9">
          <iframe
            src={this.state.currentVideo}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            modestbranding="0"
          >
          </iframe>
          <div className="transparent"></div>
        </div>
      </Fragment>
    )
  }


}

export default LiveCam;
