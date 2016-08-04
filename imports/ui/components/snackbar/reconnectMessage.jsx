import React from 'react';
import { compose, composeAll } from 'react-komposer';
import moment from 'moment';
import { connectionState } from 'meteor/jimmiebtlr:data-compositions';

const ReconnectMessage = ({ retryText }) => (
  <span>
    Server unavaliable.
    {` Retrying in ${retryText}`}
  </span>
);

ReconnectMessage.propTypes = {
  retryText: React.PropTypes.string.isRequired,
};

export default composeAll(
  compose((props, onData) => {
    const update = () => {
      if (!props.connected) {
        const duration = moment.duration(props.connectionRetryTime - new Date());
        if (duration.minutes()) {
          onData(null, {
            retryText: `${duration.minutes()}m`,
          });
        } else {
          onData(null, {
            retryText: `${duration.seconds()}s`,
          });
        }
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }),
  connectionState
)(ReconnectMessage);
