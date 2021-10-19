import React, { Component } from 'react';
import './CartHeader.scss';

class CartHeader extends Component {
  render() {
    return (
      <div className="cartHeaderWrap">
        <section className="cartHeader">
          <div className="cartTitle">장바구니</div>
          <ul className="cartSubTitleList">
            <li>
              <div className="cartSubTitle">
                <h2 className="cartSubTitleText on">01 장바구니 &gt;</h2>
              </div>
            </li>
            <li>
              <div className="cartSubTitle">
                <h2 className="cartSubTitleText">02 주문/결제 &gt;</h2>
              </div>
            </li>
            <li>
              <div className="cartSubTitle">
                <h2 className="cartSubTitleText">03 결제완료 </h2>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default CartHeader;
