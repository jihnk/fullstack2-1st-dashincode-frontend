import { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  render() {
    const { type, text } = this.props;

    return <a className={type}>{text}</a>;
  }
}
