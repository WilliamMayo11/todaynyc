
export class Weather {

  constructor() {
    // define API_KEY and API_URL here

  }

  getWeather() {
    return fetch(`${this.API_URL}q=${'new york'}&units=imperial&APPID=${this.API_KEY}`)
  }
}

export default Weather;
