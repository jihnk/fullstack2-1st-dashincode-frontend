import React from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';
import './Card.scss';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      foodProducts: [],
      isLiked: false,
    };
  }

  getDiscountRate = (num1, num2) => {
    return Math.round(100 - (num1 / num2) * 100);
  };

  componentDidMount() {
    const { id } = this.props;
    fetch(`/like/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ isLiked: res.DATA });
      });
  }

  render() {
    const {
      toggleLike,
      id,
      discounted_price,
      price,
      description,
      reviewCount,
      shipment,
      img_url,
      name,
    } = this.props;
    return (
      <li className="foodProduct">
        <div className="foodImage">
          <Link to={`/product/${id}`}>
            <img src={img_url} alt={name} />
          </Link>
          <Like
            toggleLike={toggleLike}
            isLiked={this.state.isLiked}
            id={id}
            className={this.state.isLiked ? 'fa-heart fill' : 'fa-heart'}
          />
        </div>
        <div className="productDetails">
          <div className="productName">
            <p>{name}</p>
          </div>
          <div className="productPrice">
            <div className="prices">
              <span className="discountedPrice">{`${discounted_price.toLocaleString(
                'ko-KR'
              )}원`}</span>
              <span className="originalPrice">{`${price.toLocaleString(
                'ko-KR'
              )}원`}</span>
            </div>
            <div className="discountRate">
              {`${this.getDiscountRate(discounted_price, price)}%`}
            </div>
          </div>
          <p className="productDescription">{description}</p>
          <div className="reviewAndShipment">
            <div className="reviewCount">{`리뷰: ${reviewCount.toLocaleString(
              'ko-KR'
            )}`}</div>
            <ul className="shipment">
              {shipment.length === 0 && <li className="isBasic">기본배송</li>}
              {shipment &&
                shipment.map((shipment, id) => {
                  return (
                    <li key={id} className={shipment}>
                      {shipment === 'isCool'
                        ? '다신쿨배송'
                        : shipment === 'isFree'
                        ? '무료배송'
                        : shipment === 'isDashin'
                        ? '다신배송'
                        : shipment === 'isBasic'
                        ? '기본배송'
                        : shipment}
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
