import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Cardlist.scss';

class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {
      foodProducts: [],
      productQuantity: 0,
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
        return newFoodProducts;
      }
    }
    this.setState = {
      foodProducts: newFoodProducts,
    };
  };

  componentDidMount() {
    const { name } = this.props;
    // if (name === 'mainpage') {
    //   fetch('http://localhost:3000/data/listData.json')
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(data => {
    //       this.setState({
    //         foodProducts: data.FIRST_DATA.filter(
    //           product => product.reviewCount > 3000
    //         ),
    //       });
    //     });
    // }
    if (name === 'listpage') {
      console.log('hh');
      const { mainCategoryId, subCategoryId } = this.props.match.params;
      console.log(mainCategoryId, subCategoryId);
      if (subCategoryId === 'undefined') {
        fetch('http://localhost:3000/data/listData.json')
          .then(res => res.json())
          .then(data => {
            this.setState({
              foodProducts: data.FIRST_DATA.filter(
                product => product.mainCategoryId === mainCategoryId
              ),
            });
          });
      }
    }
    // } else {
    //   const { mainCategory, subCategory } = this.props.match.params;
    //   fetch('http://localhost:3000/data/listData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({
    //         foodProducts: data.FIRST_DATA.filter(
    //           product =>
    //             (product.mainCategoryId === mainCategory) &
    //             (product.subCategoryId === subCategory)
    //         ),
    //       });
    //     });
    // }
  }

  render() {
    const { foodProducts } = this.state;
    return (
      <div className="List">
        <h1>{this.props.name}</h1>
        <ul className="sorts">
          <li className="sortBypop">인기순</li>
          <li className="sortByTime">등록순</li>
          <li className="sortByPrice">낮은가격순</li>
        </ul>
        <ul className="foodList">
          {foodProducts.map(product => {
            return (
              <>
                <Card {...product} toggleLike={this.toggleLike} />
                <Cart
                  key={product.id}
                  id={product.id}
                  alt={product.name}
                  discountedPrice={product.discountedPrice}
                  reviewCount={product.reviewCount}
                  description={product.description}
                  closeCart={() => this.closeCart(product.id)}
                  toggleCart={() => this.toggleCart(product.id)}
                  addQuantity={() => this.addQuantity(product.id)}
                />
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Cardlist);
