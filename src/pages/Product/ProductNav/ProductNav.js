import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ProductNav.scss';

class ProductNav extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/product/${id}/nav`)
      .then(res => res.json())
      .then(data => this.setState({ categories: data }));
  }

  render() {
    const { categories } = this.state;
    return (
      <nav className="ProductNav">
        <ul>
          <li>
            <Link to="#">{categories.mainCategory}</Link>
          </li>
          <span>{'>'}</span>
          <li>
            <Link to="#">{categories.subCategory}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(ProductNav);
