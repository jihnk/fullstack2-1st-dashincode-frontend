import React, { Component } from 'react';
import CheckBox from '../shared/CheckBox';
import CartProduct from './CartProduct';
import './CartDetail.scss';

class CartDetail extends Component {
  constructor() {
    super();
    this.state = {
      categoryTotalPrice: null,
      totalOrderPrice: null,
      isFree: false,
    };
  }

  // 현재 데이터에 저장된 가격만 총 주문금액으로 보여주고, cnt버튼 작동 시 총금액 합산 기능은 미구현됨
  componentDidMount() {
    const { products } = this.props;
    const reducer = (acc, cur) => acc + cur;
    const priceList = [];

    products.forEach(el => priceList.push(parseInt(el.price * el.quantity)));
    const totalCategoryPrice = priceList.reduce(reducer);
    const isTrue = totalCategoryPrice > 30000 ? true : false;

    this.setState({
      categoryTotalPrice: totalCategoryPrice,
      isFree: isTrue,
    });
  }

  setCategoryTotalAmount = (productPrice, sign) => {
    const { categoryTotalPrice } = this.state;
    const setProductPrice = parseInt(productPrice);

    sign === '-'
      ? this.setState({
          categoryTotalPrice: categoryTotalPrice - setProductPrice,
        })
      : this.setState({
          categoryTotalPrice: categoryTotalPrice + setProductPrice,
        });
  };

  render() {
    const { id, type, products, checked, checkItems, handleChecked } =
      this.props;
    let { categoryTotalPrice, isFree } = this.state;
    // console.log(categoryTotalPrice);

    return (
      <div className="cartDetailContainer">
        <div className="cartDetailHeaderWrap">
          <CheckBox
            id={id}
            checked={checked}
            checkItems={checkItems}
            handleChecked={handleChecked}
          />
          <header class="cartDetailHeader">{type}</header>
        </div>
        <section className="cartDetailContents">
          {products.map(props => {
            for (let i = 0; i < products.length; i++) {
              return (
                <>
                  <CartProduct
                    key={props.id}
                    id={props.id}
                    products={props}
                    checked={checked}
                    checkItems={checkItems}
                    handleChecked={handleChecked}
                    categoryTotalPrice={categoryTotalPrice}
                    setCategoryTotalAmount={this.setCategoryTotalAmount}
                  />
                </>
              );
            }
          })}
        </section>
        <section className="orderTotalPriceContainer">
          <div className="orderTotalPriceWrap">
            <div className="orderPriceWrap">
              <p className="orderPriceName">주문금액</p>
              <em className="orderPrice">
                {parseInt(categoryTotalPrice).toLocaleString()}
              </em>
              <em className="orderPriceWon">원</em>
            </div>
            <p className="sign">+</p>
            <div className="deliveryWrap">
              <p className="deliveryTitle">배송비</p>
              <p className="deliveryPrice">{isFree ? '무료배송' : '3,000원'}</p>
            </div>
            <p className="sign">=</p>
            <div className="totalPriceWrap">
              <p className="totalPriceTitle">결제금액</p>
              <em className="totalPrice">
                {isFree
                  ? categoryTotalPrice.toLocaleString()
                  : (categoryTotalPrice + 3000).toLocaleString()}
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
