import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { searchPlaceholder, userInfo } from './headerData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import logoKorean from './logo_korean.png';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      cartNum: 0,
      hasToken: false,
    };
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
    this.props.history.push(`/list?${this.state.searchValue}`);
  };

  componentDidUpdate() {
    fetch('')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartNum: res,
          //carts table 행이 몇개인지 숫자로 받아야함
        });
      });
    document.cookie.includes('token') &&
      this.setState({
        token: true,
      });
  }

  render() {
    const randomItem = word => {
      return word[Math.floor(Math.random() * word.length)];
    };
    return (
      <header className="Header">
        <div className="headerTop">
          <div className="headerTopWrap">
            <Link to="/">
              <h1> 1차 프로젝트 </h1>
            </Link>
            <ul>
              <Link to="/login">
                <li>로그인</li>
              </Link>
              <li> &nbsp;|&nbsp; </li>
              <Link to="/signup">
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
        </div>
        <div className="headerBottom">
          <div className="headerBottomWrap">
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
                        <div class="userInfoWrap">
                          <div class="userInfoList">
                            <ul>
                              {userInfo.map((list, id) => {
                                return (
                                  <li key={id}>
                                    {this.state.hasToken ? (
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
