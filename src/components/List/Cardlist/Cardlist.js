import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Cookies from 'universal-cookie';
import Card from '../Card/Card';
import './Cardlist.scss';

const cookie = new Cookies();
class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {
      productQuantity: 0,
      products: [],
    };
  }

  // toggleLike = () => {
  // const { id } = this.props.match.params;
  //   if (cookie.get('user')) {
  //     fetch(`/like/${id}`, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         this.setState({ isLiked: res.DATA }, () => {
  //           this.state.isLiked
  //             ? alert('찜한 상품에 저장되었습니다.')
  //             : alert('취소되었습니다.');
  //         });
  //       });
  //   } else {
  //     alert('로그인 후 이용 가능한 서비스입니다');
  //   }
  // };

  // toggleLike = id => {
  //   const { products } = this.state;
  //   const newProducts = [...products];
  //   for (let i = 0; i < newProducts.length; i++) {
  //     if (newProducts[i].id === id) {
  //       newProducts[i].isLiked = !newProducts[i].isLiked;
  //       newProducts[i].isLiked
  //         ? window.alert('찜한 상품에 저장되었습니다.')
  //         : window.alert('취소되었습니다.');
  //       return newProducts;
  //     }
  //   }
  //   this.setState = {
  //     foodProducts: newProducts,
  //   };
  // };

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
      const queryObj = queryString.parse(search, { decode: 'false' });
      const { words } = queryObj;
      fetch(`/list?value=${words}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
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
