import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 16px',
  fgColor: 'black',
  bgColor: 'white',
};

const LaRuche = () => (
  <div>
    <Paper style={style}>
      <div>
        Bertrand Behaghel
      </div>
      <div>
        Co-Fondateur
      </div>
      <Divider />
      <div>
        Profil
      </div>
    </Paper>
  </div>
);

export default LaRuche;
