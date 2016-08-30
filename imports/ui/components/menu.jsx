import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

const Menu = ({ navDrawerOpen, handleToggle }) => (
  <Drawer
    width={200}
    open={navDrawerOpen}
    docked={false}
    onRequestChange={handleToggle}
  >
    <AppBar
      title="Meteor templates"
      iconClassNameLeft=""
    />
    <List>
      <ListItem
        primaryText="Home"
      />
    </List>
  </Drawer>
);


Menu.propTypes = {
  navDrawerOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Menu;
