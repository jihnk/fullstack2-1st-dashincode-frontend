import React from 'react';
import CartHeader from '../../components/Cart/CartHeader';
import TotalOrder from '../../components/Cart/TotalOrder';
import CartDetail from '../../components/Cart/CartDetail';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="cartContents">
          <CartHeader />
          <TotalOrder />
          <CartDetail />
        </div>
      </div>
    );
  }
}

export default Cart;
