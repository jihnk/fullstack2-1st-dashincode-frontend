import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './CheckBox.scss';

class CheckBox extends Component {
  render() {
    const { id, allCheckId, allChecked, checked, checkItems, handleChecked } =
      this.props;

    // 현재 체크박스를 label로 처리하다보니 원하지 않게 동작하고 있기에 일반 체크박스와 이미지 체크를 사용하도록 리팩토링해야함
    return (
      <div className="checkBoxWrap">
        <FontAwesomeIcon id={id} icon={faSquare} className="checkboxIcon">
          <FontAwesomeIcon id={id} icon={faCheck} className="checkIcon" />
        </FontAwesomeIcon>
        <FontAwesomeIcon
          id={id}
          icon={faCheckSquare}
          className="checkbox"
          checked="false"
        />
        {/* <FontAwesomeIcon id={id} icon={faCheck} className="checkIcon" /> */}
        {/* <input
          type={'checkbox'}
          className="checkBox"
          id={id}
          checked={
            id === 0
              ? allChecked
              : e => (checkItems.includes(id) ? true : false)
          }
          onClick={e => handleChecked(id)}
          checked={e => (checkItems.includes(id) ? true : false)}
        /> */}
        {/* <label for={id} /> */}
      </div>
    );
  }
}

export default CheckBox;
