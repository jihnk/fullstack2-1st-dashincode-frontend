import React, { Component } from 'react';
import './CheckBox.scss';

class CheckBox extends Component {
  render() {
    const { id, allCheckId, allChecked, checked, checkItems, handleChecked } =
      this.props;

    // 현재 체크박스를 label로 처리하다보니 원하지 않게 동작하고 있기에 일반 체크박스와 이미지 체크를 사용하도록 리팩토링해야함
    return (
      <div className="checkBoxWrap">
        <input
          type={'checkbox'}
          className="checkBox"
          id={id}
          // checked={
          //   id === 0
          //     ? allChecked
          //     : e => (checkItems.includes(id) ? true : false)
          // }
          onClick={e => handleChecked(id)}
          // checked={e => (checkItems.includes(id) ? true : false)}
        />
        <label for={id} />
      </div>
    );
  }
}

export default CheckBox;
