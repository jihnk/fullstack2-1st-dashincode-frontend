import React, { Component } from 'react';
import './TotalOrderPrice.scss';

class TotalOrderPrice extends Component {
  render() {
    const { totalPrice, totalDeliveryPrice } = this.props;
    const totalOrderPrice = parseInt(totalPrice);
    const DeliveryPrice = parseInt(totalDeliveryPrice);
    let finalPrice = totalOrderPrice + DeliveryPrice;

    return (
      <>
        <div className="totalOrderContainer">
          <div className="totalOrderWrap">
            <div className="totalOrderTitleWrap">
              <strong className="totalOrderTitle">총 주문금액</strong>
            </div>
            <div className="totalOrderPriceWrap">
              <strong className="totalOrderPrice">
                {totalOrderPrice.toLocaleString()}
              </strong>
              <strong className="totalOrderPriceWon">원</strong>
            </div>
          </div>
          <p className="sign">+</p>
          <div className="totalOrderWrap">
            <div className="totalOrderTitleWrap">
              <strong className="totalOrderTitle">총 배송비</strong>
            </div>
            <div className="totalOrderPriceWrap">
              <strong className="totalOrderPrice">
                {DeliveryPrice.toLocaleString()}
              </strong>
              <strong className="totalOrderPriceWon">원</strong>
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
              <strong className="totalOrderPrice expectPrice">
                {finalPrice.toLocaleString()}
              </strong>
              <strong className="totalOrderPriceWon expectPrice">원</strong>
            </div>
          </div>
        </div>
        <div className="discountPriceContainer">
          <div className="discountPriceWrap">
            <p className="discountPriceTitle">예상적립금</p>
            <strong className="discountPrice">
              {(totalPrice * 0.1).toLocaleString()}
            </strong>
            <strong className="discountPriceWon">원</strong>
          </div>
        </div>
      </>
    );
  }
}

export default TotalOrderPrice;
