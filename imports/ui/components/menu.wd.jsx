import Menu from './menu';
import { connect } from 'react-redux';
import actions from '../../actions/menu';
import store from '../../store';

export default connect((state) =>
  Object.assign(
    {},
    state.layout,
    { handleToggle: () => store.dispatch(actions.toggleNavDrawer()) }
  )
)(Menu);
