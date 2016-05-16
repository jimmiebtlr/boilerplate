import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Container from '/ui/components/container';


class Layout extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { location } = this.props;
    const { router } = this.context;
    const newQuery = Object.assign(location.query, {
      'nav-open': !router.isActive({ query: { 'nav-open': 'true' } }),
    });
    router.replace({
      pathname: location.pathname,
      query: newQuery,
    });
  }

  render() {
    const { router } = this.context;
    const navOpen = !!router.isActive({ query: { 'nav-open': 'true' } });

    return (<div>
      <AppBar
        title="Meteor templates"
        onLeftIconButtonTouchTap={this.toggleMenu}
      />
      <Drawer
        width={200}
        open={navOpen}
        docked={false}
        onRequestChange={this.toggleMenu}
      >
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
      </Drawer>
      <Container>
        {this.props.children}
      </Container>
    </div>);
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

Layout.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default Layout;
