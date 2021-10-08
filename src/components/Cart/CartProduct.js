import React from 'react';
import CheckBox from '../shared/CheckBox';
import './CartProduct.scss';

export class CartProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      setQuantity: null,
      setPrice: null,
    };
  }

  componentDidMount() {
    const { quantity, price } = this.props.products;

    this.setState({
      setQuantity: quantity,
      setPrice: price,
    });
  }

  minusQuantity = () => {
    const { setQuantity } = this.state;
    const numQuantity = parseInt(setQuantity);

    this.setState({
      setQuantity: numQuantity - 1,
    });
  };

  plusQuantity = () => {
    const { setQuantity } = this.state;
    const numQuantity = parseInt(setQuantity);

    this.setState({
      setQuantity: numQuantity + 1,
    });
  };

  render() {
    const { id, products, checked, checkItems, handleChecked } = this.props;
    const { setQuantity, setPrice } = this.state;

    return (
      <div className="cartDetailContainer">
        <div className="cartDetailWrap">
          <div className="checkBoxWrap">
            <CheckBox
              id={id}
              checked={checked}
              checkItems={checkItems}
              handleChecked={handleChecked}
            />
          </div>
          <div className="orderImgWrap">
            <a href="#">
              <img
                alt={products.name}
                src={products.image_url}
                className="orderDetailImg"
              />
            </a>
          </div>
          <div className="orderInfoWrap">
            <p className="orderTitle" href="#">
              {products.name}
            </p>
            <ul className="orderInfoArea">
              <li className="orderInfoWrap">
                <div className="orderInfoTitle">{products.description}</div>
                <span className="orderCntBtnWrap">
                  <a id={id} className="cntBtn" onClick={this.minusQuantity}>
                    -
                  </a>
                  <span className="orderCntWrap">
                    <span className="orderCnt" id={id}>
                      {setQuantity}
                    </span>
                  </span>
                  <a id={id} className="cntBtn" onClick={this.plusQuantity}>
                    +
                  </a>
                </span>
                <span className="orderPriceWrap">
                  <em class="priceText">전체 금액:</em>
                  <em class="price">
                    {(setPrice * setQuantity).toLocaleString()}
                  </em>
                  <em class="priceText">원</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lineWrap">
          <hr className="line" />
        </div>
      </div>
    );
  }
}

export default CartProduct;
