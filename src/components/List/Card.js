import React from 'react';
import Likes from './Likes';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FoodCard extends React.Component {
  getDiscountRate = (num1, num2) => {
    return Math.round(100 - (num1 / num2) * 100);
  };

  render() {
    const { toggleLike, toggleCart, isLiked, id } = this.props;
    return (
      <li className="foodProduct">
        <div className="rank">{`${this.props.id}위`}</div>
        <div className="foodImage">
          <img src={this.props.src} alt={this.props.alt} />
          <Likes
            toggleLike={toggleLike}
            isLiked={isLiked}
            id={id}
            className={isLiked ? 'fill' : 'empty'}
          />
          <FontAwesomeIcon
            onClick={() => toggleCart(id)}
            icon={faShoppingBag}
            id={id}
          />
        </div>
        <div className="productDetails">
          <div className="productName">
            <p>{this.props.alt}</p>
          </div>
          <div className="productPrice">
            <div className="prices">
              <span className="discountedPrice">{`${this.props.discountedPrice}원`}</span>
              <span className="price">{`${this.props.price}원`}</span>
            </div>
            <div className="discountRate">
              {`${this.getDiscountRate(
                this.props.discountedPrice,
                this.props.price
              )}%`}
            </div>
          </div>
          <div className="productDescription">
            <p>{this.props.description}</p>
          </div>
          <div className="productProperty">
            <div className="reviewCount">{`리뷰: ${this.props.reviewCount}`}</div>
            <div className="shipment">{`${this.props.ship}`}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default FoodCard;
