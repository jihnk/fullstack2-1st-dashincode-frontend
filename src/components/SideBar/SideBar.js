import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: [],
      slideNum: 1,
      totalSlides: 1,
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
        const num = Math.ceil(data.DATA.length / 4);
        this.setState({
          sidebar: data.DATA,
          slideNum: num,
        });
      });
    console.log(this.state);
    window.addEventListener('scroll', this.handleScroll);
    if (localStorage.length > 0) {
      const sidebarData = JSON.parse(localStorage.getItem('loadedProduct'));
      this.setState({
        sidebar: sidebarData,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nextSlide = () => {
    const { slideNum, currentSlide } = this.state;
    this.setState({
      currentSlide: currentSlide === slideNum ? 1 : currentSlide + 1,
    });
  };

  prevSlide = () => {
    const { slideNum, currentSlide } = this.state;
    this.setState({
      currentSlide: currentSlide === 1 ? slideNum : currentSlide - 1,
    });
  };

  handleScroll = () => {
    const { scrollY } = this.state;
    this.setState({
      scrollY: window.pageYOffset,
      scrollActive: scrollY > 200 ? true : false,
    });
  };

  render() {
    const firstData = (this.state.currentSlide - 1) * 4;
    const sidebar = this.state.sidebar.slice(firstData, firstData + 4);
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
                {sidebar.map((data, id) => {
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
                <button onClick={this.prevSlide}>&lt;</button>
                <div>
                  {this.state.currentSlide}/{this.state.slideNum}
                </div>
                <button onClick={this.nextSlide}>&gt;</button>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideBar;
