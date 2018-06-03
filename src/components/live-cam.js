import React, { Component, Fragment } from 'react';
import '../css/live-cam.css';

class LiveCam extends Component {

  constructor(props) {
  super(props)
  this.state = {

  }
}

  render() {
    return(
      <Fragment>
        <div class="intrinsic-container intrinsic-container-16x9">
          <iframe
            src="https://www.youtube.com/embed/la90mA4VLa4?autoplay=1&controls=0&showinfo=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            modestbranding="0"
          >
          </iframe>
        </div>
      </Fragment>
    )
  }


}

export default LiveCam;
