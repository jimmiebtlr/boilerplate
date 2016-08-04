import React from 'react';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Snackbar from '/imports/ui/components/snackbar';
import { layoutHOC, actions } from 'react-ui-skeleton';
import store from '/imports/store';

const Menu = () => (
  <div>
    <AppBar
      title="Meteor templates"
      iconClassNameLeft=""
    />
    <List>
      <ListItem
        primaryText="Home"
      />
      <ListItem
        primaryText="Home"
      />
      <ListItem
        primaryText="Home"
      />
      <ListItem
        primaryText="Home"
      />
    </List>
  </div>
);

const Layout = layoutHOC({
  store,
  menu: <Menu />,
  snackbar: <Snackbar />,
  header: (
    <AppBar
      title="Meteor templates"
      onLeftIconButtonTouchTap={() => store.dispatch(actions.openNavDrawer())}
    />
  ),
});

export default Layout;
