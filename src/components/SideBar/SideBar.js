import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollTo from './ScrollTo';
import './SideBar.scss';

class SideBar extends Component {
  //컨플릭트 해결
  constructor(props) {
    super(props);
    this.state = {
      sidebar: [],
      totalSlides: 4,
      currentSlide: 1,
      scrollY: 0,
      scrollActive: false,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/currentviewed.json', {
      headers: {
        Accpet: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          sidebar: data.DATA,
        });
      });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nextSlide = () => {
    const { totalSlides, currentSlide } = this.state;
    this.setState(
      { currentSlide: currentSlide === totalSlides ? 1 : currentSlide + 1 },
      () => {
        this.moveImage();
      }
    );
  };

  prevSlide = () => {
    const { totalSlides, currentSlide } = this.state;
    this.setState(
      { currentSlide: currentSlide === 1 ? totalSlides : currentSlide - 1 },
      () => {
        this.moveImage();
      }
    );
  };

  moveImage = () => {
    const moveImg = (this.state.currentSlide - 1) * 80;
    this.myRef.current.style.transform = `translateX(-${moveImg}px)`;
  };

  handleScroll = () => {
    const { scrollY } = this.state;
    this.setState({
      scrollY: window.pageYOffset,
      scrollActive: scrollY > 200 ? true : false,
    });
  };

  // getClickedProducts = () => {
  //   리스트 카드에 추가!
  //   localStorage.setItem("name", "hihihi");
  //   사이드바에 가져오기
  //   const products = localStorage.getItem("name");
  //   스토리지에 16개 이상 하나 삭제 후 추가
  //   localStorage.removeItem("name");
  //   localStorage.clear();

  //   localStorage.setItem('json', JSON.stringify({a: 1, b: 2}))

  // JSON.parse(localStorage.getItem('json'))
  // {a: 1, b: 2} => string
  // 리스트 페이지에서 아이템 클릭시 ("product_id, {imgurl, productid})

  // const items = { ...localStorage };
  // items.length를 setState에 저장
  //length가 4이상일 때 버튼 보이게 하기, {지금} : {4/length}
  // }

  render() {
    localStorage.getItem();
    return (
      <aside className={this.state.scrollActive ? 'SideBar' : 'SideBarHide'}>
        <div className="sidebarWrap">
          <ul>
            <li>
              <Link to="/">
                <div className="goToCart">장바구니</div>
              </Link>
            </li>
            <li>
              <div className="current">최근본상품</div>
            </li>
            <li className="imgBox" ref={this.myRef}>
              <div className="currentImg">
                {this.state.sidebar.map((data, id) => {
                  return (
                    <Link
                      key={id}
                      to={`/product/${data.id}`}
                      className="imgWrap"
                    >
                      <img alt="" src={data.img} />
                    </Link>
                  );
                })}
              </div>
            </li>
            <li className="listNumAndButtonWrap">
              <div className="listNumAndButton">
                {/* 제품 있을 때만 클릭 가능 로직 추가해야함 */}
                <button onClick={this.prevSlide}>&lt;</button>
                <div>{this.state.currentSlide}/4</div>
                <button onClick={this.nextSlide}>&gt;</button>
              </div>
            </li>
          </ul>
        </div>
        <ScrollTo />
      </aside>
    );
  }
}

export default SideBar;
