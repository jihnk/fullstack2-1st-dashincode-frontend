import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubCategory from './SubCategory/SubCategory';
import SliderCategoryImage from './SliderCategoryImage/SliderCategoryImage';

class MainCategory extends Component {
  render() {
    const { data, location } = this.props;
    return (
      <li className="mainMenuList">
        <Link to={`/list/${data.id}`}>{data.name}</Link>
        {location === 'slider' ? (
          <ul className="subMenu">
            <li className="eachSubMenu">
              <ul className="subMenuList">
                {data.list.map((list, id) => {
                  return <SubCategory key={id} list={list} dataId={data.id} />;
                })}
              </ul>
              {data.product.map((data, id) => {
                return <SliderCategoryImage key={id} data={data} />;
              })}
            </li>
          </ul>
        ) : (
          <ul className="subMenu">
            {data.list.map((list, id) => {
              return <SubCategory key={id} list={list} dataId={data.id} />;
            })}
          </ul>
        )}
      </li>
    );
  }
}

export default MainCategory;
