import React from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';
import './Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      id,
      toggleLike,
      discounted_price,
      price,
      description,
      reviewCount,
      shipment,
      image_url,
      name,
    } = this.props;
    return (
      <li className="foodProduct">
        <div className="foodImage">
          <Link to={`/product/${id}`}>
            <img src={image_url} alt={name} />
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
