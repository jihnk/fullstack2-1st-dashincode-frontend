import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import CheckBox from '../shared/CheckBox';
import './CartDetail.scss';

class CartDetail extends Component {
  render() {
    return (
      <div className="cartDetailContainer">
        <div className="cartDetailHeaderWrap">
          <CheckBox />
          <header class="cartDetailHeader">다신쿨배송(냉동 제품)</header>
        </div>
        <section className="cartDetailContents">
          <div className="cartDetailWrap">
            <div className="checkBoxWrap">
              <CheckBox />
            </div>
            <div className="orderThumnailWrap">
              <a href="#">
                <img
                  alt="음식샘플1"
                  src="https://www.kfoodtimes.com/news/photo/202105/15867_27069_332.png"
                  className="orderDetailImg"
                />
              </a>
            </div>
            <div className="orderInfoWrap">
              <p className="order_title" href="#">
                완벽한 한끼 식단 다신밥상
              </p>
              <ul className="orderInfoArea">
                <li className="orderInfoWrap">
                  <p className="orderInfoTitle">
                    기본옵션: *특가* 1주 식단세트(5팩)
                  </p>
                  <span className="orderCntBtnWrap">
                    <a id="minBtn" className="cntBtn">
                      -
                    </a>
                    <span className="orderCntWrap">
                      <input
                        type="text"
                        maxLength="3"
                        value="1"
                        className="orderCnt"
                      />
                    </span>
                    <a id="plusBtn" className="cntBtn">
                      +
                    </a>
                  </span>
                  <span className="orderPriceWrap">
                    <em class="price">8,500</em>
                    <em class="priceWon">원</em>
                  </span>
                  <span className="deleteBtnWrap">
                    <FontAwesomeIcon icon={faBan} className="deleteBtn" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="orderTotalPriceContainer">
          <div className="orderTotalPriceWrap">
            <div className="orderPriceWrap">
              <p className="orderPriceName">주문금액</p>
              <em className="orderPrice">90,600</em>
              <em className="orderPriceWon">원</em>
            </div>
            <p className="sign">+</p>
            <div className="deliveryWrap">
              <p className="deleveryTitle">배송비</p>
              <p className="deleveryPrice">무료배송</p>
            </div>
            <p className="sign">=</p>
            <div className="totalPriceWrap">
              <p className="totalPriceTitle">결제금액</p>
              <em className="totalPrice">90,600</em>
              <em className="totalPriceWon">원</em>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CartDetail;
