import React, { Component } from 'react';
import Comment from './Comment';
import './CommentList.scss';

class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/comment.json', {
      header: {
        Accept: 'application / json',
      },
    })
      .then(res => res.json())
      .then(comment => {
        this.setState({
          commentList: comment,
        });
      });
  }

  render() {
    const { commentList } = this.state;

    return (
      <div className="commentContainer">
        <div className="commentTitleWrap">
          <header className="commentTitle">
            상품후기<span className="commentCount">(24018)</span>
          </header>
          <ul className="noticeWrap">
            <li className="noticeText title">[공지]</li>
            <li className="noticeText">
              식품 등의 표시ㆍ광고에 관한 법률에 의거하여 의약품으로 오인될 수
              있는 효능,
              <br /> 질병의 예방 및 치료 효과 등의 단어 및 체험후기 등의 내용은
              피해주시고, 이러한 내용은 상품과 관련이 없으며 사전공지없이
              삭제될수 있음을 알려드립니다.
            </li>
          </ul>
        </div>
        <div className="commentListWrap">
          {commentList.map(props => {
            return <Comment key={props.userId} comment={props} />;
          })}
        </div>
      </div>
    );
  }
}

export default CommentList;
