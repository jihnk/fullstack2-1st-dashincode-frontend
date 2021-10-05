import React, { useState, useEffect } from 'react';

const CountDownTimer = props => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const countDown = () => {
      setInterval(() => {
        let eventDate = +new Date(props.date);
        let difference = eventDate - +new Date();
        if (difference < 1) {
          setTimeUp(true);
          clearInterval(countDown);
        } else {
          let days = Math.floor(difference / (1000 * 60 * 60 * 24));
          let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          let minutes = Math.floor((difference / (1000 * 60)) % 60);
          let seconds = Math.floor((difference / 1000) % 60);
          setHour(hours > 9 ? hours : `0${hours}`);
          setMin(minutes > 9 ? minutes : `0${minutes}`);
          setSec(seconds > 9 ? seconds : `0${seconds}`);
          setDay(days);
        }
      }, 1000);
    };
    countDown();
  });

  return timeUp ? (
    <p>{props.text}</p>
  ) : (
    <p>{`${day} 일 ${hour} : ${min} : ${sec} 남음`}</p>
  );
};

export default CountDownTimer;
