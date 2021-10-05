import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
  }
  goToChat = () => {
    const now = new Date();
    this.setState({
      now: now.getHours(),
    });
    if (this.state.now >= 12) {
      window.open('https://www.wecode.co.kr/', '_blank');
    } else {
      alert('오후에만 톡톡 상담이 가능합니다');
    }
  };
  render() {
    return (
      <>
        <footer className="Footer">
          <div className="footerWrap">
            <div className="footerTop">
              <div className="footerTopWrap">
                <ul>
                  <Link to="/">
                    <li>개인정보처리방침</li>
                  </Link>
                  <li>|</li>
                  <Link to="/">
                    <li>제휴입점문의</li>
                  </Link>
                  <li>|</li>
                  <Link to="/">
                    <li>이용약관</li>
                  </Link>
                  <li>|</li>
                  <Link to="/">
                    <li>자주하는 질문</li>
                  </Link>
                </ul>
              </div>
            </div>
            <ul className="footerMiddle">
              <li className="middle1">
                <div className="customerCenter">
                  <h1>고객센터</h1>
                  <div className="line">_______</div>
                  <div className="csCenterNumber">
                    <FontAwesomeIcon icon={faMicrophoneAlt} />
                    <h2>&nbsp;8282-8282</h2>
                  </div>
                  <p>
                    휴무는 없습니다. 왜냐하면 우리는 위코드이기 때문이죠. 히히.
                  </p>
                  <br />
                  <div className="csCenterButton">
                    <Link to="/">
                      <button>1:1 문의하기</button>
                    </Link>
                    <a href="/">
                      <button onClick={this.goToChat}>
                        <FontAwesomeIcon icon={faCommentAlt} />
                        &nbsp;톡톡 채팅상담
                      </button>
                    </a>
                  </div>
                </div>
                <div className="notice">
                  <div className="noticeTitle">
                    <h1>공지사항</h1>
                    <Link to="/">
                      <button>바로가기 ▶</button>
                    </Link>
                  </div>
                  <div className="line">_______</div>
                  <ul>
                    <Link to="/">
                      <li>10월에도 행복하세요</li>
                    </Link>
                    <Link to="/">
                      <li>9월에는 행복했어요</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="middle2">
                <div className="info">
                  <h1>다신코 정보</h1>
                  <div className="line">_______</div>
                  <ul>
                    <li>(주)다신코 대표 고원구</li>
                    <li>
                      <p>본점 : 종로</p>
                      <a href="/">
                        <button>사업자번호조회</button>
                      </a>
                    </li>
                    <li>지점 : 홍대</li>
                    <li>통신판매업신고 안했지롱 뀨</li>
                  </ul>
                </div>
              </li>
              <li className="middle3">
                <div className="accountInfo">
                  <h1>입금계좌정보</h1>
                  <div className="line">_______</div>
                  <table className="accountTable">
                    <tbody>
                      <tr>
                        <td>예금주명</td>
                        <td>다신코</td>
                      </tr>
                      <tr>
                        <td>다빈은행</td>
                        <td>1111111111111</td>
                      </tr>
                      <tr>
                        <td>지현은행</td>
                        <td>1111111111111</td>
                      </tr>
                      <tr>
                        <td>재원은행</td>
                        <td>1111111111111</td>
                      </tr>
                      <tr>
                        <td>정호은행</td>
                        <td>1111111111111</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="sns">
                  <h1>SNS</h1>
                  <div className="line">_______</div>
                  <div>
                    <a href="/">
                      <FontAwesomeIcon
                        className="snsIcon"
                        icon={faFacebookSquare}
                        size="lg"
                      />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon
                        className="snsIcon"
                        icon={faInstagramSquare}
                        size="lg"
                      />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon
                        className="snsIcon"
                        icon={faBlogger}
                        size="lg"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="footerBottom">
              <p>
                다신코에서 제공하는 모든 콘텐츠의 저작권은 제공처 또는 다신코에
                있으며, 이를 무단 이용 및 재배포하는 경우 저작권법 등에 따라
                법적책임을 질 수 있습니다
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
