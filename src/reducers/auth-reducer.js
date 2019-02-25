import { LOGIN, AUTH_ERR, LOGOUT, IS_AUTHENTICATED } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
        authenticated: !!action.payload,
        alert: {
          message: `Welcome ${state.username}!`,
          type: 'success'
        }
      };
    case AUTH_ERR:
      return {
        user: null,
        authenticated: false,
        alert: {
          message: 'Incorrect username or password!',
          type: 'err'
        }
      };
    case LOGOUT:
      return {
        user: null,
        authenticated: false,
        alert: false
      };
    case IS_AUTHENTICATED:
      return {
        user: action.payload,
        authenticated: !!action.payload,
        alert: false
      };
    default:
      return state;
  }
};
