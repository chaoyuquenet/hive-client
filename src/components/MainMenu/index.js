import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialGroup from 'material-ui/svg-icons/social/group';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import FontIcon from 'material-ui/FontIcon';

const isLoggedIn = true;

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 16px',
    backgroundColor: 'white',
  },
  menuItem: {
    color: 'black',
  }
};

const menuData = [
  { text: 'Accueil', icon: <ActionHome />},
  { text: 'Profil', icon: <SocialPerson />},
  { text: 'Message', icon: <ContentInbox/>},
  { text: 'La Ruche', icon: <SocialGroup />},
  { text: 'Déconnexion', icon: <ActionPowerSettingsNew />, needsLoggedIn :true },
];


const renderMenuItems = (menu, loggedIn) => menu
  .filter( menuItemData => !menuItemData.needsLoggedIn || isLoggedIn)
  .map( (menuItemData) => <MenuItem style={style.menuItem} primaryText={menuItemData.text} leftIcon={menuItemData.icon} />);

const MainMenu = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        {renderMenuItems(menuData, isLoggedIn)}
      </Menu>
    </Paper>
  </div>
);

export default MainMenu;
