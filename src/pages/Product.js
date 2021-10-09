import React from 'react';
import ProductNav from '../components/ProductNav/ProductNav';
import ProductInfo from '../components/ProductInfo/ProductInfo';

class Product extends React.Component {
  componentDidMount() {
    let loadedProduct = JSON.parse(localStorage.getItem('loadedProduct'));
    if (!loadedProduct) {
      loadedProduct = [];
      loadedProduct.unshift({
        productId: 1,
        imageUrl:
          'https://data.0app0.com/diet/shop/goods/20190930/w_20190930154033_5777044664.jpg',
      });
      localStorage.setItem('loadedProduct', JSON.stringify(loadedProduct));
    } else if (loadedProduct?.length > 15) {
      loadedProduct.pop();
      loadedProduct.unshift({
        productId: 1,
        imageUrl:
          'https://data.0app0.com/diet/shop/goods/20190930/w_20190930154033_5777044664.jpg',
      });
      localStorage.setItem('loadedProduct', JSON.stringify(loadedProduct));
    } else {
      loadedProduct.unshift({
        productId: 1,
        imageUrl:
          'https://data.0app0.com/diet/shop/goods/20190930/w_20190930154033_5777044664.jpg',
      });
      localStorage.setItem('loadedProduct', JSON.stringify(loadedProduct));
    }
    console.log(localStorage);
  }
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
