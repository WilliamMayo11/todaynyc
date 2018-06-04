
export class Weather {

  constructor() {
    this.API_URL = 'http://api.openweathermap.org/data/2.5/weather?';
    this.API_KEY = // hidden

  }

  getWeather() {
    return fetch(`${this.API_URL}q=${'new york'}&units=imperial&APPID=${this.API_KEY}`)
  }
}

export default Weather;
