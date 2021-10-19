import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductNav from './ProductNav/ProductNav';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductDesc from './ProductDesc/ProductDesc';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <ProductNav />
        <ProductInfo />
        <ProductDesc />
      </div>
    );
  }
}

export default withRouter(Product);
