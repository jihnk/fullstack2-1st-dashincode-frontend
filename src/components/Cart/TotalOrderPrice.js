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
              <em className="totalOrderPrice">
                {totalOrderPrice.toLocaleString()}
              </em>
              <em className="totalOrderPriceWon">원</em>
            </div>
          </div>
          <p className="sign">+</p>
          <div className="totalOrderWrap">
            <div className="totalOrderTitleWrap">
              <strong className="totalOrderTitle">총 배송비</strong>
            </div>
            <div className="totalOrderPriceWrap">
              <em className="totalOrderPrice">
                {DeliveryPrice.toLocaleString()}
              </em>
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
              <em className="totalOrderPrice expectPrice">
                {finalPrice.toLocaleString()}
              </em>
              <em className="totalOrderPriceWon expectPrice">원</em>
            </div>
          </div>
        </div>
        <div className="discountPriceContainer">
          <div className="discountPriceWrap">
            <p className="discountPriceTitle">예상적립금</p>
            <em className="discountPrice">
              {(totalPrice * 0.1).toLocaleString()}
            </em>
            <em className="discountPriceWon">원</em>
          </div>
        </div>
      </>
    );
  }
}

export default TotalOrderPrice;
