import React from 'react';
import CartHeader from '../../components/Cart/CartHeader';
import TotalOrder from '../../components/Cart/TotalSelect';
import CartDetail from '../../components/Cart/CartDetail';
import TotalOrderPrice from '../../components/Cart/TotalOrderPrice';
import CartOrderButton from '../../components/Cart/CartOrderButton';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      normalDelivery: [],
      coolDelivery: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/cartMockData.json', {
      header: {
        Accept: 'application / json',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
          normalDelivery: data[0].products,
          coolDelivery: data[1].products,
        });
      });
  }

  render() {
    const { products, normalDelivery, coolDelivery } = this.state;

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
