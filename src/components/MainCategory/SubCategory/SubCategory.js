import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubCategory extends Component {
  render() {
    const { list, dataId } = this.props;
    return (
      <li>
        <Link to={`/list/${dataId}/${list.id}`} className="linkToSubMenu">
          {list.name}
        </Link>
      </li>
    );
  }
}

export default SubCategory;
