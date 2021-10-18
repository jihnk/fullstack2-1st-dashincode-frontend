import React from 'react';
import CartDetail from '../../components/Cart/CartDetail';
import CartHeader from '../../components/Cart/CartHeader';
import TotalOrderPrice from '../../components/Cart/TotalOrderPrice';
import CartOrderButton from '../../components/Cart/CartOrderButton';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      setProduct: [],
      allProduct: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch('/cart', {
      header: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(setProduct => {
        this.setState({
          setProduct: setProduct,
          allProduct: setProduct.products,
        });
      });
  }

  setTotalAmount = (totalCategoryPrice, sign) => {
    if (sign === '-' && this.state.totalPrice > 0) {
      this.setState(prev => {
        return { totalPrice: prev.totalPrice - totalCategoryPrice };
      });
    } else {
      this.setState(prev => {
        return { totalPrice: prev.totalPrice + totalCategoryPrice };
      });
    }
  };

  handleDeleteBtn = id => {
    const { allProduct } = this.state;
    fetch(`/cart/${id}`, {
      method: 'DELETE',
      header: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        product_id: id,
      }),
    })
      .then(res => res.json())
      .then(setProduct => {
        this.setState({
          allProduct: allProduct.filter(product => product.product_id !== id),
        });
      })
      .then(window.location.reload());
  };

  render() {
    const { allProduct, totalPrice } = this.state;

    return (
      <div className="cartContainer">
        <CartHeader />
        <div className="cartContents">
          <div className="productsDetailWrap">
            {allProduct &&
              allProduct.map(props => {
                return (
                  <CartDetail
                    key={props.product_id}
                    id={props.product_id}
                    type={props.storage}
                    products={props}
                    handleChecked={this.handleSingleCheckBox}
                    setTotalAmount={this.setTotalAmount}
                    handleDeleteBtn={this.handleDeleteBtn}
                  />
                );
              })}
          </div>
          <TotalOrderPrice totalPrice={totalPrice} />
          <CartOrderButton />
        </div>
      </div>
    );
  }
}

export default Cart;
