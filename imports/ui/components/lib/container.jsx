import React from 'react';
import Radium from 'radium';

const Style = {
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '12px',
    marginBottom: '12px',
  },
};

const Container = ({ style, children }) => {
  const s = [style];
  s.push(Style.root);

  return (
    <div className="container" style={s}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  style: {},
};

Container.propTypes = {
  style: React.PropTypes.array,
  children: React.PropTypes.node.isRequired,
};

export default Radium(Container);
