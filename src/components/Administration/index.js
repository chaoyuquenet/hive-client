import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class Administration extends Component {
  render() {
    const props = this.props;

    return (
      <div>
        <div>
          <div style={{float: 'left', marginLeft: '40px'}}>
            <TextField
              hintText="Entrez vodre adresse mail"
              floatingLabelText="Email"
            /><br />
            <TextField
              hintText="Entrez vodre mot de passe"
              floatingLabelText="Password"
            />
          </div>
        </div>
      </div>
    );
  };
}
