import React, { Component }from 'react';

export default class LoginAddress extends Component {
  render() {
    const props = this.props;

    const style = {
      display: 'inline-block',
      verticalAlign: 'top',
      fontFamily: 'sans-serif',
      width: '200px',
    }

    return (
      <div style={style}>
        <b>{this.props.title}</b>
        <p>{this.props.children}</p>
      </div>
    );
  };
}
