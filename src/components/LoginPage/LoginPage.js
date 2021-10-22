import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { API_ENDPOINT } from '../../api';
import './findId';
import './findPw';
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      userEmail: '',
      userPw: '',
      idChecked: false,
      pwChecked: false,
    };
  }

  handleLoginInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  login = e => {
    e.preventDefault();
    const { userEmail, userPw } = this.state;
    if (userEmail.includes('@') && userPw.length >= 8) {
      fetch(`${API_ENDPOINT}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.state.userEmail,
          password: this.state.userPw,
        }),
      })
        .then(res => res.json())
        .then(res => {
          // this.setState({ user: res });
          if (res.message === 'SUCCESS') {
            alert('로그인을 성공했습니다.');
            window.location.replace('/');
          } else {
            alert(res.message);
          }
        });
    } else {
      alert('이메일 혹은 비밀번호를 입력해주세요');
    }
  };

  loginCheck = () => {
    if (this.state.idChecked && this.state.pwChecked) {
      this.goToMainPage();
    } else {
      alert('이메일 계정을 입력해주세요');
    }
  };

  // 버튼 클릭
  btnClick = () => {
    console.log('사용자 ID :', this.state.userEmail);
    console.log('사용자 Password : ', this.state.userPw);
  };

  render() {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <div className="login">
            <form className="loginRenewBox" action="" name="loginForm">
              <div className="loginTitleBox">
                <p className="loginTitle">로그인</p>
                <p className="underLoginTitle">
                  회원가입 하면 &nbsp;
                  <em className="rightUnderLoginTitle">
                    15000원 상당 쿠폰을 드릴수도?
                  </em>
                </p>
              </div>
              <form className="loginForm">
                <div className="loginInput">
                  <input
                    className="userIdPwForm"
                    type="text"
                    placeholder="이메일 입력"
                    name="userEmail"
                    onChange={this.handleLoginInput}
                  />
                </div>
                <div className="loginInput">
                  <input
                    className="userIdPwForm"
                    type="password"
                    placeholder="비밀번호 입력"
                    name="userPw"
                    onChange={this.handleLoginInput}
                  />
                </div>
              </form>
              <button className="loginBtn" onClick={this.login}>
                <Link to="#">로그인</Link>
              </button>
              <div className="underLoginBtn">
                <Link to="/signup" className="underLoginBtnWords">
                  회원가입
                </Link>
                <em className="underLoginBtnBar"> | </em>
                <Link to="./findId" className="underLoginBtnWords">
                  아이디 찾기
                </Link>
                <em className="underLoginBtnBar"> | </em>
                <Link to="./findPw" className="underLoginBtnWords">
                  비밀번호 찾기
                </Link>
              </div>
              <div className="easyLogin">
                <p className="easyLoginWord">간편 로그인</p>
                <div className="loginInToSocial">
                  <Link to="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=2XL8Yj37FAjmgpAJa5Yo&redirect_uri=https%3A%2F%2Fdshop%2Edietshin%2Ecom%2Fmember%2Fnaver%2Easp&state=naver">
                    <img
                      alt="Naver logo"
                      src="https://dshop.dietshin.com/img/ico/ico_sns_naver_c.png"
                    />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
