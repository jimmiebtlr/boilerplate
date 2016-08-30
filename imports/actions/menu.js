const constants = {
  OPEN: 'OPEN NAV DRAWER',
  TOGGLE: 'TOGGLE NAV DRAWER',
  CLOSE: 'CLOSE NAV DRAWER',
};

export default {
  openNavDrawer: () => ({ type: constants.OPEN }),
  closeNavDrawer: () => ({ type: constants.CLOSE }),
  toggleNavDrawer: () => ({ type: constants.TOGGLE }),
};

export { constants };
