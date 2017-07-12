import React, { Component } from 'react';
import LogoImg from './assets/abbeal_logo.png';

export default class Logo extends Component {
  render() {
    const props = this.props;

    return (
      <img style={{float: 'left'}} src={LogoImg} alt='Abbeal'/>
    );
  };
}
