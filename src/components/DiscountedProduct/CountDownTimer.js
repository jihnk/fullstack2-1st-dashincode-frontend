import React, { Component } from 'react';

class CountDownTimer extends Component {
  state = {
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
    timeUp: false,
  };

  componentDidMount() {
    setInterval(() => {
      let eventDate = +new Date(this.props.date);
      let difference = eventDate - +new Date();
      if (difference < 1) {
        this.setState({ timeUp: true });
      } else {
        let day = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let min = Math.floor((difference / (1000 * 60)) % 60);
        let sec = Math.floor((difference / 1000) % 60);
        this.setState({
          hour: hour > 9 ? hour : `0${hour}`,
          min: min > 9 ? min : `0${min}`,
          sec: sec > 9 ? sec : `0${sec}`,
          day,
        });
      }
    }, 1000);
  }

  render() {
    const { day, hour, min, sec, timeUp } = this.state;
    return timeUp ? (
      <p>{this.props.text}</p>
    ) : (
      <p>{`${day} 일 ${hour} : ${min} : ${sec} 남음`}</p>
    );
  }
}

export default CountDownTimer;
