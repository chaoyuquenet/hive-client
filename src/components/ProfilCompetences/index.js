import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

export default class ProfilCompetences extends Component {
  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'JavaScript'},
      {key: 1, label: 'NodeJs'},
      {key: 2, label: 'MongoDb'},
      {key: 3, label: 'ExpressJs'},
      {key: 4, label: 'MeteorJs'},
      {key: 5, label: 'WebSocket'},
      {key: 6, label: 'AngularJs'},
      {key: 7, label: 'jQuery'},
      {key: 8, label: 'HTML'},
      {key: 9, label: 'CSS'},
      {key: 10, label: 'SASS'},
      {key: 11, label: 'BootStrap'},
      {key: 12, label: 'Leaflet'},
      {key: 13, label: 'PHP'},
      {key: 14, label: 'MySQL'},
      {key: 15, label: 'Illustrator'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}
