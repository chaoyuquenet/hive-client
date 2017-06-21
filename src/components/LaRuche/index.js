import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 16px',
  fgColor: 'black',
  bgColor: 'white',
};

const LaRuche = () => (
  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Betrand Behaghel" />
        <MenuItem primaryText="Co-Fondateur" />
        <Divider />
        <MenuItem primaryText="PROFIL" />
      </Menu>
    </Paper>
  </div>
);

export default LaRuche;
