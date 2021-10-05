import React from 'react';
// import { Link } from 'react-router-dom';
import './MainCategory.scss';
import sweetpotato from './sweetpotato.jpeg';

const MainCategory = () => {
  return (
    <div className="MainCategory">
      <div className="categoryWrap">
        <ul className="mainMenu">
          <li className="mainMenuList">
            <a href="/">다신메이드</a>
            <div className="subMenuWithImg">
              <ul className="subMenu">
                <li>
                  <a href="/">다신메이드</a>
                  <a href="/">다신메이드</a>
                  <a href="/">다신메이드</a>
                </li>
                <li className="categoryImage">
                  <img alt="" src={sweetpotato} />
                  <p>고구마고구마~</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="mainMenuList">
            <a href="/">도시락과 샐러드</a>
            <ul className="subMenu">
              <li>
                <a href="/">도시락</a>
                <a href="/">샐러드</a>
              </li>
              <li className="categoryImage">
                <img alt="" src={sweetpotato} />
                <p>고구마고구마~</p>
              </li>
            </ul>
          </li>
          <li className="mainMenuList">
            <a href="/">닭가슴살</a>
            <ul className="subMenu">
              <li>
                <a href="/">닭가슴살</a>
              </li>
              <li className="categoryImage">
                <img alt="" src={sweetpotato} />
                <p>고구마고구마~</p>
              </li>
            </ul>
          </li>
          <li className="mainMenuList">
            <a href="/">간편식</a>
            <ul className="subMenu">
              <li>
                <a href="/">베이커리/떡</a>
                <a href="/">분식</a>
                <a href="/">곤약/면류</a>
                <a href="/">시리얼/선식</a>
              </li>
              <li className="categoryImage">
                <img alt="" src={sweetpotato} />
                <p>고구마고구마~</p>
              </li>
            </ul>
          </li>
          <li className="mainMenuList">
            <a href="/">건강간식</a>
            <ul className="subMenu">
              <li>
                <a href="/">건강과자</a>
                <a href="/">고구마/단호박/계란</a>
                <a href="/">디저트</a>
                <a href="/">견과/바</a>
                <a href="/">소스/잼</a>
                <a href="/">두유/요거트/차</a>
              </li>
              <li className="categoryImage">
                <img alt="" src={sweetpotato} />
                <p>고구마고구마~</p>
              </li>
            </ul>
          </li>
          <li className="mainMenuList">
            <a href="/">단백질/헬스</a>
            <ul className="subMenu">
              <li>
                <a href="/">단백질보충</a>
                <a href="/">장건강</a>
                <a href="/">건강식품</a>
                <a href="/">체중계/홈트</a>
              </li>
              <li className="categoryImage">
                <img alt="" src={sweetpotato} />
                <p>고구마고구마~</p>
              </li>
            </ul>
          </li>
          <li className="mainMenuList">
            <a href="/">체지방관리</a>
            <ul className="subMenu">
              <li>
                <a href="/">체지방</a>
                <a href="/">크렌즈/스무디</a>
              </li>
              <li className="categoryImage">
                <img alt="" src={sweetpotato} />
                <p>고구마고구마~</p>
              </li>
            </ul>
          </li>
          <li className="mainMenuList">
            <a href="/">진관동17</a>
            <ul className="subMenu">
              <li>
                <a href="/">진관동17</a>
              </li>
              <li className="categoryImage">
                <img alt="" src={sweetpotato} />
                <p>고구마고구마~</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainCategory;
