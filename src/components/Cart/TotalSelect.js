import React, { Component } from 'react';
import CheckBox from '../shared/CheckBox';
import './TotalSelect.scss';

class TotalOrder extends Component {
  render() {
    const { id, allCheck, allCheckId, handleChecked, allChecked } = this.props;
    return (
      <div className="totalOrderWrap">
        <CheckBox
          id={id}
          allCheck={allCheck}
          allCheckId={allCheckId}
          handleChecked={handleChecked}
          allChecked={allChecked}
        />
        <button class="selectDeleteBtn">선택상품삭제</button>
      </div>
    );
  }
}

export default TotalOrder;
