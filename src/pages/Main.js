import React from 'react';
import Slider from '../components/Slider/Slider';
import ScrollTo from '../components/SideBar/ScrollTo';
import SideBar from '../components/SideBar/SideBar';
import DiscountedProduct from '../components/DiscountedProduct/DiscountedProduct';

class Main extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <ScrollTo />
        <Slider />
        <DiscountedProduct />
      </div>
    );
  }
}

export default Main;
