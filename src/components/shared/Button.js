import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <div className="buttonWrap">
        <button class="selectDeleteBtn">선택상품삭제</button>
      </div>
    );
  }
}

export default Button;
