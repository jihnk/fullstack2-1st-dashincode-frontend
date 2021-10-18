import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Card from '../Card/Card';
import './Cardlist.scss';

class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {
      productQuantity: 0,
      products: [],
    };
  }

  componentDidMount() {
    const { page } = this.props;
    if (page === 'mainpage') {
      fetch(`/list/mainpage`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    } else if (page === 'search') {
      const { search } = this.props.location;
      const queryObj = queryString.parse(search, { decode: 'false' });
      const { words } = queryObj;
      fetch(`/list?value=${words}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    } else if (page === 'list') {
      const { main, sub } = this.props.match.params;
      if (sub === undefined) {
        fetch(`/list/main/${main}`)
          .then(res => res.json())
          .then(res => {
            this.setState({ products: res.DATA });
          });
      } else {
        fetch(`/list/sub/${sub}`)
          .then(res => res.json())
          .then(res => {
            this.setState({ products: res.DATA });
          });
      }
    } else if (page === 'category') {
      const { sort } = this.props.match.params;
      fetch(`/list/${sort}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ products: res.DATA });
        });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div className="List">
        <h1 className="listTitle">{this.props.name}</h1>
        <ul className="foodList">
          {products &&
            products.map(product => {
              return <Card key={product.id} {...product} />;
            })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Cardlist);
