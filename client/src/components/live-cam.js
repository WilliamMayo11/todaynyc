import React, { Component, Fragment } from 'react';
import '../css/live-cam.css';
import { Carousel } from 'react-responsive-carousel';
import swipeLeft from '../swipe-left.png';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// let videoArr = [
//   "https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1",
//   "https://www.youtube.com/embed/hck5LT3HtVE?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1",
//   "https://www.youtube.com/embed/xGAseSEdcyc?autoplay=1&controls=0&showinfo=0mute=1?rel=0"
// ]
// let videoIndex = 0;

// CAROUSEL HTML
// {/* <Fragment>
//   <div onClick={this.pressed.bind(this)}>
//     <Carousel
//       showThumbs={false}
//       swipeable={true}
//       emulateTouch={true}
//       showStatus={false}
//       showIndicators={false}
//     >
//       <div className="intrinsic-container intrinsic-container-16x9">
//         <iframe
//           src="https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           modestbranding="0"
//         >
//         </iframe>
//         <div className="swipebar"><img src={swipeLeft} className="swipe-img" /></div>
//       </div>
//       <div className="intrinsic-container intrinsic-container-16x9">
//         <iframe
//           src="https://www.youtube.com/embed/hck5LT3HtVE?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1&autoplay=1"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           modestbranding="0"
//         >
//         </iframe>
//       </div>
//     </Carousel>
//   </div>
// </Fragment> */}

class LiveCam extends Component {

  constructor(props) {
  super(props)
  this.state = {}
}


  render() {
    return(
      <Fragment>
        <div className="intrinsic-container intrinsic-container-16x9">
          <iframe
            src="https://www.youtube.com/embed/la90mA4VLa4?rel=0&amp;controls=0&amp;showinfo=0&playsinline=1"
            frameBorder="0"
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
