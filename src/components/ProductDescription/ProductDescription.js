import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProductDescription.scss';
import detail from './detail.jpg';
import info from './info.jpg';
import CommentList from '../Comment/CommentList';

class ProductNav extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      reviewCount: 0,
      descriptionClicked: false,
      informationClicked: false,
      reviewClicked: false,
    };
    this.descriptionRef = React.createRef();
    this.informationRef = React.createRef();
    this.reviewRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // fetch(`http://localhost:8000/product/description/${id}`)
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({ imageUrl: res.IMAGE, reviewCount: res.REVIEW })
    //   );
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  moveToRef = name => {
    let location = '';
    if (name === 'description') {
      location =
        this.descriptionRef.current.offsetTop + window.innerHeight + 200;
    } else if (name === 'information') {
      location =
        this.informationRef.current.offsetTop + window.innerHeight + 180;
    } else if (name === 'review') {
      location = this.reviewRef.current.offsetTop + window.innerHeight + 150;
    }

    window.scroll({
      top: location,
      behavior: 'smooth',
    });
  };

  handleScroll = () => {
    const scrollY = window.pageYOffset;
    this.setState({
      descriptionClicked:
        scrollY >= this.descriptionRef.current.offsetTop + window.innerHeight &&
        scrollY < this.informationRef.current.offsetTop + window.innerHeight
          ? true
          : false,
      informationClicked:
        scrollY >= this.informationRef.current.offsetTop + window.innerHeight &&
        scrollY < this.reviewRef.current.offsetTop + window.innerHeight
          ? true
          : false,
      reviewClicked:
        scrollY >= this.reviewRef.current.offsetTop + window.innerHeight &&
        scrollY <
          this.reviewRef.current.offsetTop +
            window.innerHeight +
            this.reviewRef.current.clientHeight
          ? true
          : false,
    });
  };

  render() {
    const {
      imageUrl,
      reviewCount,
      descriptionClicked,
      informationClicked,
      reviewClicked,
    } = this.state;

    return (
      <div className="ProductDescription">
        <div className="productDescriptionWrap">
          <section className="description">
            <ul className="descriptionContents">
              <li
                className={descriptionClicked && 'watched'}
                onClick={() => this.moveToRef('description')}
                name="description"
              >
                상세설명
              </li>
              <li
                className={informationClicked && 'watched'}
                onClick={() => this.moveToRef('information')}
                name="information"
              >
                구매정보
              </li>
              <li
                className={reviewClicked && 'watched'}
                onClick={() => this.moveToRef('review')}
                name="review"
              >
                상품후기({reviewCount})
              </li>
            </ul>
            <img
              className="descriptionImage"
              src={detail}
              alt="description"
              ref={this.descriptionRef}
            />
            <img
              className="informationImage"
              src={info}
              alt="information"
              ref={this.informationRef}
            />
            <div className="review" ref={this.reviewRef}>
              <CommentList />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductNav);
