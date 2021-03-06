import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from '../../imports/ui/components/login.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({});

storiesOf('Login', module)
  .add('with text', () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Login handleFacebookLogin={action('Login with facebook triggered')} />
    </MuiThemeProvider>
  ));
