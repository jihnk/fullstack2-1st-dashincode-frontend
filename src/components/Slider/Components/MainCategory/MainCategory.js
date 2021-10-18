import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainCategory.scss';

class MainCategory extends Component {
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
      <div className="MainCategory">
        <div className="categoryWrap">
          <ul className="mainMenu">
            {category.map((data, id) => {
              return (
                <li className="mainMenuList" key={id}>
                  <Link to={`/list/${data.id}`}>{data.name}</Link>
                  <ul className="subMenu">
                    <li className="eachSubMenu">
                      <ul className="subMenuList">
                        {data.list.map((list, id) => {
                          return (
                            <li key={id}>
                              <Link
                                className="linkToSubMenu"
                                to={`/list/${data.id}/${list.id}`}
                              >
                                {list.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      {data.product.map((data, id) => {
                        return (
                          <div className="categoryImage" key={id}>
                            <Link to={`/product/${data.id}`}>
                              <img alt="" src={data.image_url} />
                            </Link>
                            <Link to={`/product/${data.id}`}>
                              <p>{data.name}</p>
                            </Link>
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainCategory;
