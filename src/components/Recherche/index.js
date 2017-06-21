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

export default class Recherche extends React.Component {

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
        <Tab label="ABEILLES" value="a">
          <div>
          </div>
        </Tab>
        <Tab label="ACTUALITES" value="b">
          <div>
          </div>
        </Tab>
        <Tab label="AUTRE" value="c">
          <div>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
