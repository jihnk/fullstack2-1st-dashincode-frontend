import React, { Component } from 'react';
import MainCategory from '../../MainCategory/MainCategory';
import './SliderCategory.scss';

class SliderCategory extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    fetch('/product/category?location=slider')
      .then(res => res.json())
      .then(data =>
        this.setState({
          category: data.DATA,
        })
      );
  }

  render() {
    const { category } = this.state;
    return (
      <div className="SliderCategory">
        <div className="categoryWrap">
          <ul className="mainMenu">
            {category.map((data, id) => {
              return <MainCategory key={id} data={data} location={'slider'} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SliderCategory;
