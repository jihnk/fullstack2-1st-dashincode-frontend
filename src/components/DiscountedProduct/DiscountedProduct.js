import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountDownTimer from './CountDownTimer';
import dart from './dart.png';
import './DiscountedProduct.scss';

class DiscountedProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/discountedinfo.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.DATA,
        });
      });
    //데이터 받을 때 date_format(updated_At, '/%m/%d/%Y')
  }

  render() {
    const { product } = this.state;
    return (
      <div className="DiscountedProduct">
        <Link to="/">
          <div className="discountedProductContainer">
            <div className="discountedProductTitle">
              <img alt="dart icon" src={dart} />
              <h1>런칭특가</h1>
            </div>
            <div className="discountedProductBox">
              <img alt="discounted product" src={product.image_url} />
              <ul>
                <li className="timer">
                  <CountDownTimer
                    date={product.updated_at}
                    text="특가 행사가 종료되었습니다 ˃̩̩̥ɷ˂̩̩̥"
                  />
                </li>
                <li className="name">
                  <p>
                    {product.name}
                    <br />
                    {product.description}
                  </p>
                </li>
                <li className="discountRate">
                  <p>{product.discountedRate}%</p>
                </li>
                <li className="discountedPrice">
                  <p>
                    {product.price * ((100 - product.discountedRate) / 100)}
                  </p>
                </li>
                <li className="price">
                  <p>{product.price}</p>
                </li>
                <li className="delivery">
                  <ul>
                    {product.isFree && <li className="isFree">무료배송</li>}
                    {product.isDashin && <li className="isDashin">다신배송</li>}
                    {product.isCool && <li className="isCool">다신쿨배송</li>}
                    {!product.isFree &&
                      !product.isDashin &&
                      !product.isCool && <li className="isBasic">기본배송</li>}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default DiscountedProduct;
