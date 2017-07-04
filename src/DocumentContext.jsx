import { h } from 'preact';
import React, { Component, Children } from 'react'; // eslint-disable-line no-unused-vars

export default class DocumentContext extends Component {

  getChildContext() {
    return {
      document: this.props.document,
      window: this.props.window
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
