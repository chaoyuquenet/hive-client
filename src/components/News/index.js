import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

export default class News extends Component {
  render() {
    const props = this.props;

    const style = {
      color: 'black',
      backgroundColor: 'white',
      margin: '20px',
      padding: '20px',
    };

    return (
      <Paper style={style}>
        <h2>{this.props.title}</h2>
        <div><em>{this.props.author}</em></div>
        {this.props.children}

      </Paper>
    );
  };
}
