import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Slider.scss';
// import slider1 from './slider1.jpg';
import slider2 from './slider2.jpg';
import MainCategory from './Components/MainCategory/MainCategory';

const Slider = () => {
  const TOTAL_SLIDES = 5;
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const moveSlide = currentSlide - 1;
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${moveSlide}00vw)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [moveSlide]);
  return (
    <>
      <div className="Slider">
        <div className="sliderWithBtn">
          <MainCategory />
          <div className="Slide">
            <container className="inner" ref={slideRef}>
              <img className="sliderImg" alt="" src={slider2} />
              <img className="sliderImg" alt="" src={slider2} />
              <img className="sliderImg" alt="" src={slider2} />
              <img className="sliderImg" alt="" src={slider2} />
              <img className="sliderImg" alt="" src={slider2} />
            </container>
          </div>
          <div className="button">
            <p>
              {currentSlide}/{TOTAL_SLIDES}
            </p>
            <button className="button1" onClick={prevSlide}>
              &lt;
            </button>
            <button className="button2" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
