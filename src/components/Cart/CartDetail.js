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
        <div className="cartDetailContents">
          <div className="cartDetailTable">
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
              <a className="order_title" href="#">
                완벽한 한끼 식단 다신밥상
              </a>
              <ul className="orderInfoArea">
                <li className="orderInfoWrap">
                  <span className="orderInfoTitle">
                    기본옵션: *특가* 1주 식단세트(5팩)
                  </span>
                  <span className="orderCntBtnWrap">
                    <a id="minBtn" className="minusBtn">
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
                    <a id="minBtn" className="minusBtn">
                      +
                    </a>
                  </span>
                  <span className="orderPriceWrap">
                    <em class="price">8,500원</em>
                  </span>
                  <span className="deleteBtnWrap">
                    <FontAwesomeIcon icon={faBan} className="deleteBtn" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartDetail;
