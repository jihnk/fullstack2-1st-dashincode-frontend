import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Card from '../Card/Card';
import './Cardlist.scss';
import { API_ENDPOINT } from '../../api';

class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {
      productQuantity: 0,
      products: [],
    };
  }

  fetchFunctions = {
    mainpage: () => {
      fetch(`${API_ENDPOINT}/list/mainpage`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    },
    search: () => {
      const { search } = this.props.location;
      const queryObj = queryString.parse(search, { decode: 'false' });
      const { words } = queryObj;
      fetch(`${API_ENDPOINT}/list?value=${words}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    },
    list: () => {
      const { main, sub } = this.props.match.params;
      if (sub === undefined) {
        fetch(`${API_ENDPOINT}/list/main/${main}`)
          .then(res => res.json())
          .then(res => {
            this.setState({ products: res.DATA });
          });
      } else {
        fetch(`${API_ENDPOINT}/list/sub/${sub}`)
          .then(res => res.json())
          .then(res => {
            this.setState({ products: res.DATA });
          });
      }
    },
    category: () => {
      const { sort } = this.props.match.params;
      fetch(`${API_ENDPOINT}/list/${sort}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    },
  };

  componentDidMount() {
    const { page } = this.props;
    this.fetchFunctions[page]();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="List">
        <h1 className="listTitle">{this.props.name}</h1>
        <ul className="foodList">
          {products &&
            products.map(product => {
              return <Card key={product.id} product={product} />;
            })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Cardlist);
