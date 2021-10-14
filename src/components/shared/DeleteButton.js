import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './DeleteButton.scss';

class DeleteButton extends Component {
  render() {
    const { id, handleDeleteBtn } = this.props;
    return (
      <div className="deleteBtnWrap">
        <FontAwesomeIcon
          id={id}
          className="deleteBtn"
          icon={faTrashAlt}
          onClick={() => handleDeleteBtn(id)}
        />
      </div>
    );
  }
}

export default DeleteButton;
