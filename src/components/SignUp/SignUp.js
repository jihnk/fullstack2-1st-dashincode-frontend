import React from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINT } from '../../api';
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

  handleSignUp = e => {
    e.preventDefault();
    const { email, nickname, password } = this.state;
    fetch(`${API_ENDPOINT}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        nickname,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === 'CREATED') {
          alert('회원가입을 성공했습니다.');
          this.goToLoginPage();
        } else {
          alert(res.message);
        }
      });
  };

  signUpEmptyInfo = () => {
    const { email, nickname, password } = this.state;

    if (email === '') {
      return alert('이메일을 입력해주세요.');
    } else if (nickname === '') {
      return alert('닉네임를 입력해주세요.');
    } else if (password === '') {
      return alert('비밀번호를 입력해주세요.');
    } else {
      return alert('유효한 형식으로 입력해주세요.');
    }
  };

  goToLoginPage = () => {
    window.location.replace(`/login`);
  };
  // moveToCategory = link => {
  //   window.location.replace(`/category/${link}`);
  // };
  render() {
    // console.log(this.props);
    const { email, nickname, password } = this.state;
    const signUpComplete =
      email.includes('@') && nickname.includes('') && password.length >= 8;

    const isValidEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    const isValidNickName = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{4,10}$/;
    const isValidPw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,16}/;

    const checkEmail = email.match(isValidEmail) || email === '';
    const checkNickname = nickname.match(isValidNickName) || nickname === '';
    const checkPw = password.match(isValidPw) || password === '';

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
          <form>
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
                  <p className={checkEmail ? 'valid' : 'inValid'}>
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
                  <p className={checkNickname ? 'valid' : 'inValid'}>
                    · &nbsp;닉네임은 한글, 영문, 숫자만 가능하며 5-10자리 가능
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
                    · &nbsp;문자와 특수문자 조합의 8~16 자리조합
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
              <button
                className="signUpBtn"
                type="submit"
                onClick={this.handleSignUp}
                // onMouseDown={&& signUpComplete
                //     ? this.goToLoginPage
                //     : this.signUpEmptyInfo}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
