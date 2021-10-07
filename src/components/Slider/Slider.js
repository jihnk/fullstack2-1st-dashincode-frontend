import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slider1 from './slider1.png';
import slider2 from './slider2.jpg';
import slider3 from './slider3.png';
import slider4 from './slider4.png';
import slider5 from './slider5.png';
import MainCategory from './Components/MainCategory/MainCategory';
import './Slider.scss';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      totalSlides: 5,
      currentSlide: 1,
    };
    this.myRef = React.createRef();
  }

  nextSlide = () => {
    const { totalSlides, currentSlide } = this.state;
    this.setState(
      { currentSlide: currentSlide === totalSlides ? 1 : currentSlide + 1 },
      () => {
        this.moveImage();
      }
    );
  };

  prevSlide = () => {
    const { totalSlides, currentSlide } = this.state;
    this.setState(
      { currentSlide: currentSlide === 1 ? totalSlides : currentSlide - 1 },
      () => {
        this.moveImage();
      }
    );
  };

  moveImage = () => {
    const moveImg = this.state.currentSlide - 1;
    this.myRef.current.style.transition = 'all 0.5s ease-in-out';
    this.myRef.current.style.transform = `translateX(-${moveImg}00vw)`;
  };

  render() {
    const { currentSlide, totalSlides } = this.state;
    return (
      <div className="Slider">
        <div className="sliderWrap">
          <MainCategory />
          <div className="imageSlide">
            <div className="spreadImage" ref={this.myRef}>
              <Link to="/">
                <img className="sliderImg" alt="" src={slider1} />
              </Link>
              <Link to="/">
                <img className="sliderImg" alt="" src={slider2} />
              </Link>
              <Link to="/">
                <img className="sliderImg" alt="" src={slider3} />
              </Link>
              <Link to="/">
                <img className="sliderImg" alt="" src={slider4} />
              </Link>
              <Link to="/">
                <img className="sliderImg" alt="" src={slider5} />
              </Link>
            </div>
          </div>
          <div className="button">
            <p>
              {currentSlide}/{totalSlides}
            </p>
            <button className="button1" onClick={this.prevSlide}>
              &lt;
            </button>
            <button className="button2" onClick={this.nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
