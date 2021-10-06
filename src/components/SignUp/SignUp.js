import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="signUpContent">
          <div className="signUpRenew">
            <div className="signUpBox">
              <div className="easySignUp">
                <p className="easySignUpTitle">SNS계정 간편 로그인/회원가입</p>
                <div className="easySignUpIcon">
                  <Link href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=2XL8Yj37FAjmgpAJa5Yo&redirect_uri=https%3A%2F%2Fdshop%2Edietshin%2Ecom%2Fmember%2Fnaver%2Easp&state=naver">
                    <img
                      alt=""
                      src="https://dshop.dietshin.com/img/ico/ico_sns_naver_c.png"
                    />
                  </Link>
                  <Link href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fdshop.dietshin.com%252Fmember%252Fkakao.asp%26state%3Dkakao%26client_id%3D2d4ac180ad6ea3f67c6cfbe9d55448bc">
                    <img
                      alt=""
                      src="https://dshop.dietshin.com/img/ico/ico_sns_kakao_c.png"
                    />
                  </Link>
                </div>
              </div>
              <div className="signUpForm">
                <p className="signUpTitle">
                  이메일
                  <em className="importStar">*</em>
                </p>
                <div className="signUpInput">
                  <input
                    type="text"
                    id="Email"
                    style={{ width: '99%' }}
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
              <div className="signUpForm">
                <p className="signUpTitle">
                  닉네임
                  <em className="importStar">*</em>
                </p>
                <div className="signUpInput">
                  <input
                    type="text"
                    id="NickName"
                    style={{ width: '99%' }}
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
              <div className="signUpForm">
                <p className="signUpTitle">
                  비밀번호
                  <em className="importStar">*</em>
                </p>
                <div className="signUpInput">
                  <input
                    type="password"
                    id="NickName"
                    style={{ width: '99%' }}
                    placeholder="비밀번호 입력"
                  ></input>
                  {/* 참고 테스트 */}
                  <div className="signUpTipBox">
                    <div className="signUpTip">
                      · &nbsp;10자 이상 15자 이하 입력
                    </div>
                    <div className="signUpTip">
                      · &nbsp;영문/숫자/특수문자 2가지 이상
                    </div>
                    <div className="signUpTip">
                      · &nbsp;동일한 문자/숫자 4개 이상 연속 사용불가
                    </div>
                  </div>
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
                              id="checkBox1"
                              name="checkBox1"
                              onClick="chkInput();"
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
                            href="https://dshop.dietshin.com/union_agreement.asp"
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
                              id="checkBox2"
                              name="checkBox2"
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
                            href="https://dshop.dietshin.com/union_privacy.asp"
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
                              id="checkBox3"
                              name="checkBox3"
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
                              id="checkBox4"
                              name="checkBox4"
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
                            href="https://dshop.dietshin.com/union_privacy.asp"
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
                              id="checkBox5"
                              name="checkBox5"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
