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
      shipment: [],
    };
  }

  componentDidMount() {
    fetch('/product/special')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.DATA,
          shipment: data.DATA.shipment,
        });
      });
  }

  render() {
    const { product, shipment } = this.state;
    const link = '/product/' + product.id;
    return (
      <div className="DiscountedProduct">
        <Link to={link}>
          <div className="discountedProductWrap">
            <div className="title">
              <img alt="dart icon" src={dart} />
              <h1>런칭특가</h1>
            </div>
            <div className="discountedProductBox">
              <img alt="discounted product" src={product.image_url} />
              <ul>
                <li className="timer">
                  <CountDownTimer
                    date={product.expire_date}
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
                  <p>
                    {Math.round(
                      100 - (product.discounted_price / product.price) * 100
                    )}
                    %
                  </p>
                </li>
                <li className="discountedPrice">
                  <p>{product.discounted_price}</p>
                </li>
                <li className="price">
                  <p>{product.price}</p>
                </li>
                <li className="delivery">
                  <ul>
                    {shipment.length === 0 && (
                      <li className="isBasic">기본배송</li>
                    )}
                    {shipment &&
                      shipment.map((shipment, id) => {
                        return (
                          <li key={id} className={shipment}>
                            {shipment === 'isCool'
                              ? '다신쿨배송'
                              : shipment === 'isFree'
                              ? '무료배송'
                              : shipment === 'isDashin'
                              ? '다신배송'
                              : shipment === 'isBasic'
                              ? '기본배송'
                              : shipment}
                          </li>
                        );
                      })}
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
