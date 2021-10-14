import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ProductNav.scss';

class ProductNav extends React.Component {
  render() {
    const { navbar } = this.props;
    return (
      <nav className="ProductNav">
        <ul>
          <li>
            <Link to="#">{navbar.mainCategoryName}</Link>
          </li>
          <span>{'>'}</span>
          <li>
            <Link to="#">{navbar.subCategoryName}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(ProductNav);
