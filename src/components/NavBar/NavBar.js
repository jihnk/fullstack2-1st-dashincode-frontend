import React, { Component } from 'react';
import { navbarList } from './category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import MainCategory from '../MainCategory/MainCategory';
import NavBarList from './NavBarList/NavBarList';
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
                  return <MainCategory key={id} data={data} />;
                })}
              </ul>
            </div>
          </li>
          {navbarList.map((list, id) => {
            return <NavBarList key={id} list={list} />;
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
