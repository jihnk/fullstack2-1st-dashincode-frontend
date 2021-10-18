import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      rate: [],
    };
  }

  componentDidMount() {
    const { scores } = this.props.review;
    const stars = [];
    for (let i = 0; i < scores; i++) {
      stars.push('★');
    }
    this.setState({
      rate: stars.join(''),
    });
  }

  render() {
    const { nickname, comment, image_url } = this.props.review;
    const { rate } = this.state;
    return (
      <div className="Review">
        <p className="reviewHeader">
          <span className="reviewScores">{rate}</span>
          <span className="reviewNickname">{nickname}</span>
        </p>
        <p className="reviewComment">{comment}</p>
        <img
          className="reviewImage"
          alt="Product Image (Posted by Reviewer)"
          src={image_url}
        />
      </div>
    );
  }
}

export default Review;
