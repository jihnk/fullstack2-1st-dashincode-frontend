import React, { Component } from 'react';
import './ScrollTo.scss';

class ScrollTo extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    console.log(window.pageYOffset);
  };

  scrollToBottom = () => {
    document.documentElement.scrollTo(0, document.body.scrollHeight);
  };

  render() {
    return (
      <div className="ScrollTo">
        <button onClick={this.scrollToTop}>∧</button>
        <button onClick={this.scrollToBottom}>∨</button>
      </div>
    );
  }
}

export default ScrollTo;
