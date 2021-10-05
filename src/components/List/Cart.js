import React from 'react';
import { Link } from 'react-router-dom';
import '../List/Cart.scss';

class Cart extends React.Component {
  getTotal = (num1, num2) => {
    return num1 * num2;
  };

  render() {
    const { reviewCount, discountedPrice, cart } = this.props;
    return (
      <div className={cart ? 'Cart open' : 'Cart'}>
        <div className="cartTitle">상품 선택</div>
        <div className="cartContent">
          <div className="order">
            <div className="productName">{this.props.alt}</div>
            <div className="productCount">
              <button className="subtract">-</button>
              <p className="productQuantity">{this.props.reviewCount}</p>
              <button className="add">+</button>
            </div>
          </div>
          <div className="total">
            <div className="sum">합계</div>
            <div className="totalAmount">{`${this.getTotal(
              discountedPrice,
              reviewCount
            )}원`}</div>
          </div>
        </div>
        <div className="cartBottom">
          <Link to="/product">
            <button className="showDetails">상품정보보기</button>
          </Link>
          <Link to="/cart">
            <button className="addToCart">장바구니 담기</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Cart;
