import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Like from './Like';
import './Card.scss';

const cookie = new Cookies();
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  getDiscountRate = (num1, num2) => {
    return Math.round(100 - (num1 / num2) * 100);
  };

  toggleLike = () => {
    const { id } = this.props.product;
    if (cookie.get('user')) {
      fetch(`/like/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ isLiked: res.DATA }, () => {
            this.state.isLiked
              ? alert('찜한 상품에 저장되었습니다.')
              : alert('취소되었습니다.');
          });
        });
    } else {
      alert('로그인 후 이용 가능한 서비스입니다');
    }
  };

  render() {
    const {
      id,
      discounted_price,
      price,
      description,
      reviewCount,
      shipment,
      image_url,
      name,
    } = this.props.product;
    const { isLiked } = this.state;
    return (
      <li className="foodProduct">
        <div className="foodImage">
          <Link to={`/product/${id}`}>
            <img src={image_url} alt={name} />
          </Link>
          <Like toggleLike={this.toggleLike} isLiked={isLiked} id={id} />
        </div>
        <div className="productDetails">
          <div className="productName">
            <p className="name">{name}</p>
          </div>
          <div className="productPrice">
            <div className="prices">
              <span className="discountedPrice">{`${discounted_price.toLocaleString(
                'ko-KR'
              )}원`}</span>
              <span
                className={
                  price !== discounted_price
                    ? 'originalPrice'
                    : 'originalPrice notOnSale'
                }
              >{`${price.toLocaleString('ko-KR')}원`}</span>
            </div>
            <div
              className={
                price !== discounted_price
                  ? 'discountRate'
                  : 'discountRate notOnSale'
              }
            >
              {`${this.getDiscountRate(discounted_price, price)}%`}
            </div>
          </div>
          <p className="productDescription">{description}</p>
          <div className="reviewAndShipment">
            <div className="reviewCount">{`리뷰: ${reviewCount.toLocaleString(
              'ko-KR'
            )}`}</div>
            <ul className="shipments">
              {shipment.length === 0 && <li className="isBasic">기본배송</li>}
              {shipment &&
                shipment.map((item, id) => {
                  let className = '';
                  if (item === '다코쿨배송') {
                    className = 'isCool';
                  }
                  if (item === '다코배송') {
                    className = 'isDaco';
                  }
                  if (item === '무료배송') {
                    className = 'isFree';
                  }
                  if (item === '기본배송') {
                    className = 'isBasic';
                  }
                  return (
                    <li key={id} className={className}>
                      {item}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
