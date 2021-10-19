import React, { Component } from 'react';
import Button from '../shared/Button';
import './CartOrderButton.scss';

class CartOrderButton extends Component {
  render() {
    return (
      <div className="orderBtnContainer">
        <span className="orderBtnWrap">
          <Button type="orderBtn" text="구매하기" />
          <Button type="continueBtn" text="계속 쇼핑하기" />
        </span>
      </div>
    );
  }
}

export default CartOrderButton;
