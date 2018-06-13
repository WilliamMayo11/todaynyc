import React, { Component, Fragment } from 'react';
import '../css/live-cam.css';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// let videoArr = [
//   "https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1",
//   "https://www.youtube.com/embed/hck5LT3HtVE?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1",
//   "https://www.youtube.com/embed/xGAseSEdcyc?autoplay=1&controls=0&showinfo=0mute=1?rel=0"
// ]
// let videoIndex = 0;

class LiveCam extends Component {

  constructor(props) {
  super(props)
  this.state = {
    currentVideo: "https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1",
    // display: {display: 'inline-block'},
  }
}

  componentDidMount() {
    // this.switchVideo();
  }

  // switchVideo() {
  //   setInterval(() => {
  //     switch (this.state.currentVideo) {
  //       case "https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1":
  //       console.log('videoIndex: ', videoIndex)
  //         videoIndex++;
  //         this.setState({
  //           currentVideo: videoArr[videoIndex]
  //         })
  //         return;
  //       case "https://www.youtube.com/embed/hck5LT3HtVE?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1":
  //       console.log('videoIndex: ', videoIndex)
  //         videoIndex++;
  //         this.setState({
  //           currentVideo: videoArr[videoIndex]
  //         })
  //         return;
  //       case "https://www.youtube.com/embed/xGAseSEdcyc?autoplay=1&controls=0&showinfo=0mute=1?rel=0":
  //       console.log('videoIndex: ', videoIndex)
  //         videoIndex = 0;
  //         this.setState({
  //           currentVideo: videoArr[videoIndex]
  //         })
  //         return videoIndex;
  //       default:
  //         videoIndex = 0;
  //     }
  //   }, 30000);
  // }

  // toggleDisplay() {
  //   console.log('toggleDisplay')
  //   this.setState({
  //     display: {display: 'none'}
  //   });
  // }


  // <div>
    // <iframe
    //   src="https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1"
    //   frameBorder="0"
    //   allow="autoplay; encrypted-media"
    //   modestbranding="0"
    // >
    // </iframe>
  // </div>
  // <div>
    // <iframe
    //   src="https://www.youtube.com/embed/hck5LT3HtVE?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1"
    //   frameBorder="0"
    //   allow="autoplay; encrypted-media"
    //   modestbranding="0"
    // >
    // </iframe>
  // </div>

  render() {
    return(
      <Fragment>
        <div>
          <Carousel
            showThumbs={false}
            swipeable={true}
            emulateTouch={true}
          >
            <div className="intrinsic-container intrinsic-container-16x9">
              <iframe
                src="https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                modestbranding="0"
                title="brooklyn-bridge"
              >
              </iframe>
              <p className="legend">Legend 1</p>
            </div>
            <div className="intrinsic-container intrinsic-container-16x9">
              <iframe
                src="https://www.youtube.com/embed/hck5LT3HtVE?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                modestbranding="0"
                title="downtown"
              >
              </iframe>
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div>
      </Fragment>
    )
  }


}

export default LiveCam;
