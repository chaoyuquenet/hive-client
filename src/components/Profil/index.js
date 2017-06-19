import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Profil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="INFOS" value="a">
          <div>
          </div>
        </Tab>
        <Tab label="COMPETENCES" value="b">
          <div>
          </div>
        </Tab>
        <Tab label="MISSIONS" value="c">
          <div>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
