import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { mount } from 'react-mounter';

import Layout from '/imports//ui/layouts/layout.jsx';
import Home from '/imports/ui/pages/home.jsx';
import store from '/imports/store';

injectTapEventPlugin();
const muiTheme = getMuiTheme({});
const history = syncHistoryWithStore(browserHistory, store);

if (Meteor.isClient) {
  Meteor.startup(() => {
    render((
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Layout}>
              <IndexRoute component={Home} />
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    ), document.body);
  });
}
