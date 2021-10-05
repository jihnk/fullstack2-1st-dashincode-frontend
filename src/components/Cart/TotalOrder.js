import React, { Component } from 'react';
import CheckBox from '../shared/CheckBox';
import Button from '../shared/Button';
import './TotalOrder.scss';

class TotalOrder extends Component {
  render() {
    return (
      <div className="totalOrderWrap">
        <CheckBox />
        <Button />
      </div>
    );
  }
}

export default TotalOrder;
