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
      totalDeliveryPrice: 0,
      isFree: false,
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

  setTotalAmount = (totalCategoryPrice, setOrderPrice, sign) => {
    let { isFree } = this.state;

    if (sign === '-') {
      this.setState(prev => {
        return {
          totalPrice: prev.totalPrice - totalCategoryPrice,
          totalDeliveryPrice:
            isFree === false && setOrderPrice < 30000
              ? prev.totalDeliveryPrice + 3000
              : prev.totalDeliveryPrice,
          isFree: setOrderPrice < 30000 ? true : false,
        };
      });
    } else {
      this.setState(prev => {
        return {
          totalPrice: prev.totalPrice + totalCategoryPrice,
          totalDeliveryPrice:
            setOrderPrice >= 30000 && isFree
              ? prev.totalDeliveryPrice - 3000
              : prev.totalDeliveryPrice,
          isFree: setOrderPrice >= 30000 ? false : true,
        };
      });
    }
  };

  setTotalPrice = setOrderPrice => {
    this.setState(prev => {
      return {
        totalPrice: prev.totalPrice + setOrderPrice,
        totalDeliveryPrice:
          setOrderPrice < 30000
            ? prev.totalDeliveryPrice + 3000
            : prev.totalDeliveryPrice,
      };
    });
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
    const { allProduct, totalPrice, totalDeliveryPrice } = this.state;

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
                    {...props}
                    setTotalAmount={this.setTotalAmount}
                    setTotalPrice={this.setTotalPrice}
                    handleDeleteBtn={this.handleDeleteBtn}
                  />
                );
              })}
          </div>
          <TotalOrderPrice
            totalPrice={totalPrice}
            totalDeliveryPrice={totalDeliveryPrice}
          />
          <CartOrderButton />
        </div>
      </div>
    );
  }
}

export default Cart;
