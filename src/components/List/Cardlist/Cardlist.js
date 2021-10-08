import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card/Card';
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
    const { page } = this.props;
    if (page === 'main') {
      fetch('http://localhost:3000/data/listData.json')
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            foodProducts: data.FIRST_DATA.filter(
              product => product.reviewCount > 3000
            ),
          });
        });
    }
    if (page === 'category') {
      const { id, number } = this.props.match.params;
      if (number === undefined) {
        fetch('http://localhost:3000/data/listData.json')
          .then(res => res.json())
          .then(data => {
            this.setState({
              foodProducts: data.FIRST_DATA.filter(
                product => product.mainCategoryId === +id
              ),
            });
          });
      } else {
        fetch('http://localhost:3000/data/listData.json')
          .then(res => res.json())
          .then(data => {
            this.setState({
              foodProducts: data.FIRST_DATA.filter(
                product =>
                  product.mainCategoryId === +id &&
                  product.subCategoryId === +number
              ),
            });
          });
      }
    }
    if (page === 'list') {
      const { sort } = this.props.match.params;
      if (sort === 'bestproducts') {
        fetch('http://localhost:3000/data/listData.json')
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({
              foodProducts: data.FIRST_DATA.filter(
                product => product.reviewCount > 10000
              ),
            });
          });
      } else if (sort === 'specialprice') {
        fetch('http://localhost:3000/data/listData.json')
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({
              foodProducts: data.FIRST_DATA.filter(
                product => product.discountedPrice < 5000
              ),
            });
          });
      } else {
        fetch('http://localhost:3000/data/listData.json')
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({
              foodProducts: data.FIRST_DATA.filter(product => product.id < 10),
            });
          });
      }
    }
  }
  render() {
    const { foodProducts } = this.state;
    return (
      <div className="List">
        <h1 className="listTitle">{this.props.name}</h1>
        <ul className="sorts">
          <li className="sortBypop">인기순</li>
          <li className="sortByTime">등록순</li>
          <li className="sortByPrice">낮은가격순</li>
        </ul>
        <ul className="foodList">
          {foodProducts.map(product => {
            return <Card {...product} toggleLike={this.toggleLike} />;
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Cardlist);
