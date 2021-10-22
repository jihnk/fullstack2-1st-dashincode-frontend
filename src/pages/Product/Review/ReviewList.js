import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API_ENDPOINT } from '../../../api';
import Review from './Review';
import './ReviewList.scss';

class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${API_ENDPOINT}/product/${id}/review`, {
      header: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(reviewList => {
        this.setState({
          reviews: reviewList,
        });
      });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="ReviewList">
        <div className="reviewTitleWrap">
          <header className="reviewTitle">
            상품후기
            <span className="reviewCount">
              ({reviews.length.toLocaleString()})
            </span>
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
        <div className="reviewListWrap">
          {reviews.map(review => {
            return <Review key={review.user_id} review={review} />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewList);
