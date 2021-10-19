import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

class NavBarList extends Component {
  moveToCategory = link => {
    window.location.replace(`/category/${link}`);
  };

  render() {
    const { list } = this.props;
    return (
      <li
        className="navbarList"
        onClick={() => {
          this.moveToCategory(list.link);
        }}
      >
        {list.name.includes('배송') && <FontAwesomeIcon icon={faBox} />}
        &nbsp;{list.name}
      </li>
    );
  }
}

export default NavBarList;
