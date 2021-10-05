import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import potato from './감자.jpeg';
import sweetpotato from './sweetpotato.jpeg';
import './SideBar.scss';

const SideBar = () => {
  const TOTAL_SLIDES = 4;
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

  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const handleScroll = () => {
    if (scrollY > 200) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const scrollToBottom = () => {
    document.documentElement.scrollTo(0, document.body.scrollHeight);
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', handleScroll);
    };
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });
  const moveImg = (currentSlide - 1) * 80;
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${moveImg}px)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [moveImg]);

  return (
    <>
      <div className={scrollActive ? 'SideBar' : 'SideBarHide'}>
        <div className="box">
          <ul>
            <li>
              <Link to="/">
                <div className="goToCart">장바구니</div>
              </Link>
            </li>
            <li>
              <div className="current">최근본상품</div>
            </li>
            <li className="imgBox" ref={slideRef}>
              <div className="currentImg">
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={potato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
                <Link to="/" className="linkToProduct">
                  <img alt="" src={sweetpotato} />
                </Link>
              </div>
            </li>
            <li className="imgListNum">
              <div className="button">
                <button onClick={prevSlide}>&lt;</button>
                <div>{currentSlide}/4</div>
                <button onClick={nextSlide}>&gt;</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="ScrollTo">
          <button onClick={scrollToTop}>∧</button>
          <button onClick={scrollToBottom}>∨</button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
