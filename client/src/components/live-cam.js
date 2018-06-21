import React, { Component, Fragment } from 'react';
import '../css/live-cam.css';

class LiveCam extends Component {

  constructor(props) {
  super(props)
  this.state = {}
}


  render() {
    return(
      <Fragment>
        <div>
          <div className="intrinsic-container intrinsic-container-16x9">
            <iframe
              src="https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              modestbranding="0"
              title="live cam"
            >
            </iframe>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default LiveCam;
