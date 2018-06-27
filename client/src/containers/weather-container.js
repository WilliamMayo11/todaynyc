import React, { Component, Fragment } from 'react';
import Weather from '../models/weather.js';
import '../css/weather-container.css';

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
      icon: undefined
    }
  }

  componentDidMount() {
    const weather = new Weather()
    let todayWeather = weather.getCurrentWeather();
    // let weatherForecast = weather.getWeatherForecast();
    todayWeather
      .then(r => r.json())
      .then(data => {
        // console.log(data)
        this.setState({
          currentTemp: parseInt(data.main.temp) + `°F`,
          hiTemp: data.main.temp_max,
          lowTemp: data.main.temp_min,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          icon: weather.getIcon(data.weather[0].icon)
        })
      })
      .catch(err => console.log(err))

    // weatherForecast
    //   .then(r => r.json())
    //   .then(data => {
    //     console.log('forecast data: ', data)
    //     let time = new Date(data.list[0].dt * 1000)
    //     console.log('time: ', time)
    //   })
    //   .catch(err => console.log(err))
  }

  render() {
    return(
      <Fragment>
        <div>
          <img src={this.state.icon} className="weather-icon" alt="weather icon" />
          <div><h1 className="bold-temp">{this.state.currentTemp}</h1></div>
        </div>
      </Fragment>
    )
  }

}

export default WeatherContainer;
