import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Like extends React.Component {
  render() {
    const { toggleLike, isLiked, id } = this.props;
    return (
      <FontAwesomeIcon
        onClick={() => toggleLike(id)}
        icon={faHeart}
        id={id}
        isLiked={isLiked}
        className={isLiked ? 'fa-heart fill' : 'fa-heart'}
      />
    );
  }
}
export default Like;
