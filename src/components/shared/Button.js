import { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  render() {
    const { type, text } = this.props;

    return <a className={this.props.type}>{this.props.text}</a>;
  }
}
