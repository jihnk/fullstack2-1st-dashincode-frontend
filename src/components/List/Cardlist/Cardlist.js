import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Card from '../Card/Card';
import './Cardlist.scss';
class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {
      productQuantity: 0,
      products: [],
    };
  }

  //user가 아니면 회원만 이용할 수 있는 기능임을 알려준다
  //회원이면? 좋아요 처리

  toggleLike = id => {
    const { products } = this.state;
    const newProducts = [...products];
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === id) {
        newProducts[i].isLiked = !newProducts[i].isLiked;
        newProducts[i].isLiked
          ? window.alert('찜한 상품에 저장되었습니다.')
          : window.alert('취소되었습니다.');
        return newProducts;
      }
    }
    this.setState = {
      foodProducts: newProducts,
    };
  };

  componentDidMount() {
    const { page } = this.props;
    if (page === 'mainpage') {
      fetch(`/list/mainpage`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    } else if (page === 'search') {
      const { search } = this.props.location;
      const queryObj = queryString.parse(search);
      const { words } = queryObj;
      fetch(
        `/list?value=${words}`
          .then(res => res.json())
          .then(res => {
            this.setState({ products: res.DATA });
          })
      );
    } else if (page === 'list') {
      const { main, sub } = this.props.match.params;
      if (sub === undefined) {
        fetch(`/list/main/${main}`)
          .then(res => res.json())
          .then(res => {
            this.setState({ products: res.DATA });
          });
      } else {
        fetch(`/list/sub/${sub}`)
          .then(res => res.json())
          .then(res => {
            this.setState({ products: res.DATA });
          });
      }
    } else if (page === 'category') {
      const { sort } = this.props.match.params;
      fetch(`/list/${sort}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div className="List">
        <h1 className="listTitle">{this.props.name}</h1>
        <ul className="sorts">
          <li className="sortBypop">인기순</li>
          <li className="sortByTime">등록순</li>
          <li className="sortByPrice">낮은가격순</li>
        </ul>
        <ul className="foodList">
          {products &&
            products.map(product => {
              return <Card {...product} toggleLike={this.toggleLike} />;
            })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Cardlist);
