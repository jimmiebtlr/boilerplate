import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import Menu from '../../imports/ui/components/menu.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({});
const CenterDecorator = (story) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    {story()}
  </MuiThemeProvider>
);
addDecorator(CenterDecorator);

storiesOf('Menu', module)
  .add('open', () => (
    <Menu navDrawerOpen handleToggle={action('toggle')} />
  ));
