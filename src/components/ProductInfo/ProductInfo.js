import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShareAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import QuantityCounter from '../QuantityCounter/QuantityCounter';
import './ProductInfo.scss';

class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      isSharable: false,
      productPrice: 8500,
      productQuantity: 1,
    };
  }

  toggleHeart = () => {
    const { isLiked } = this.state;
    this.setState({ isLiked: !isLiked });
    !isLiked
      ? window.alert('찜한 상품에 저장되었습니다.')
      : window.alert('취소되었습니다.');
  };

  toggleShare = () => {
    const { isSharable } = this.state;
    this.setState({ isSharable: !isSharable });
  };

  setQuantity = quantity => {
    this.setState({ productQuantity: quantity });
  };

  render() {
    const { isLiked, isSharable, productPrice, productQuantity } = this.state;
    const { toggleHeart, toggleShare, setQuantity } = this;

    return (
      <main className="ProductInfo">
        <aside>
          <img
            className="productThumbnail"
            alt="Hand-made Greek Yogurt"
            src="images/image0.jpg"
          />
          <div className="thumbnailContainer">
            <img
              className="littleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image0.jpg"
            />
            <img
              className="littleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image1.jpg"
            />
            <img
              className="littleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image2.jpg"
            />
            <img
              className="littleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image3.jpg"
            />
            <img
              className="littleThumbnails"
              alt="Hand-made Greek Yogurt"
              src="images/image4.jpg"
            />
          </div>
          <div className="iconContainer">
            <FontAwesomeIcon
              className={isLiked ? 'fas fa-heart active' : 'fas fa-heart'}
              onClick={toggleHeart}
              icon={faHeart}
            />
            <FontAwesomeIcon
              className="fas fa-share-alt"
              onClick={toggleShare}
              icon={faShareAlt}
            />
          </div>
          <div
            className={isSharable ? 'shareContainer active' : 'shareContainer'}
          >
            <FontAwesomeIcon
              className="fas fa-times"
              onClick={toggleShare}
              icon={faTimes}
            />
            <p>공유하기</p>
            <div>
              <Link to="#">
                <img
                  alt="Share with KakaoStory"
                  src="images/ico_sns_kakaostory.gif"
                />
              </Link>
              <Link to="#">
                <img
                  alt="Share with Facebook"
                  src="images/ico_sns_facebook.gif"
                />
              </Link>
              <Link to="#">
                <img
                  alt="Share with Twitter"
                  src="images/ico_sns_twitter.gif"
                />
              </Link>
            </div>
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
              <em>{productPrice.toLocaleString()}</em>원
            </dd>
            <dt>적립금</dt>
            <dd>
              {(productPrice * 0.01).toLocaleString()}원 적립 (실 결제금액의 1%)
            </dd>
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

          <div className="orderContainer">
            <QuantityCounter
              quantity={productQuantity}
              setQuantity={setQuantity}
            />
            <p>
              총 상품금액{' '}
              <span>
                <em>{(productPrice * productQuantity).toLocaleString()}</em>원
              </span>
            </p>
            <button className="buy">구매하기</button>
            <button className="cart">장바구니</button>
          </div>
        </section>
      </main>
    );
  }
}

export default ProductInfo;
