import React, { Component } from 'react';
import Weather from '../models/weather.js';

class WeatherContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todayWeather: undefined,
    }
  }

  componentWillMount() {
    const weather = new Weather()
    let clima = weather.getWeather();
    clima
      .then(r => r.json())
      .then(data => {
        this.data = data;
        console.log('whuuuuut ', data);

        // set into state
         // pass into variable
      })
      .catch(err => console.log(err))
    console.log('weatherApi: ', weather.weatherApi)
    console.log('data: ', weather.data)
  }

  render() {
    return(
      <p>temp does not exist</p>
    )
  }

}

export default WeatherContainer;
