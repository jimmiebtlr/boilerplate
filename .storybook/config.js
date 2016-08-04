import { configure } from '@kadira/storybook';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function loadStories() {
  require('../tests/stories/card.js');
  require('../tests/stories/login.js');
}

configure(loadStories, module);
