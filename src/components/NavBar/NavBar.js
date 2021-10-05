import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import category from './category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    const navbarList = [
      { name: '베스트', link: 'bestproducts' },
      { name: '특가', link: 'specialprice' },
      { name: '신상품', link: 'newproducts' },
      { name: '식단플랜', link: 'dietplan' },
      { name: '다신배송', link: 'dashindelivery' },
      { name: '다신쿨배송', link: 'dashincooldelivery' },
    ];
    return (
      <nav className="NavBar">
        <div className="navbarWrap">
          <div className="navbar">
            <ul className="bar">
              <li className="dropDown">
                <div className="category">
                  <FontAwesomeIcon icon={faGripLines} />
                  <p> 전체 카테고리 </p>
                </div>
                <div className="dropDownCategory">
                  <ul className="mainMenu">
                    {category.map((data, id) => {
                      const name = '/list/' + data.name;
                      return (
                        <li className="mainMenuList" key={id}>
                          <Link to={name}>{data.name}</Link>
                          <ul className="subMenu">
                            {data.list.map((list, id) => {
                              const name = '/list/' + list;
                              return (
                                <li key={id}>
                                  <Link to={name}>{list}</Link>
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
                const name = '/list/' + list.link;
                return (
                  <Link to={name} key={id}>
                    <li>
                      {list.name.includes('배송') && (
                        <FontAwesomeIcon icon={faBox} />
                      )}
                      &nbsp;{list.name}
                    </li>
                  </Link>
                );
              })}
              <li className="blank"></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
