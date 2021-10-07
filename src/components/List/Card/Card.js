import React from 'react';
import Like from './Like';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
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

  // toggleLike = id => {
  //   const { foodProducts } = this.state;
  //   const newFoodProducts = [...foodProducts];
  //   for (let i = 0; i < newFoodProducts.length; i++) {
  //     if (newFoodProducts[i].id === id) {
  //       newFoodProducts[i].isLiked = !newFoodProducts[i].isLiked;
  //       newFoodProducts[i].isLiked
  //         ? window.alert('찜한 상품에 저장되었습니다.')
  //         : window.alert('취소되었습니다.');
  //     }
  //   }
  //   this.setState = {
  //     foodProducts: newFoodProducts,
  //   };
  // };

  render() {
    const { toggleLike, toggleCart, isLiked, id } = this.props;
    console.log(isLiked);
    return (
      <li className="foodProduct">
        <div className="rank">{`${this.props.id}위`}</div>
        <div className="foodImage">
          <img src={this.props.src} alt={this.props.alt} />
          <Like
            // onClick={toggleLike}
            toggleLike={toggleLike}
            isLiked={isLiked}
            id={id}
            className={isLiked ? 'fa-heart fill' : 'fa-heart'}
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
              <span className="discountedPrice">{`${this.props.discountedPrice.toLocaleString(
                'ko-KR'
              )}원`}</span>
              <span className="originalPrice">{`${this.props.price.toLocaleString(
                'ko-KR'
              )}원`}</span>
            </div>
            <div className="discountRate">
              {`${this.getDiscountRate(
                this.props.discountedPrice,
                this.props.price
              )}%`}
            </div>
          </div>
          <p className="productDescription">{this.props.description}</p>
          <div className="reviewAndShipment">
            <div className="reviewCount">{`리뷰: ${this.props.reviewCount.toLocaleString(
              'ko-KR'
            )}`}</div>
            <div className="shipment">{`${this.props.shipment}`}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
