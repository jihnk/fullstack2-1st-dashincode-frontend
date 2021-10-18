import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notice, bankAccount, footerTop } from './footerData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookSquare,
  faInstagramSquare,
  faBlogger,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

class Footer extends Component {
  goToChat = () => {
    const now = new Date().getHours();
    if (now >= 12) {
      window.open('https://www.wecode.co.kr/', '_blank');
    } else {
      alert('오후에만 팅팅탱탱 상담이 가능합니다( ⁎ ᵕᴗᵕ ⁎ )');
    }
  };

  render() {
    return (
      <footer className="Footer">
        <div className="footerTop">
          <div className="footerTopWrap">
            <ul>
              <li>|</li>
              {footerTop.map((data, id) => {
                return (
                  <Link key={id} to={data.link}>
                    <li className="link">{data.name}</li>
                    <li>|</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <ul className="footerMiddle">
          <li className="middleLeft">
            <div className="customerCenter">
              <h1>고객센터</h1>
              <div className="line">_______</div>
              <div className="csCenterNumber">
                <FontAwesomeIcon icon={faMicrophoneAlt} />
                <h2>&nbsp;8282-8282</h2>
              </div>
              <p>
                매일 오후12시 ~ 오후11시59분
                <br />
                휴무는 없습니다.
              </p>
              <br />
              <div className="csCenterButton">
                <Link to="/">
                  <button>1:1 문의하기</button>
                </Link>
                <button onClick={this.goToChat}>
                  <FontAwesomeIcon icon={faCommentAlt} />
                  &nbsp;팅팅탱탱 채팅상담
                </button>
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
                {notice.map((data, id) => {
                  return (
                    <Link key={id} to={data.link}>
                      <li>{data.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="middleCenter">
            <div className="info">
              <h1>다신코 정보</h1>
              <div className="line">_______</div>
              <ul>
                <li>(주)다신코 대표 원구</li>
                <li>
                  <p>본점 : 종로</p>
                  <a href="/">
                    <button>사업자번호조회</button>
                  </a>
                </li>
                <li>지점 : 홍대</li>
                <li>
                  통신판매업신고를 할 수 있는 그날까지
                  <br />
                  화이팅!
                </li>
              </ul>
            </div>
          </li>
          <li className="middleRight">
            <div className="accountInfo">
              <h1>입금계좌정보</h1>
              <div className="line">_______</div>
              <table className="accountTable">
                <tbody>
                  <tr>
                    <td>예금주명</td>
                    <td>다신코</td>
                  </tr>
                  {bankAccount.map((data, id) => {
                    return (
                      <tr key={id}>
                        <td>{data.name}</td>
                        <td>{data.account}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="sns">
              <h1>SNS</h1>
              <div className="line">_______</div>
              <div>
                <a href="/facebook">
                  <FontAwesomeIcon
                    className="snsIcon"
                    icon={faFacebookSquare}
                    size="lg"
                  />
                </a>
                <a href="/instagram">
                  <FontAwesomeIcon
                    className="snsIcon"
                    icon={faInstagramSquare}
                    size="lg"
                  />
                </a>
                <a href="/blog">
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
      </footer>
    );
  }
}

export default Footer;
