import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
    };
  }

  signUpInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  signup = e => {
    // console.log(this.props.match.params.id);
    // const id = this.props.match.params.id;
    fetch(`/user/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        nickname: this.state.nickname,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ user: res });
      });
  };

  render() {
    const { email, nickname, password } = this.state;
    const isValidEmail = email.includes('@');
    const isValidNickName = nickname.length >= 8 && nickname.length <= 15;
    const correctPw = /^[a-zA-z0-9]{4,12}$/;
    const checkPw = password.match(correctPw) || password === '';

    return (
      <div className="container">
        <div className="signUpBox">
          <div className="easySignUpBox">
            <p className="easySignUpTitle">SNS계정 간편 로그인/회원가입</p>
            <div className="easySignUpIcon">
              <Link to="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=2XL8Yj37FAjmgpAJa5Yo&redirect_uri=https%3A%2F%2Fdshop%2Edietshin%2Ecom%2Fmember%2Fnaver%2Easp&state=naver">
                <img
                  alt="Naver logo"
                  src="https://dshop.dietshin.com/img/ico/ico_sns_naver_c.png"
                />
              </Link>
            </div>
          </div>
          <div>
            {/* 이메일 */}
            <div className="signUpWrap">
              <p className="signUpTitle">
                이메일
                <em className="importStar">*</em>
              </p>
              <div className="signUpInputForm">
                <input
                  type="text"
                  className="signUpInput"
                  placeholder="이메일 입력"
                  name="email"
                  onChange={this.signUpInput}
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <p className={isValidEmail ? 'valid' : 'inValid'}>
                    · &nbsp;올바른 형식의 이메일 주소 입력
                  </p>
                </div>
              </div>
            </div>

            {/* 닉네임 */}
            <div className="signUpWrap">
              <p className="signUpTitle">
                닉네임
                <em className="importStar">*</em>
              </p>
              <div className="signUpInputForm">
                <input
                  type="text"
                  className="signUpInput"
                  placeholder="닉네임 입력"
                  name="nickname"
                  onChange={this.signUpInput}
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <p className={isValidNickName ? 'valid' : 'inValid'}>
                    · &nbsp;한글(2-8자), 영문(4-16자) 이내 입력
                  </p>
                  {/* <div className="signUpTip">
                    · &nbsp;중복되지 않는 닉네임 입력
                  </div> */}
                </div>
              </div>
            </div>

            {/* 비밀번호 */}
            <div className="signUpWrap">
              <p className="signUpTitle">
                비밀번호
                <em className="importStar">*</em>
              </p>
              <div className="signUpInputForm">
                <input
                  type="password"
                  className="signUpInput"
                  placeholder="비밀번호 입력"
                  name="password"
                  onChange={this.signUpInput}
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <p className={checkPw ? 'valid' : 'invalid'}>
                    · &nbsp;영문 대소문자와 숫자 4~12자리로 입력해야 됩니다.
                  </p>
                  {/* <p className="signUpTip">
                    · &nbsp;영문/숫자/특수문자 2가지 이상
                  </p>
                  <p className="signUpTip">
                    · &nbsp;동일한 문자/숫자 4개 이상 연속 사용불가
                  </p> */}
                </div>
              </div>

              {/* 비밀번호 재입력 */}
              <br />
              <div className="signUpInputForm">
                <input
                  type="password"
                  className="signUpInput"
                  placeholder="비밀번호 다시 한번 입력"
                  name="passwordConfirm"
                  onChange={this.signUpInput}
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <p className="signUpTip">· &nbsp;동일한 비밀번호 입력</p>
                </div>
              </div>
              <button onClick={this.signup} className="signUpBtn">
                <Link to="#">회원가입</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
