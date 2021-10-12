import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      rate: [],
    };
  }

  componentDidMount() {
    const { scores } = this.props.comment;
    const cnt = [];

    for (let i = 0; i < scores; i++) {
      cnt.push('★');
    }
    const countStar = cnt.join(' ');

    this.setState({
      rate: countStar,
    });
  }

  render() {
    const { rate } = this.state;
    const { nickname, comment, imageUrl } = this.props.comment;

    return (
      <div className="commentWrap">
        <p className="commentHeader">
          <span className="commentRate">{rate}</span>
          <span className="commentNickName">{nickname}</span>
        </p>
        <p className="commentText">{comment}</p>
        <img className="commentImg" alt="상품 이미지" src={imageUrl} />
      </div>
    );
  }
}

export default Comment;
