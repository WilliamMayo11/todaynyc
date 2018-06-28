import React, { Component, Fragment } from 'react';
import LiveButton from './live-button.js';
import YouTube from 'react-youtube';

import '../css/live-button.css';
import '../css/live-cam.css';

let _this;

class LiveCam extends Component {

  constructor(props) {
  super(props)
  this.state = {
    messageVisible: true
  }
  _this = this;
}

// _onReady(event) {
//    // access to player in all event handlers via event.target
//    event.target.pauseVideo();
//  }

toggleMessageOn() {
  _this.setState({
    messageVisible: true
  })
}

toggleMessageOff() {
  _this.setState({
    messageVisible: false
  })
}

transparentDiv() {
  if (!_this.state.messageVisible) {
    return (
      <div className="transparent"></div>
    )
  } else {
      return null
  }
}

  render() {
    const opts = {
      playerVars: {
        frameBorder: "0",
        modestbranding: "0",
        controls: "0",
        showinfo: "0",
        playsinline: "1",
        rel: "0"
      }
    }

    return(
      <Fragment>
        <div>
          <div className="intrinsic-container intrinsic-container-16x9">
            <YouTube
              videoId="la90mA4VLa4"
              opts={opts}
              onPlay={_this.toggleMessageOff}
              onPause={_this.toggleMessageOn}
            />
            <LiveButton
              messageVisible={_this.state.messageVisible}
            />
            {_this.transparentDiv()}
          </div>
        </div>
      </Fragment>
    )
  }

}

export default LiveCam;
