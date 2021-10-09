import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
    <div className="commentContainer">
      <div className="commentTitleWrap">
        <header className="commentTitle">상품후기<span className="commentCount">(24018)</span></header>
      </div>
    </div>
    )
  }
}

export default Comment;

