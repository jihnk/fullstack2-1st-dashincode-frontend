import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReviewList from '../Review/ReviewList';
import description from './img_product_description.jpg';
import notice from './img_product_notice.jpg';
import './ProductDesc.scss';

class ProductDesc extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: false,
      showNotice: false,
      showReview: false,
    };
    this.multiRefs = {
      descriptionRef: React.createRef(),
      noticeRef: React.createRef(),
      reviewRef: React.createRef(),
    };
  }

  handleScroll = () => {
    const scrollY = window.pageYOffset;
    const { descriptionRef, noticeRef, reviewRef } = this.multiRefs;
    this.setState({
      showDescription:
        scrollY >= descriptionRef.current.offsetTop &&
        scrollY < noticeRef.current.offsetTop
          ? true
          : false,
      showNotice:
        scrollY >= noticeRef.current.offsetTop &&
        scrollY < reviewRef.current.offsetTop
          ? true
          : false,
      showReview:
        scrollY >= reviewRef.current.offsetTop &&
        scrollY < reviewRef.current.offsetTop + reviewRef.current.clientHeight
          ? true
          : false,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  moveToRef = name => {
    this.multiRefs[name].current.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  render() {
    const { moveToRef } = this;
    const { showDescription, showNotice, showReview } = this.state;
    const { descriptionRef, noticeRef, reviewRef } = this.multiRefs;
    return (
      <section className="ProductDesc">
        <ul className="descriptionContents">
          <li
            className={showDescription && 'watched'}
            name="description"
            onClick={() => moveToRef('descriptionRef')}
          >
            상세설명
          </li>
          <li
            className={showNotice && 'watched'}
            name="notice"
            onClick={() => moveToRef('noticeRef')}
          >
            구매정보
          </li>
          <li
            className={showReview && 'watched'}
            name="review"
            onClick={() => moveToRef('reviewRef')}
          >
            상품후기
          </li>
        </ul>
        <img
          className="descriptionContainer"
          alt="Product Description"
          src={description}
          ref={descriptionRef}
        />
        <img
          className="noticeContainer"
          alt="Product Notice"
          src={notice}
          ref={noticeRef}
        />
        <div className="reviewContainer" ref={reviewRef}>
          <ReviewList />
        </div>
      </section>
    );
  }
}

export default withRouter(ProductDesc);
