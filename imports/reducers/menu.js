import { constants } from '../actions/menu';

export default function counter(state = { navDrawerOpen: false }, action) {
  switch (action.type) {
    case (constants.OPEN):
      return Object.assign({}, state, { navDrawerOpen: true });
    case (constants.CLOSE):
      return Object.assign({}, state, { navDrawerOpen: false });
    case (constants.TOGGLE):
      return Object.assign({}, state, { navDrawerOpen: !state.navDrawerOpen });
    default:
      return state;
  }
}
