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
    window.addEventListener('scroll', this.handleScroll);

    if (localStorage.length > 0) {
      const sidebarData = JSON.parse(localStorage.getItem('loadedProduct'));
      const num = Math.ceil(sidebarData.length / 4);
      this.setState({
        sidebar: sidebarData,
        slideNum: sidebarData.length < 4 ? 1 : num,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.pageYOffset,
      scrollActive: window.pageYOffset > 400 ? true : false,
    });
  };

  deleteLoadedProduct = id => {
    if (window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      let loadedProduct = JSON.parse(localStorage.getItem('loadedProduct'));
      const filteredProduct = loadedProduct.filter(
        product => product.productId !== id
      );
      localStorage.setItem('loadedProduct', JSON.stringify(filteredProduct));
      this.setState({
        sidebar: JSON.parse(localStorage.getItem('loadedProduct')),
      });
    } else {
      return;
    }
  };

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

  render() {
    const firstData = (this.state.currentSlide - 1) * 4;
    const sidebar = this.state.sidebar.slice(firstData, firstData + 4);

    return (
      <aside className={this.state.scrollActive ? 'SideBar' : 'SideBarHide'}>
        <div className="sidebarWrap">
          <ul>
            <li>
              <Link to="/cart">
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
                    <div className="loadedProduct">
                      <Link
                        key={id}
                        to={`/product/${data.detailId}`}
                        className="imgWrap"
                      >
                        <img alt="" src={data.imageUrl} />
                      </Link>
                      <button
                        className="deleteBtn"
                        onClick={() => this.deleteLoadedProduct(data.productId)}
                      >
                        x
                      </button>
                    </div>
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
