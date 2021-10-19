import React, { Component } from 'react';
import CartProduct from './CartProduct';
import './CartDetail.scss';

class CartDetail extends Component {
  constructor() {
    super();
    this.state = {
      orderPrice: 0,
      isFreeDelivery: false,
    };
  }

  componentDidMount() {
    const product = [this.props];
    const { setTotalPrice } = this.props;
    const { orderPrice } = this.state;
    const reducer = (acc, cur) => acc + cur;
    const priceList = [];

    product.forEach(el => priceList.push(parseInt(el.price * el.quantity)));
    const setOrderPrice = priceList.reduce(reducer);
    setTotalPrice(setOrderPrice);

    this.setState({
      orderPrice: orderPrice + setOrderPrice,
      isFreeDelivery: setOrderPrice > 30000 ? true : false,
    });
  }

  setCategoryTotalAmount = (productPrice, sign) => {
    const { orderPrice } = this.state;
    const { setTotalAmount } = this.props;
    const setProductPrice = parseInt(productPrice);
    let setOrderPrice =
      (sign === '-' && orderPrice - setProductPrice) ||
      (sign === '+' && orderPrice + setProductPrice);
    let isFree = setOrderPrice < 30000 ? false : true;

    setTotalAmount(setProductPrice, setOrderPrice, sign);

    this.setState({
      orderPrice: setOrderPrice > 0 ? setOrderPrice : 0,
      isFreeDelivery: isFree,
    });
  };

  render() {
    const { shipment, storage, product_id, handleDeleteBtn } = this.props;
    let { orderPrice, isFreeDelivery } = this.state;
    const productList = [this.props];

    return (
      <div className="cartDetailContainer">
        <div className="cartDetailHeaderWrap">
          <header className="cartDetailHeader">
            {shipment}[{storage}]
          </header>
        </div>
        <section className="cartDetailContents">
          {productList.map(props => {
            for (let i = 0; i < productList.length; i++) {
              return (
                <div className="cartProductWrap" key={product_id}>
                  <CartProduct
                    {...props}
                    orderPrice={orderPrice}
                    setCategoryTotalAmount={this.setCategoryTotalAmount}
                    handleDeleteBtn={handleDeleteBtn}
                  />
                </div>
              );
            }
          })}
        </section>
        <section className="orderTotalPriceContainer">
          <div className="orderTotalPriceWrap">
            <div className="orderPriceWrap">
              <p className="orderPriceName">주문금액</p>
              <em className="orderPrice">
                {parseInt(orderPrice).toLocaleString()}
              </em>
              <em className="orderPriceWon">원</em>
            </div>
            <p className="sign">+</p>
            <div className="deliveryWrap">
              <p className="deliveryTitle">배송비</p>
              <p className="deliveryPrice">
                {isFreeDelivery ? '무료배송' : '3,000원'}
              </p>
            </div>
            <p className="sign">=</p>
            <div className="totalPriceWrap">
              <p className="totalPriceTitle">결제금액</p>
              <em className="totalPrice">
                {isFreeDelivery
                  ? orderPrice.toLocaleString()
                  : (orderPrice + 3000).toLocaleString()}
              </em>
              <em className="totalPriceWon">원</em>
            </div>
          </div>
        </section>
        <div className="spacingBetweenProducts" />
      </div>
    );
  }
}

export default CartDetail;
