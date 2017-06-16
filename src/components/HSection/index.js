import React, { Component } from 'react';

export default class HSection extends Component {
  render() {
    const props = this.props;
    const { height, bgColor, fgColor } = props;
    const style = {
      height,
      color: fgColor,
      backgroundColor: bgColor,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  };
}
