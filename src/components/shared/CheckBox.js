import React, { Component } from 'react';
import './CheckBox.scss';

class CheckBox extends Component {
  render() {
    return (
      <div className="checkBoxWrap">
        <input type="checkbox" id="Check" class="totalCheckBox" />
        <label for="Check" />
      </div>
    );
  }
}

export default CheckBox;
