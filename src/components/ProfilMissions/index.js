import React, { Component }from 'react';

export default class ProfilMissions extends Component {
  render() {
    const props = this.props;

    const style = {
      display: 'inline-block',
    }

    return (
      <div style={style}>
        {this.props.title}
        <p>{this.props.children}</p>
      </div>
    );
  };
}
