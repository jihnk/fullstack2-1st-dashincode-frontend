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
      mockData: [],
      allProduct: [],
      allProductList: [],
      allProductId: [],
      checkItems: [],
      setTotalPrice: 0,
      checked: false,
      allChecked: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/cartMockData.json', {
      header: {
        Accept: 'application / json',
      },
    })
      .then(res => res.json())
      .then(mockData => {
        const productList = [];
        mockData.forEach(el => productList.push(el.products));

        this.setState({
          mockData: mockData,
          allProduct: productList,
        });
        this.handleAllProductId();
      });
  }

  setTotalAmount = totalCategoryPrice => {
    const { setTotalPrice } = this.state;
    const setCategoryPrice = parseInt(totalCategoryPrice);

    console.log(setCategoryPrice);
    console.log(setTotalPrice);

    this.setState({
      setTotalPrice: setTotalPrice + totalCategoryPrice,
    });
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
      mockData,
      checked,
      allChecked,
      allProductId,
      checkItems,
      setTotalPrice,
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
            {mockData.map(props => {
              return (
                <CartDetail
                  key={props.id}
                  id={props.id}
                  type={props.type}
                  checked={checked}
                  checkItems={checkItems}
                  products={props.products}
                  handleChecked={this.handleSingleCheckBox}
                  setTotalAmount={this.setTotalAmount}
                />
              );
            })}
          </div>
          <TotalOrderPrice setTotalPrice={setTotalPrice} />
          <CartOrderButton />
        </div>
      </div>
    );
  }
}

export default Cart;
