import React, { Component } from 'react';
import './CartOrderButton.scss';

class CartOrderButton extends Component {
  render() {
    return (
      <div className="orderBtnContainer">
        <span class="orderBtnWrap">
          <a class="Btn orderBtn">구매하기</a>
          <a class="Btn continueBtn">계속 쇼핑하기</a>
        </span>
      </div>
    );
  }
}

export default CartOrderButton;
