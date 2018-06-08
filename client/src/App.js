import React, { Component } from 'react';
import logo from './clock.png';
import WeatherContainer from './components/weather-container.js';
import LiveCam from './components/live-cam.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   weather: {}
    // }
  }

// componentDidMount() {
//   fetch('/weather')
//   .then(r => r.json())
//   .then(data => {
//     console.log('data: ', data)
//     this.setState({
//       weather: data
//     })
//   })
//   .catch(err => {
//     console.log('error fetching weather',err);
//   })
// }

// renderWeather() {
//   console.log(this.state.weather)
//         // return (
//         //   <h1>{this.state.weather.main.temp}</h1>
//         // )
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
