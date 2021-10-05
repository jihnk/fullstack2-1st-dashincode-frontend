import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import React from 'react';

class Likes extends React.Component {
  render() {
    const { toggleLike, isLiked, id } = this.props;

    return (
      <FontAwesomeIcon
        onClick={() => toggleLike(id)}
        icon={faHeart}
        id={id}
        className={isLiked ? 'fill' : 'fa-heart'}
      />
    );
  }
}
export default Likes;
