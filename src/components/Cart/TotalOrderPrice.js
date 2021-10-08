import React, { Component } from 'react';
import './TotalOrderPrice.scss';

class TotalOrderPrice extends Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
    };
  }

  // 장바구니 총합계 구현 중..!
  componentDidMount() {
    const { totalPrice } = this.state;
    const { setTotalPrice } = this.props;

    this.setState({
      totalPrice: totalPrice + setTotalPrice,
    });
  }

  render() {
    const { setTotalPrice } = this.props;
    return (
      <>
        <div className="totalOrderContainer">
          <div className="totalOrderWrap">
            <div className="totalOrderTitleWrap">
              <strong className="totalOrderTitle">총 주문금액</strong>
            </div>
            <div className="totalOrderPriceWrap">
              <em className="totalOrderPrice">{setTotalPrice}</em>
              <em className="totalOrderPriceWon">원</em>
            </div>
          </div>
          <p className="sign">+</p>
          <div className="totalOrderWrap">
            <div className="totalOrderTitleWrap">
              <strong className="totalOrderTitle">총 배송비</strong>
            </div>
            <div className="totalOrderPriceWrap">
              <em className="totalOrderPrice">0</em>
              <em className="totalOrderPriceWon">원</em>
            </div>
          </div>
          <p className="sign">=</p>
          <div className="totalOrderWrap">
            <div className="totalOrderTitleWrap">
              <strong className="totalOrderTitle expectPrice">
                총 결제금액
              </strong>
            </div>
            <div className="totalOrderPriceWrap">
              <em className="totalOrderPrice expectPrice">{setTotalPrice}</em>
              <em className="totalOrderPriceWon expectPrice">원</em>
            </div>
          </div>
        </div>
        <div className="discountPriceContainer">
          <div className="discountPriceWrap">
            <p className="discountPriceTitle">예상적립금</p>
            <em className="discountPrice">1,520</em>
            <em className="discountPriceWon">원</em>
          </div>
        </div>
      </>
    );
  }
}

export default TotalOrderPrice;
