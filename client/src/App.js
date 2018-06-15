import React, { Component } from 'react';
import logo from './clock.png';
import WeatherContainer from './components/weather-container.js';
import Horoscope from './components/horoscope-container.js'
import LiveCam from './components/live-cam.js'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Today NYC</h1>
        </header>
        <div className="weather-container">
          <WeatherContainer />
        </div>
        <div className="live-cam">
          <LiveCam />
        </div>
        <div className="horoscope-container">
          <Horoscope />
        </div>
      </div>
    );
  }
}

export default App;
