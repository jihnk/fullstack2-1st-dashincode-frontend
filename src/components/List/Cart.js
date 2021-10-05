import React from 'react';

class Cart extends React.Component {
  getTotal = (num1, num2) => {
    return num1 * num2;
  };

  render() {
    const { reviewCount, discountedPrice, cart } = this.props;
    return (
      <div className={cart ? 'open' : 'Cart close'}>
        <div className="cartTitle">상품 선택</div>
        <div className="cartContent">
          <div className="order">
            <div className="productName">{this.props.alt}</div>
            <div className="productCount">
              <button className="subtract">-</button>
              <p>{this.props.reviewCount}</p>
              <button className="add">+</button>
            </div>
          </div>
          <div className="total">
            <span>합계</span>
            <span>{`${this.getTotal(discountedPrice, reviewCount)}원`}</span>
          </div>
        </div>
        <div className="cartBottom">
          <button className="showDetails">상품정보보기</button>
          <button className="addToCart">장바구니 담기</button>
        </div>
      </div>
    );
  }
}
export default Cart;
