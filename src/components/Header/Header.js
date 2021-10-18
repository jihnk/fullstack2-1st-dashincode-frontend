import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { searchPlaceholders, userInfo } from './headerData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import logoKorean from './logo_korean.png';
import './Header.scss';

const cookie = new Cookies();
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchPlaceholder:
        searchPlaceholders[
          Math.floor(Math.random() * searchPlaceholders.length)
        ],
      cartNum: 0,
    };
  }

  componentDidMount() {
    fetch('/cart/amount')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartNum: res.amount,
        });
      });
  }

  handleInput = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleInputByEnter = e => {
    if (e.key === 'Enter') {
      this.handleSearch();
      e.target.value = '';
    }
  };

  handleSearch = () => {
    const { searchValue } = this.state;
    const encodedSearchValue = encodeURI(searchValue);
    if (searchValue.length > 0) {
      this.setState({
        searchPlaceholder: searchValue,
      });
      window.location.replace(`/search?words=${encodedSearchValue}`);
    } else {
      alert('검색어를 입력해주세요 =͟͟͞͞(๑º ﾛ º๑)');
    }
  };

  logout = () => {
    cookie.remove('user');
  };

  render() {
    return (
      <header className="Header">
        <div className="headerTop">
          <div className="headerTopWrap">
            <Link to="/">
              <h1> 1차 프로젝트 </h1>
            </Link>
            <ul>
              {cookie.get('user') ? (
                <Link to="/">
                  <li onClick={this.logout}>로그아웃</li>
                </Link>
              ) : (
                <li>
                  <ul>
                    <Link to="/login">
                      <li>로그인</li>
                    </Link>
                    <li> &nbsp;|&nbsp; </li>
                    <Link to="/signup">
                      <li>회원가입</li>
                    </Link>
                  </ul>
                </li>
              )}
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
        </div>
        <div className="headerBottom">
          <div className="headerBottomWrap">
            <Link to="/">
              <img src={logoKorean} alt="logo korean" className="logoKorean" />
            </Link>
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <div>
              <div className="withoutLogo">
                <div className="searchWrap">
                  <span>
                    <input
                      className="search"
                      type="text"
                      placeholder={this.state.searchPlaceholder}
                      onChange={this.handleInput}
                      onKeyPress={this.handleInputByEnter}
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
                        <div className="userInfoWrap">
                          <div className="userInfoList">
                            <ul>
                              {userInfo.map((list, id) => {
                                return (
                                  <li key={id}>
                                    {cookie.get('user') ? (
                                      <Link to="/user">{list}</Link>
                                    ) : (
                                      <Link to="/login">{list}</Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/cart">
                        <FontAwesomeIcon
                          className="icons bagIcon"
                          size="lg"
                          icon={faShoppingBag}
                        />
                        <em class="cartNum">{this.state.cartNum}</em>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
