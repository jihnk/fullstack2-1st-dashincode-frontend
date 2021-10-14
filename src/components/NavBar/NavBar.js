import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { navbarList } from './category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faBox } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    fetch('/product/category?location=navbar')
      .then(res => res.json())
      .then(data =>
        this.setState({
          category: data.DATA,
        })
      );
  }

  moveToCategory = link => {
    window.location.replace(`/category/${link}`);
  };

  render() {
    const { category } = this.state;
    return (
      <nav className="NavBar">
        <ul className="navbarWrap">
          <li className="dropDown">
            <div className="category">
              <FontAwesomeIcon icon={faGripLines} />
              <p> 전체 카테고리 </p>
            </div>
            <div className="dropDownCategory">
              <ul className="mainMenu">
                {category.map((data, id) => {
                  const name = '/list/' + data.id;
                  return (
                    <li className="mainMenuList" key={id}>
                      <Link to={name}>{data.name}</Link>
                      <ul className="subMenu">
                        {data.list.map((list, id) => {
                          const name = '/list/' + data.id + '/' + list.id;
                          return (
                            <li key={id}>
                              <Link to={name}>{list.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          {navbarList.map((list, id) => {
            return (
              <li
                className="navbarList"
                key={id}
                onClick={() => {
                  this.moveToCategory(list.link);
                }}
              >
                {list.name.includes('배송') && <FontAwesomeIcon icon={faBox} />}
                &nbsp;{list.name}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
