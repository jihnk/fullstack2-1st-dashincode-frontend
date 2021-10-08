import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.isLiked,
    };
  }

  checkLike = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { toggleLike, id } = this.props;
    const { isLiked } = this.state;
    const { checkLike } = this;
    return (
      <FontAwesomeIcon
        onClick={() => toggleLike(id)}
        onMouseDown={checkLike}
        icon={faHeart}
        id={id}
        isLiked={isLiked}
        className={isLiked ? 'fa-heart fill' : 'fa-heart'}
      />
    );
  }
}
export default Like;
