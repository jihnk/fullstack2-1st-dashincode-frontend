import React from 'react';
import { Link } from 'react-router-dom';
import '../Cart/Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
    const { discountedPrice, cart } = this.props;
    const { productQuantity } = this.state;
    return (
      <>
        <div className={cart ? 'Cart' : 'Cart'}>
          <div className="cartTitle">
            <p>상품 선택</p>
            <div className="closeButton">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="cartContent">
            <ul className="optionWrapper">
              <li className="option">
                <div className="optionName">{this.props.alt}</div>
                <div className="optionAmount">
                  <div class="optionPrice">{`${this.props.discountedPrice}원`}</div>
                  <div className="optionButtons">
                    <span className="subtractButton">-</span>
                    <span className="productQuantity">{productQuantity}</span>
                    <span className="addButton">+</span>
                  </div>
                </div>
              </li>
              <li className="option">
                <div className="optionName">{this.props.alt}</div>
                <div className="optionAmount">
                  <div class="optionPrice">{`${this.props.discountedPrice}원`}</div>
                  <div className="optionButtons">
                    <span className="subtractButton">-</span>
                    <span className="productQuantity">{productQuantity}</span>
                    <span className="addButton">+</span>
                  </div>
                </div>
              </li>
              <li className="option">
                <div className="optionName">{this.props.alt}</div>
                <div className="optionAmount">
                  <div class="optionPrice">{`${this.props.discountedPrice}원`}</div>
                  <div className="optionButtons">
                    <span className="subtractButton">-</span>
                    <span className="productQuantity">{productQuantity}</span>
                    <span className="addButton">+</span>
                  </div>
                </div>
              </li>
              <li className="option">
                <div className="optionName">{this.props.alt}</div>
                <div className="optionAmount">
                  <div class="optionPrice">{`${this.props.discountedPrice}원`}</div>
                  <div className="optionButtons">
                    <span className="subtractButton">-</span>
                    <span className="productQuantity">{productQuantity}</span>
                    <span className="addButton">+</span>
                  </div>
                </div>
              </li>
              <li className="option">
                <div className="optionName">{this.props.alt}</div>
                <div className="optionAmount">
                  <div class="optionPrice">{`${this.props.discountedPrice}원`}</div>
                  <div className="optionButtons">
                    <span className="subtractButton">-</span>
                    <span className="productQuantity">{productQuantity}</span>
                    <span className="addButton">+</span>
                  </div>
                </div>
              </li>
              <li className="option">
                <div className="optionName">{this.props.alt}</div>
                <div className="optionAmount">
                  <div class="optionPrice">{`${this.props.discountedPrice}원`}</div>
                  <div className="optionButtons">
                    <span className="subtractButton">-</span>
                    <span className="productQuantity">{productQuantity}</span>
                    <span className="addButton">+</span>
                  </div>
                </div>
              </li>
              <li className="option">
                <div className="optionName">{this.props.alt}</div>
                <div className="optionAmount">
                  <div class="optionPrice">{`${this.props.discountedPrice}원`}</div>
                  <div className="optionButtons">
                    <span className="subtractButton">-</span>
                    <span className="productQuantity">{productQuantity}</span>
                    <span className="addButton">+</span>
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
              )}원`}</div>
            </div>
            <Link to="/product">
              <button className="showDetails">상품정보보기</button>
            </Link>
            <Link to="/cart">
              <button className="addToCart">장바구니 담기</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
