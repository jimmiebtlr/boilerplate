import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from '/ui/layouts/layout.jsx';
import Home from '/ui/pages/home.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({});

if (Meteor.isClient) {
  Meteor.startup(() => {
    render((
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
          </Route>
        </Router>
      </MuiThemeProvider>
    ), document.body);
  });
}
