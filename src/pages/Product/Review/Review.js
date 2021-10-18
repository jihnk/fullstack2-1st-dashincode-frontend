import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  render() {
    const { scores, nickname, comment, image_url } = this.props.review;
    return (
      <div className="Review">
        <p className="reviewHeader">
          <span className="reviewScores">{'★'.repeat(scores)}</span>
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
