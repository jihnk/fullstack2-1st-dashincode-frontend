import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <>
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
                      <li className="mainMenuList">
                        <a href="/">다신메이드</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">다신메이드</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainMenuList">
                        <a href="/">도시락과 샐러드</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">도시락</a>
                          </li>
                          <li>
                            <a href="/">샐러드</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainMenuList">
                        <a href="/">닭가슴살</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">닭가슴살</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainMenuList">
                        <a href="/">간편식</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">베이커리/떡</a>
                          </li>
                          <li>
                            <a href="/">분식</a>
                          </li>
                          <li>
                            <a href="/">곤약/면류</a>
                          </li>
                          <li>
                            <a href="/">시리얼/선식</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainMenuList">
                        <a href="/">건강간식</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">건강과자</a>
                          </li>
                          <li>
                            <a href="/">고구마/단호박/계란</a>
                          </li>
                          <li>
                            <a href="/">디저트</a>
                          </li>
                          <li>
                            <a href="/">견과/바</a>
                          </li>
                          <li>
                            <a href="/">소스/잼</a>
                          </li>
                          <li>
                            <a href="/">두유/요거트/차</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainMenuList">
                        <a href="/">단백질/헬스</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">단백질보충</a>
                          </li>
                          <li>
                            <a href="/">장건강</a>
                          </li>
                          <li>
                            <a href="/">건강식품</a>
                          </li>
                          <li>
                            <a href="/">체중계/홈트</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainMenuList">
                        <a href="/">체지방관리</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">체지방</a>
                          </li>
                          <li>
                            <a href="/">크렌즈/스무디</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainMenuList">
                        <a href="/">익선동18</a>
                        <ul className="subMenu">
                          <li>
                            <a href="/">익선동18</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <Link to="/">
                  <li>베스트</li>
                </Link>
                <Link to="/">
                  <li>특가</li>
                </Link>
                <Link to="/">
                  <li>신상품</li>
                </Link>
                <Link to="/">
                  <li>식단플랜</li>
                </Link>
                <Link to="/">
                  <li>
                    <FontAwesomeIcon icon={faBox} />
                    &nbsp;다신배송
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <FontAwesomeIcon icon={faBox} />
                    &nbsp;다신쿨배송
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
