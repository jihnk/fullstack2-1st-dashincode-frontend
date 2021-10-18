import React from 'react';
import { withRouter } from 'react-router-dom';
import detail from './detail.jpg';
import info from './info.jpg';
import CommentList from '../Comment/CommentList';
import './ProductDescription.scss';

class ProductDescription extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: false,
      showInformation: false,
      showReview: false,
    };
    this.multiRefs = {
      descriptionRef: React.createRef(),
      informationRef: React.createRef(),
      reviewRef: React.createRef(),
    };
  }

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

  handleScroll = () => {
    const scrollY = window.pageYOffset;
    const { descriptionRef, informationRef, reviewRef } = this.multiRefs;
    this.setState({
      showDescription:
        scrollY >= descriptionRef.current.offsetTop &&
        scrollY < informationRef.current.offsetTop
          ? true
          : false,
      showInformation:
        scrollY >= informationRef.current.offsetTop &&
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

  render() {
    const { showDescription, showInformation, showReview } = this.state;

    return (
      <div className="ProductDescription">
        <div className="productDescriptionWrap">
          <section className="description">
            <ul className="descriptionContents">
              <li
                className={showDescription && 'watched'}
                onClick={() => this.moveToRef('descriptionRef')}
                name="description"
              >
                상세설명
              </li>
              <li
                className={showInformation && 'watched'}
                onClick={() => this.moveToRef('informationRef')}
                name="information"
              >
                구매정보
              </li>
              <li
                className={showReview && 'watched'}
                onClick={() => this.moveToRef('reviewRef')}
                name="review"
              >
                상품후기
              </li>
            </ul>
            <img
              className="descriptionImage"
              src={detail}
              alt="description"
              ref={this.multiRefs.descriptionRef}
            />
            <img
              className="informationImage"
              src={info}
              alt="information"
              ref={this.multiRefs.informationRef}
            />
            <div className="review" ref={this.multiRefs.reviewRef}>
              <CommentList />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductDescription);
