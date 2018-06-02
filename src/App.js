import React, { Component } from 'react';
import logo from './logo.svg';
import WeatherContainer from './components/weather-container.js';
import './App.css';

class App extends Component {

  componentWillMount() {
    // fetch(`${API_URL}q=${'new york'}&units=imperial&APPID=${API_KEY}`)
    //   .then(r => r.json())
    //   .then(data => {
    //     console.log('data: ', data)
    //   })
    //   .catch(err => console.log(err))
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How about now?</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
