import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Like extends React.Component {
  render() {
    const { toggleLike, id, isLiked } = this.props;
    return (
      <FontAwesomeIcon
        onClick={toggleLike}
        icon={faHeart}
        id={id}
        className={isLiked === 1 ? 'fa-heart fill' : 'fa-heart'}
      />
    );
  }
}
export default Like;
