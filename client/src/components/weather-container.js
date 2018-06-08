import React, { Component, Fragment } from 'react';
import Weather from '../models/weather.js';

class WeatherContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTemp: undefined,
      hiTemp: undefined,
      lowTemp: undefined,
      humidity: undefined,
      wind: undefined,
      description: undefined,
    }
  }

  componentDidMount() {
    const weather = new Weather()
    let todayWeather = weather.getWeather();
    todayWeather
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          currentTemp: data.main.temp,
          hiTemp: data.main.temp_max,
          lowTemp: data.main.temp_min,
          humidity: data.main.humidity,
          wind: data.wind.speed
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <Fragment>
        <h1>Weather</h1>
        <p>Current Temperature: {this.state.currentTemp}</p>
        <p>High: {this.state.hiTemp}</p>
        <p>Low: {this.state.lowTemp}</p>
        <p>Humidty: {this.state.humidity}</p>
        <p>Wind Speed: {this.state.wind}</p>
      </Fragment>
    )
  }

}

export default WeatherContainer;
