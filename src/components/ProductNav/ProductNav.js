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
    fetch(`http://localhost:3000/product/category/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

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
    // 링크와 name state에서 꺼내쓸 수 있도록 수정해야 함
  }
}

export default withRouter(ProductNav);
