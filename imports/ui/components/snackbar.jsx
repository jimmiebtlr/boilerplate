import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { Session } from 'meteor/session';
import { composeAll, composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { connectionState, updateAvaliableState } from 'meteor/jimmiebtlr:data-compositions';
import ReconnectMessage from './snackbar/reconnectMessage';

const sbKey = 'snackbars';
Session.setDefault(sbKey, []);
const activeSnackbars = () => Session.get(sbKey);
const showSnackbar = (opts) => {
  const sbs = activeSnackbars();
  const activeSbs = sbs.slice(0);
  activeSbs.push(opts);
  Session.set(sbKey, activeSbs);
};
const popSnackbar = () => {
  const sbs = activeSnackbars();
  const activeSbs = sbs.slice(1);
  Session.set(sbKey, activeSbs);
};

const Sb = ({ connected, updateAvaliable, snackbars, handleUpdate }) => {
  let options;
  if (snackbars.length) {
    options = snackbars[0];
    _.extend(options, {
      autoHideDuration: 10000,
      onRequestClose: popSnackbar,
    });
  } else if (!connected) {
    options = {
      message: <ReconnectMessage />,
      action: 'Retry Now',
      onActionTouchTap: () => Meteor.reconnect(),
    };
  } else if (updateAvaliable) {
    options = {
      message: 'An update for this application is avaliable.',
      action: 'Update Now',
      onActionTouchTap: handleUpdate,
    };
  }

  if (options) {
    return (
      <Snackbar
        open
        {...options}
      />
    );
  }
  return (<span></span>);
};

Sb.propTypes = {
  connected: React.PropTypes.bool.isRequired,
  retryText: React.PropTypes.string,
  updateAvaliable: React.PropTypes.bool.isRequired,
  snackbars: React.PropTypes.array.isRequired,
  handleUpdate: React.PropTypes.func.isRequired,
};

export default composeAll(
  composeWithTracker((props, onData) => { onData(null, { snackbars: activeSnackbars() }); }),
  connectionState,
  updateAvaliableState
)(Sb);
export { showSnackbar };
