import React from 'react';
import './QuantityCounter.scss';

class QuantityCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
    };
  }

  plusQuantity = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
    this.setState(prevState => {
      this.props.getQuantity(prevState.quantity);
    });
  };

  minusQuantity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity > 1 ? quantity - 1 : 1,
    });
    this.setState(prevState => {
      this.props.getQuantity(prevState.quantity);
    });
  };

  render() {
    const { quantity } = this.state;
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
