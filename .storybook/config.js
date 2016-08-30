import { configure } from '@kadira/storybook';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function loadStories() {
  require('../tests/stories/card.jsx');
  require('../tests/stories/login.jsx');
  require('../tests/stories/menu.jsx');
}

configure(loadStories, module);
