import React from 'react';
import Slider from '../components/Slider/Slider';
import DiscountedProduct from '../components/DiscountedProduct/DiscountedProduct';
class Main extends React.Component {
  render() {
    return (
      <div>
        <Slider />
        <DiscountedProduct />
      </div>
    );
  }
}

export default Main;
