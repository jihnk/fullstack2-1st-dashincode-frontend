import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import logoKorean from './logo_korean.png';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      cartNum: 0,
      // token: cookie.load('token'), 쿠키 설치 후 태그 감싸야 함
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
    this.props.history.push(`/list/search?${this.state.searchValue}`);
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
  }
  render() {
    const searchPlaceholder = [
      '닭가슴살',
      '도시락',
      '현미떡',
      '프로틴음료',
      '떡볶이',
      '그릭요거트',
      '핫도그',
    ];
    const randomItem = word => {
      return word[Math.floor(Math.random() * word.length)];
    };
    const userInfo = [
      '주문/배송조회',
      '취소/반품조회',
      '할인쿠폰',
      '적립금',
      '찜한 상품',
      '최근 본 상품',
      '배송지관리',
      '내정보 수정',
    ];
    return (
      <header className="Header">
        <container className="headerTop">
          <div className="headerTopWrap">
            <Link to="/">
              <h1> 1차 프로젝트 </h1>
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
                                    {this.state.token ? (
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
                      <FontAwesomeIcon
                        className="icons bagIcon"
                        size="lg"
                        icon={faShoppingBag}
                      />
                      <em class="cartNum">{this.state.cartNum}</em>
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

export default withRouter(Header);
