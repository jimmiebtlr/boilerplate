import React from 'react';
import Radium from 'radium';

const containerStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '12px',
  marginBottom: '12px',
};

const Container = ({ style, children }) => {
  const s = style.slice(0);
  s.push(containerStyle);

  return (
    <div className="container" style={s}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  style: [],
};

Container.propTypes = {
  style: React.PropTypes.array,
  children: React.PropTypes.node.isRequired,
};

export default Radium(Container);
