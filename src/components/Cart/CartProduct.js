import React from 'react';
import DeleteButton from '../shared/DeleteButton';
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
    const { quantity, price } = this.props;

    this.setState({
      setQuantity: quantity,
      setPrice: price,
    });
  }

  minusQuantity = sign => {
    const { setQuantity, setPrice } = this.state;
    const { setCategoryTotalAmount } = this.props;
    const numQuantity = parseInt(setQuantity);

    if (numQuantity > 0) {
      this.setState({
        setQuantity: numQuantity - 1,
      });
    }

    setCategoryTotalAmount(setPrice, sign);
  };

  plusQuantity = sign => {
    const { setQuantity, setPrice } = this.state;
    const { setCategoryTotalAmount } = this.props;
    const numQuantity = parseInt(setQuantity);

    this.setState({
      setQuantity: numQuantity + 1,
    });

    setCategoryTotalAmount(setPrice, sign);
  };

  render() {
    const {
      product_id,
      name,
      image_url,
      description,
      orderPrice,
      handleDeleteBtn,
    } = this.props;
    const { setQuantity, setPrice } = this.state;

    return (
      <div className="cartDetailContainer">
        <div className="cartDetailWrap">
          <div className="orderImgWrap">
            <img alt={name} src={image_url} className="orderDetailImg" />
          </div>
          <div className="orderInfoWrap">
            <p className="orderTitle" href="#">
              {name}
            </p>
            <ul className="orderInfoArea">
              <li className="orderInfoWrap">
                <div className="orderInfoTitle">{description}</div>
                <span className="orderCntBtnWrap">
                  <button
                    id={product_id}
                    className="cntBtn"
                    onClick={e =>
                      orderPrice !== 0
                        ? this.minusQuantity(e.target.innerHTML)
                        : null
                    }
                  >
                    -
                  </button>
                  <span className="orderCntWrap">
                    <span className="orderCnt" id={product_id}>
                      {setQuantity}
                    </span>
                  </span>
                  <button
                    id={product_id}
                    className="cntBtn"
                    onClick={e => this.plusQuantity(e.target.innerHTML)}
                  >
                    +
                  </button>
                </span>
                <span className="orderPriceWrap">
                  <em className="priceText">전체 금액:</em>
                  <em className="price">
                    {(setPrice * setQuantity).toLocaleString()}
                  </em>
                  <em className="priceText">원</em>
                </span>
                <div className="deleteBtnWrap">
                  <DeleteButton
                    id={product_id}
                    handleDeleteBtn={handleDeleteBtn}
                  />
                </div>
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
