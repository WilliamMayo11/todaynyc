import React, { Component, Fragment } from 'react';
import '../css/live-button.css';

class LiveButton extends Component {

  constructor(props) {
  super(props)
    this.state = {}
  }

  render() {
    return(
      this.props.messageVisible ?
        <div className="button">
          <h3 className="message">Tap for Live Cam</h3>
        </div>
        : <div></div>
    )
  }

}

export default LiveButton;
