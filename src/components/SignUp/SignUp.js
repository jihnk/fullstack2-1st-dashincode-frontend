import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

class SignUp extends React.Component {
  render() {
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
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <div className="signUpTip">
                    · &nbsp;올바른 형식의 이메일 주소 입력
                  </div>
                  <div className="signUpTip">
                    · &nbsp;가입되지 않는 이메일 주소 입력
                  </div>
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
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <div className="signUpTip">
                    · &nbsp;한글(2-8자), 영문(4-16자) 이내 입력
                  </div>
                  <div className="signUpTip">
                    · &nbsp;중복되지 않는 닉네임 입력
                  </div>
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
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <p className="signUpTip">· &nbsp;10자 이상 15자 이하 입력</p>
                  <p className="signUpTip">
                    · &nbsp;영문/숫자/특수문자 2가지 이상
                  </p>
                  <p className="signUpTip">
                    · &nbsp;동일한 문자/숫자 4개 이상 연속 사용불가
                  </p>
                </div>
              </div>

              {/* 비밀번호 재입력 */}
              <br />
              <div className="signUpInputForm">
                <input
                  type="password"
                  className="signUpInput"
                  placeholder="비밀번호 다시 한번 입력"
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpTipBox">
                  <p className="signUpTip">· &nbsp;동일한 비밀번호 입력</p>
                </div>
              </div>
              <button className="signUpBtn">
                <Link onClick="#">회원가입</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
