import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Like from './Like';
import './Card.scss';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      foodProducts: [],
    };
  }

  getDiscountRate = (num1, num2) => {
    return Math.round(100 - (num1 / num2) * 100);
  };

  render() {
    const {
      toggleLike,
      toggleCart,
      isLiked,
      id,
      closeCart,
      addQuantity,
      discountedPrice,
      price,
      description,
      reviewCount,
      isCool,
      isDashin,
      isFree,
      img,
      name,
    } = this.props;
    return (
      <li className="foodProduct">
        <div className="rank">{`${id}위`}</div>
        <div className="foodImage">
          <Link to={`/product/${id}`}>
            <img src={img} alt={name} />
          </Link>
          <Like
            toggleLike={toggleLike}
            isLiked={isLiked}
            id={id}
            className={isLiked ? 'fa-heart fill' : 'fa-heart'}
          />
          <FontAwesomeIcon
            toggleCart={toggleCart}
            onClick={toggleCart}
            icon={faShoppingBag}
            id={id}
            closeCart={closeCart}
            addQuantity={addQuantity}
          />
        </div>
        <div className="productDetails">
          <div className="productName">
            <p>{name}</p>
          </div>
          <div className="productPrice">
            <div className="prices">
              <span className="discountedPrice">{`${discountedPrice.toLocaleString(
                'ko-KR'
              )}원`}</span>
              <span className="originalPrice">{`${price.toLocaleString(
                'ko-KR'
              )}원`}</span>
            </div>
            <div className="discountRate">
              {`${this.getDiscountRate(discountedPrice, price)}%`}
            </div>
          </div>
          <p className="productDescription">{description}</p>
          <div className="reviewAndShipment">
            <div className="reviewCount">{`리뷰: ${reviewCount.toLocaleString(
              'ko-KR'
            )}`}</div>
            <ul className="shipment">
              {isFree && <li className="isFree">무료배송</li>}
              {isDashin && <li className="isDashin">다신배송</li>}
              {isCool && <li className="isCool">다신쿨배송</li>}
              {!isFree && !isDashin && !isCool && (
                <li className="isBasic">기본배송</li>
              )}
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
