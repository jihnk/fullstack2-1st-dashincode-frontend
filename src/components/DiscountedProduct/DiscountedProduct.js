import React from 'react';
import { Link } from 'react-router-dom';
import CountDownTimer from './CountDownTimer';
import dart from './dart.png';
import chicken from './chicken.png';
import './DiscountedProduct.scss';

const DiscountedProduct = () => {
  return (
    <>
      <div className="DiscountedProduct">
        <Link to="/">
          <container className="discountedProductContainer">
            <div className="discountedProductTitle">
              <img alt="dart icon" src={dart} />
              <h1>런칭특가</h1>
            </div>
            <div className="discountedProductBox">
              <img alt="discounted product" src={chicken} />
              <ul>
                <li className="timer">
                  <CountDownTimer
                    date="10/07/2021"
                    text="특가 행사가 종료되었습니다 ˃̩̩̥ɷ˂̩̩̥"
                  />
                </li>
                <li className="name">
                  <p>
                    상품이름
                    <br />
                    상품상품상품상품상품
                  </p>
                </li>
                <li className="discountRate">
                  <p>16%</p>
                </li>
                <li className="discountedPrice">
                  <p>3800원</p>
                </li>
                <li className="price">
                  <p>4500원</p>
                </li>
                <li className="delivery">
                  <p>다신쿨배송</p>
                </li>
              </ul>
            </div>
          </container>
        </Link>
      </div>
    </>
  );
};

export default DiscountedProduct;
