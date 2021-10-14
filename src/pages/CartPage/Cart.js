import React from 'react';
import CartHeader from '../../components/Cart/CartHeader';
import TotalSelect from '../../components/Cart/TotalSelect';
import CartDetail from '../../components/Cart/CartDetail';
import TotalOrderPrice from '../../components/Cart/TotalOrderPrice';
import CartOrderButton from '../../components/Cart/CartOrderButton';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      setProduct: [],
      allProduct: [],
      allProductList: [],
      allProductId: [],
      checkItems: [],
      totalPrice: 0,
      checked: false,
      allChecked: false,
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
        this.handleAllProductId();
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

  handleAllProductId = () => {
    const checkArray = [];
    const checkAllId = [];

    this.state.allProduct.forEach(el => {
      for (let product in el) {
        checkArray.push(el[product]);
      }
    });

    checkArray.forEach(el => {
      checkAllId.push(el.id);
    });

    this.setState({
      allProductList: checkArray,
      allProductId: checkAllId,
    });
  };

  handleSingleCheckBox = id => {
    const { checkItems } = this.state;
    let { checked } = this.state;

    if (!checked) {
      this.setState({
        checkItems: [...checkItems, id],
        checked: !checked,
      });
    } else {
      this.setState({
        checkItems: checkItems.filter(el => el !== id),
        checked: !checked,
      });
    }
  };

  //전체상품 선택이 미구현
  handleAllSelectCheckBox = e => {
    const { allProductId, checked, allChecked } = this.state;

    if (allChecked) {
      this.setState({
        checkItems: allProductId,
        checked: !checked,
        allChecked: !allChecked,
      });
    } else {
      this.setState({
        checkItems: [],
        allChecked: !allChecked,
      });
    }
  };

  render() {
    const {
      allProduct,
      checked,
      allChecked,
      allProductId,
      checkItems,
      totalPrice,
    } = this.state;
    const TotalSelectId = 0;

    return (
      <div className="cartContainer">
        <div className="cartContents">
          <CartHeader />
          <TotalSelect
            id={TotalSelectId}
            allCheckId={allProductId}
            allChecked={allChecked}
            handleChecked={this.handleAllSelectCheckBox}
          />
          <div className="productsDetailWrap">
            {allProduct.map(props => {
              return (
                <CartDetail
                  key={props.product_id}
                  id={props.product_id}
                  type={props.storage}
                  checked={checked}
                  checkItems={checkItems}
                  products={props}
                  handleChecked={this.handleSingleCheckBox}
                  setTotalAmount={this.setTotalAmount}
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
