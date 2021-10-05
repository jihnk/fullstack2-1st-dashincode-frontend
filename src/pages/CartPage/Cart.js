import React from 'react';
import CartHeader from '../../components/Cart/CartHeader';
import TotalOrder from '../../components/Cart/TotalSelect';
import CartDetail from '../../components/Cart/CartDetail';
import TotalOrderPrice from '../../components/Cart/TotalOrderPrice';
import CartOrderButton from '../../components/Cart/CartOrderButton';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="cartContents">
          <CartHeader />
          <TotalOrder />
          <CartDetail />
          <TotalOrderPrice />
          <CartOrderButton />
        </div>
      </div>
    );
  }
}

export default Cart;
