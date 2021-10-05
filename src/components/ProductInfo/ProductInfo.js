import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './ProductInfo.scss';

export class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLikedHeart: false,
    };
  }

  toggleHeart = () => {
    const { isLikedHeart } = this.state;
    this.setState({ isLikedHeart: !isLikedHeart });
  };

  render() {
    const { isLikedHeart } = this.state;
    const { toggleHeart } = this;
    return (
      <main className="ProductInfo">
        <aside>
          <img
            className="ProductThumbnail"
            alt="Hand-made Greek Yogurt"
            src="images/image0.jpg"
          />
          <div id="ThumbnailContainer">
            <img
              className="LittleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image0.jpg"
            />
            <img
              className="LittleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image1.jpg"
            />
            <img
              className="LittleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image2.jpg"
            />
            <img
              className="LittleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image3.jpg"
            />
            <img
              className="LittleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image4.jpg"
            />
          </div>
          <div id="IconContainer">
            <FontAwesomeIcon
              className={isLikedHeart ? 'fas fa-heart active' : 'fas fa-heart'}
              onClick={toggleHeart}
              icon={faHeart}
            />
            <FontAwesomeIcon className="fas fa-share-alt" icon={faShareAlt} />
          </div>
        </aside>

        <section>
          <h2>
            <Link to="#">다신배송</Link>
            <span>{'>'}</span>
          </h2>
          <h1>(예약 배송) 찐한 수제 그릭요거트</h1>
          <p>[매주 화/수/목 출고] 당류 0g, 유산균과 우유로만 만들었어요.</p>

          <dl>
            <dt>판매가격</dt>
            <dd>
              <em>8,500</em>원
            </dd>
            <dt>적립금</dt>
            <dd>85원 적립 (실 결제금액의 1%)</dd>
          </dl>
          <dl>
            <dt>보관방법</dt>
            <dd>냉장(아이스박스/보냉백 포장)</dd>
            <dt>배송비</dt>
            <dd>
              <Link to="#">다신배송</Link>
              <strong> 30,000원</strong> 이상 구매 시 <strong>무료배송</strong>
            </dd>
            <dt>배송방법</dt>
            <dd>(다신샵에서 직접배송)</dd>
            <dt>택배사</dt>
            <dd>롯데택배</dd>
          </dl>

          <div id="OrderContainer">
            수량: <input type="number" value="1" />
            <p>
              총 상품금액{' '}
              <span>
                <em>8,500</em>원
              </span>
            </p>
            <button className="BuyButton">구매하기</button>
            <button className="CartButton">장바구니</button>
          </div>
        </section>
      </main>
    );
  }
}

export default ProductInfo;
