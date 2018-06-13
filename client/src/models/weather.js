export class Weather {

  getWeather() {
    return fetch('http://todaynyc.us-east-1.elasticbeanstalk.com/weather')
  }
}

export default Weather;
