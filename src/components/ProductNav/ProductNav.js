import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ProductNav.scss';

class ProductNav extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/product/${id}/navbar`)
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    const { data } = this.state;
    return (
      <nav className="ProductNav">
        <ul>
          <li>
            <Link to="#">{data.mainCategoryName}</Link>
          </li>
          <span>{'>'}</span>
          <li>
            <Link to="#">{data.subCategoryName}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(ProductNav);
