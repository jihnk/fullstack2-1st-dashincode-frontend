import React from 'react';
import ProductNav from '../components/ProductNav/ProductNav';
import ProductInfo from '../components/ProductInfo/ProductInfo';

class Product extends React.Component {
  render() {
    return (
      <div>
        <ProductNav />
        <ProductInfo />
      </div>
    );
  }
}

export default Product;
