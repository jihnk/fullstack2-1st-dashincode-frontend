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

  componentDidMount() {
    const { id } = this.props;
    fetch(`/like/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ isLiked: res.DATA });
      });
  }

  checkLike = () => {
    const { isLiked } = this.props;
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
        onClick={toggleLike}
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
