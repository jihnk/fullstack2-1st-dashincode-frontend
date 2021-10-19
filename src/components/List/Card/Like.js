import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Like extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    fetch(`/like/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ isLiked: res.DATA });
      });
  }

  render() {
    const { toggleLike, id, isLiked } = this.props;
    return (
      <FontAwesomeIcon
        onClick={toggleLike}
        icon={faHeart}
        id={id}
        className={isLiked ? 'fa-heart fill' : 'fa-heart'}
      />
    );
  }
}
export default Like;
