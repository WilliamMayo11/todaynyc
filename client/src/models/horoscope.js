export default class Horoscope {

  getHoroscope(sign) {
    return fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today/`)
  }

}
