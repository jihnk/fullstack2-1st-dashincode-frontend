import React from 'react';
import './QuantityCounter.scss';

class QuantityCounter extends React.Component {
  plusQuantity = () => {
    const { quantity, setQuantity } = this.props;
    setQuantity(quantity + 1);
  };

  minusQuantity = () => {
    const { quantity, setQuantity } = this.props;
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  render() {
    const { quantity } = this.props;
    const { plusQuantity, minusQuantity } = this;

    return (
      <div className="QuantityCounter">
        수량: <input type="number" min="1" value={quantity} />
        <button className="plus" onMouseDown={plusQuantity}>
          ▲
        </button>
        <button className="minus" onMouseDown={minusQuantity}>
          ▼
        </button>
      </div>
    );
  }
}

export default QuantityCounter;
