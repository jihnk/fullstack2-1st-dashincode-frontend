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
            </div>

            {/* 휴대폰 */}
            <div className="signUpWrap">
              <p className="signUpTitle">휴대폰</p>
              <div className="signUpInputForm">
                <input
                  type="hidden"
                  name="phoneSms"
                  className="signUpInput"
                ></input>
                {/* 참고 테스트 */}
                <div className="signUpHpWrap">
                  <p className="signUpHp">
                    <input type="hidden" name="sendSms" />
                    <input
                      type="text"
                      className="phoneNum"
                      placeholder="휴대폰 번호 입력"
                      // style={'100%'}
                      name="phonNum"
                      maxLength="11"
                    />
                  </p>
                  {/* 휴대폰 번호 입력 밑 말풍선 */}
                  <div id="benefitBox">
                    <span className="benefitIcon">
                      <img
                        alt="speech bubble"
                        src="https://dshop.dietshin.com/img/ico/ico_log_arrow.png"
                      />
                    </span>
                    <div className="welcomeCouponWrap">
                      <span className="welcomeCouponBox">
                        <span className="welcomeCoupon">
                          최대 15,000원 상당 웰컴쿠폰팩
                          <br />
                          즉시지급
                          <em>(인증회원)</em>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 이용약관 동의 */}
        <div className="signUpForm">
          <p className="signUpTitle">
            이용약관 동의
            <em className="importStar">*</em>
          </p>
          <div className="policyAgreedTitle">
            <div className="allAgreeBox">
              <span className="allAgree">전체 동의합니다.</span>
              <p className="agreeBox">
                <span className="loginCheckBox">
                  <input
                    type="checkBox"
                    className="checkBox"
                    name="checkBox1"
                    onClick=""
                  />
                  <label for="checkBox">
                    <span></span>
                  </label>
                </span>
              </p>
            </div>
            <div className="agreementElement">
              <span className="allAgree">
                이용약관 동의
                <em>(필수)</em>
              </span>
              <p className="agreementText">
                <Link
                  to="https://dshop.dietshin.com/union_agreement.asp"
                  target="_blank"
                  className="text"
                  style={{ cursor: 'pointer' }}
                >
                  내용보기
                </Link>
              </p>
              <p className="agreeBox">
                <span className="loginCheckBox">
                  <input
                    type="checkBox"
                    className="checkBox"
                    name="checkBox2"
                    onClick="#"
                  />
                  <label for="checkBox2">
                    <span></span>
                  </label>
                </span>
              </p>
            </div>
            <div className="agreementElement">
              <span className="allAgree">
                개인정보처리방침
                <em>(필수)</em>
              </span>
              <p className="agreementText">
                <Link
                  to="https://dshop.dietshin.com/union_privacy.asp"
                  target="_blank"
                  className="text"
                  style={{ cursor: 'pointer' }}
                >
                  내용보기
                </Link>
              </p>
              <p className="agreeBox">
                <span className="loginCheckBox">
                  <input
                    type="checkBox"
                    className="checkBox"
                    name="checkBox3"
                    onClick="#"
                  />
                  <label for="checkBox3">
                    <span></span>
                  </label>
                </span>
              </p>
            </div>
            <div className="agreementElement">
              <span className="allAgree">
                본인은 만 14세 이상 입니다.
                <em>(필수)</em>
              </span>
              <p className="agreeBox">
                <span className="loginCheckBox">
                  <input
                    type="checkBox"
                    className="checkBox"
                    name="checkBox4"
                    onClick="#"
                  />
                  <label for="checkBox4">
                    <span></span>
                  </label>
                </span>
              </p>
            </div>
            <div className="agreementElement">
              <span className="allAgree">
                마케팅 수신동의
                <em>(선택)</em>
              </span>
              <p className="agreementText">
                <Link
                  to="https://dshop.dietshin.com/union_privacy.asp"
                  target="_blank"
                  className="text"
                  style={{ cursor: 'pointer' }}
                >
                  내용보기
                </Link>
              </p>
              <p className="agreeBox">
                <span className="loginCheckBox">
                  <input
                    type="checkBox"
                    className="checkBox"
                    name="checkBox5"
                    onClick="#"
                  />
                  <label for="checkBox5">
                    <span></span>
                  </label>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
