import { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { StyleSheet, css } from 'aphrodite';
import r from 'r-dom';

const styles = StyleSheet.create({
  paper: {
    padding: '12px',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  header: {
    margin: '12px',
  },
});

const Login = ({ handleFacebookLogin }) => (
  r(Paper, { className: css(styles.paper) }, [
    r.h2({}, ['Login to continue']),
    r(RaisedButton, {
      className: 'LoginButton',
      backgroundColor: '#3b5998',
      icon: r(FontIcon, { className: 'fa fa-facebook' }),
      label: 'Login With Facebook',
      primary: true,
      onClick: handleFacebookLogin,
    }),
  ])
);

Login.propTypes = {
  handleFacebookLogin: PropTypes.func.isRequired,
};

export default Login;
