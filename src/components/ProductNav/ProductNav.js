import React from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

class ProductNav extends React.Component {
  render() {
    return (
      <nav className="ProductNav">
        <ul>
          <li>
            <Link to="#">건강간식</Link>
          </li>
          <span>{'>'}</span>
          <li>
            <Link to="#">두유/요거트/차</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ProductNav;
