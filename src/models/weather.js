
export class Weather {

  constructor() {
    // this.weatherApi = this.getWeather();
    this.hello = 'hello';
    this.API_URL = // hidden
    this.API_KEY = //hidden
  }

  getWeather() {
    let _this = this;
    return fetch(`${this.API_URL}q=${'new york'}&units=imperial&APPID=${this.API_KEY}`)
  }
}

export default Weather;
