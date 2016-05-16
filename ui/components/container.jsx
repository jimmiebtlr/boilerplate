import React from 'react';
import Radium from 'radium';

const containerStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '12px',
  marginBottom: '12px',
};

class Container extends React.Component {
  render() {
    const { style } = this.props;

    style.push(containerStyle);

    return (<div className="container" style={style}>
      { this.props.children }
    </div>);
  }
}

Container.defaultProps = {
  style: [],
};

Container.propTypes = {
  style: React.PropTypes.array,
  children: React.PropTypes.object.isRequired,
};

export default Radium(Container);
