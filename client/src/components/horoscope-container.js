import React, { Component, Fragment } from 'react';
import Horoscope from '../models/horoscope.js'

class HoroscopeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      horoscope: undefined,
    }
  }

  componentDidMount() {
    const horoscope = new Horoscope();
    let todayHoroscope = horoscope.getHoroscope('capricorn');
    todayHoroscope
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          horoscope: data.horoscope
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <Fragment>
        <div>Horoscope: </div>
        <div>
          <p>{this.state.horoscope}</p>
        </div>
      </Fragment>
    )
  }

}

export default HoroscopeContainer;
