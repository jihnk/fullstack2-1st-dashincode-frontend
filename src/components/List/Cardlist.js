import React from 'react';
import Card from './Card';
import Cart from './Cart';
import './List.scss';

export class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {
      foodProducts: [],
      cart: false,
    };
  }

  toggleLike = id => {
    const { foodProducts } = this.state;
    const newFoodProducts = [...foodProducts];
    for (let i = 0; i < newFoodProducts.length; i++) {
      if (newFoodProducts[i].id === id) {
        newFoodProducts[i].isLiked = !newFoodProducts[i].isLiked;
        newFoodProducts[i].isLiked
          ? window.alert('찜한 상품에 저장되었습니다.')
          : window.alert('취소되었습니다.');
      }
    }
    this.setState = {
      foodProducts: newFoodProducts,
    };
  };

  toggleCart = id => {
    const { foodProducts } = this.state;
    const newFoodProducts = [...foodProducts];
    for (let i = 0; i < newFoodProducts.length; i++) {
      if (newFoodProducts[i].id === id) {
        newFoodProducts[i].cart = !newFoodProducts[i].cart;
      }
    }
    this.setState = {
      foodProducts: newFoodProducts,
    };
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          foodProducts: data.FIRST_DATA,
        });
      });
  }

  render() {
    const { foodProducts, isLiked } = this.state;
    return (
      <div className="List">
        <div className="sorts">
          <button>인기순</button>
          <button>등록순</button>
          <button>낮은가격순</button>
        </div>
        <ul className="foodList">
          {foodProducts.map(product => {
            return (
              <Card
                key={product.id}
                id={product.id}
                src={product.img}
                alt={product.name}
                price={product.price}
                discountedPrice={product.discountedPrice}
                description={product.description}
                reviewCount={product.reviewCount}
                isLiked={product.isLiked}
                toggleLike={this.toggleLike}
                toggleCart={this.toggleCart}
                cart={product.cart}
                className={isLiked ? 'fill' : 'fa-heart'}
              />
            );
          })}
          {foodProducts.map(product => {
            return (
              <Cart
                key={product.id}
                id={product.id}
                alt={product.name}
                discountedPrice={product.discountedPrice}
                reviewCount={product.reviewCount}
                // onClick={this.toggleCart}
                cart={product.cart}
                className={product.cart ? 'open' : 'close'}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cardlist;
