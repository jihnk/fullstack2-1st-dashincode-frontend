import React, { Component } from 'react';
import CheckBox from '../shared/CheckBox';
import './TotalSelect.scss';

class TotalOrder extends Component {
  render() {
    return (
      <div className="totalOrderWrap">
        <CheckBox />
        <button class="selectDeleteBtn">선택상품삭제</button>
      </div>
    );
  }
}

export default TotalOrder;
