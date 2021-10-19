import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SliderCategoryImage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="categoryImage">
        <Link to={`/product/${data.id}`}>
          <img className="productImg" alt="" src={data.image_url} />
        </Link>
        <Link to={`/product/${data.id}`}>
          <p>{data.name}</p>
        </Link>
      </div>
    );
  }
}

export default SliderCategoryImage;
