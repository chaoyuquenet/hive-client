import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Beely from './assets/beely.png';

export default class LoginForm extends Component {
  render() {
    const props = this.props;

    const buttonStyle = {
      fontWeight: 'bold',
      margin: '12px',
    }

    return (
      <div>
        <div>
          <img style={{float: 'left'}} src={Beely} alt='Beely mascotte Abbeal'/>
          <div style={{float: 'left', marginLeft: '40px'}}>
            <TextField
              hintText="Entrez vodre adresse mail"
              floatingLabelText="Email"
            /><br />
            <TextField
              hintText="Entrez vodre mot de passe"
              floatingLabelText="Password"
            /><br />
            <RaisedButton label="Connexion" primary={true} style={buttonStyle} />
          </div>
        </div>
      </div>
    );
  };
}
