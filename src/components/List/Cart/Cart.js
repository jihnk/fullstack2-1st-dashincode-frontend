import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Cart/Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      productQuantity: 0,
    };
  }

  getTotal = (num1, num2) => {
    return num1 * num2;
  };

  render() {
    const { discountedPrice, addQuantity, alt, description, closeCart } =
      this.props;
    const { productQuantity } = this.state;
    return (
      <div className="Cart">
        <div className="cartTitle">
          <p>상품 선택</p>
          <div className="closeButton">
            <FontAwesomeIcon icon={faTimes} onClick={closeCart} />
          </div>
        </div>
        <div className="cartContent">
          <div className="contentProduct">{alt}</div>
          <ul className="optionWrapper">
            <li className="option">
              <div className="optionName">{description}</div>
              <div className="optionAmount">
                <div class="optionPrice">{`${discountedPrice.toLocaleString(
                  'ko-KR'
                )}원`}</div>
                <div className="optionButtons">
                  <button
                    className="subtractButton"
                    onClick={this.minusQuantity}
                  >
                    -
                  </button>
                  <div className="productQuantity">
                    {productQuantity.toLocaleString('ko-KR')}
                  </div>
                  <button className="addButton" onClick={addQuantity}>
                    +
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="cartBottom">
          <div className="total">
            <div className="sum">합계</div>
            <div className="totalAmount">{`${this.getTotal(
              discountedPrice,
              productQuantity
            ).toLocaleString('ko-KR')}원`}</div>
          </div>
          <div className="point">
            <div className="pointTitle">적립</div>
            <div className="pointSum">
              {`${
                this.getTotal(discountedPrice, productQuantity) *
                (0.01).toLocaleString('ko-KR')
              }원 적립`}
            </div>
            <div className="pointRate">(실 결제금액의 1%)</div>
          </div>
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
