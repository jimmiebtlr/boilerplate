import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Snackbar from '/imports/ui/components/snackbar';
import store from '../../store';
import actions from '../../actions/menu';
import Menu from '../components/menu.wd';
import Container from '../components/lib/container';
import Radium from 'radium';
const Style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  header: {
    flexGrow: 0,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    position: 'relative',
  },
};

const Layout = ({ children }) => (
  <div style={Style.root}>
    <div style={Style.header}>
      <AppBar
        title="Meteor templates"
        onLeftIconButtonTouchTap={() => store.dispatch(actions.openNavDrawer())}
      />
    </div>

    <Menu />
    <Container style={Style.content}>
      <Snackbar />
      {children}
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Radium(Layout);
