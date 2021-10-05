import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import logoKorean from './logo_korean.png';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };
  }
  handleInput = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };
  handleSearch = () => {
    //filter 구현 예정
  };
  render() {
    const searchPlaceholder = ['닭가슴살', '도시락', '현미떡', '프로틴음료'];
    const randomItem = word => {
      return word[Math.floor(Math.random() * word.length)];
    };
    return (
      <header className="Header">
        <container className="headerTop">
          <div className="headerTopWrap">
            <Link to="/">
              <h1> 다신코 </h1>
            </Link>
            <ul>
              <Link to="/">
                <li>로그인</li>
              </Link>
              <li> &nbsp;|&nbsp; </li>
              <Link to="/">
                <li>회원가입</li>
              </Link>
              <li> &nbsp;|&nbsp; </li>
              <Link to="/">
                <li>비회원주문조회</li>
              </Link>
              <li> &nbsp;|&nbsp; </li>
              <Link to="/">
                <li>즐겨찾기</li>
              </Link>
            </ul>
          </div>
        </container>
        <container className="headerBottom">
          <div className="headerBottomBox">
            <img src={logoKorean} alt="logo korean" className="logoKorean" />
            <img src={logo} alt="logo" className="logo" />
            <div>
              <div className="withoutLogo">
                <div className="searchWrap">
                  <span>
                    <input
                      className="search"
                      type="text"
                      placeholder={randomItem(searchPlaceholder)}
                      onChange={this.handleInput}
                    />
                  </span>
                  <FontAwesomeIcon
                    onClick={this.handleSearch}
                    className="searchIcon"
                    icon={faSearch}
                  />
                </div>
                <div className="userInfoAndGoToCart">
                  <ul className="userAndCartIcons">
                    <li className="dropDownUserInfo">
                      <FontAwesomeIcon
                        className="icons userIcon"
                        icon={faUser}
                        size="lg"
                      />
                      <div className="showUserInfo">
                        <div class="userInfoWrap">
                          <div class="userInfoList">
                            <ul>
                              <li>
                                <a href="/">주문/배송조회</a>
                              </li>
                              <li>
                                <a href="/">취소/반품조회</a>
                              </li>
                              <li>
                                <a href="/">할인쿠폰</a>
                              </li>
                              <li>
                                <a href="/">적립금</a>
                              </li>
                              <li>
                                <a href="/">찜한 상품</a>
                              </li>
                              <li>
                                <a href="/">최근 본 상품</a>
                              </li>
                              <li>
                                <a href="/">배송지관리</a>
                              </li>
                              <li>
                                <a href="/">내정보 수정</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="icons bagIcon"
                        size="lg"
                        icon={faShoppingBag}
                      />
                      <em class="cartNum">0</em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </container>
      </header>
    );
  }
}

export default Header;
