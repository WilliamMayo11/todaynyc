import icon01d from '../images/weather-icons/01d.png';
import icon01n from '../images/weather-icons/01n.png';
import icon02d from '../images/weather-icons/02d.png';
import icon02n from '../images/weather-icons/02n.png';
import icon03d from '../images/weather-icons/03d.png';
import icon03n from '../images/weather-icons/03n.png';
import icon04d from '../images/weather-icons/04d.png';
import icon04n from '../images/weather-icons/04n.png';
import icon09d from '../images/weather-icons/09d.png';
import icon09n from '../images/weather-icons/09n.png';
import icon10d from '../images/weather-icons/10d.png';
import icon10n from '../images/weather-icons/10n.png';
import icon11d from '../images/weather-icons/11d.png';
import icon11n from '../images/weather-icons/11n.png';
import icon13d from '../images/weather-icons/13d.png';
import icon13n from '../images/weather-icons/13n.png';
import icon50d from '../images/weather-icons/50d.png';
import icon50n from '../images/weather-icons/50n.png';

export class Weather {

  getWeather() {
    return fetch('http://todaynyc.us-east-1.elasticbeanstalk.com/weather')
  }

  getIcon(icon) {
    switch(icon) {
      case '01d':
        return icon01d;
      case '01n':
        return icon01n;
      case '02d':
        return icon02d;
      case '02n':
        return icon02n;
      case '03d':
        return icon03d;
      case '03n':
        return icon03n;
      case '04d':
        return icon04d;
      case '04n':
        return icon04n;
      case '09d':
        return icon09d;
      case '09n':
        return icon09n;
      case '10d':
        return icon10d;
      case '10n':
        return icon10n;
      case '11d':
        return icon11d;
      case '11n':
        return icon11n;
      case '13d':
        return icon13d;
      case '13n':
        return icon13n;
      case '50d':
        return icon50d;
      case '50n':
        return icon50n;
      default:
      return icon02d;

    }
  }
}

export default Weather;
