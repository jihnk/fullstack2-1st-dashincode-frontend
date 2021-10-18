import React from 'react';
import Slider from '../components/Slider/Slider';
import SideBar from '../components/SideBar/SideBar';
import DiscountedProduct from '../components/DiscountedProduct/DiscountedProduct';
import Cardlist from '../components/List/Cardlist/Cardlist';

class Main extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <Slider />
        <DiscountedProduct />
        <Cardlist name="다신코 베스트" page="mainpage" />
      </div>
    );
  }
}

export default Main;
