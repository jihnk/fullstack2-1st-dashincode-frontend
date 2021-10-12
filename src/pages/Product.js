import React from 'react';
import ProductNav from '../components/ProductNav/ProductNav';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import CommentList from '../components/Comment/CommentList';

class Product extends React.Component {
  render() {
    return (
      <div>
        <ProductNav />
        <ProductInfo />
        <CommentList />
      </div>
    );
  }
}

export default Product;
