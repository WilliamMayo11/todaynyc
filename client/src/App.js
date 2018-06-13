import React, { Component } from 'react';
import logo from './clock.png';
import WeatherContainer from './components/weather-container.js';
import LiveCam from './components/live-cam.js'
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Today NYC</h1>
        </header>
        <LiveCam />
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
