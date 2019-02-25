import axios from 'axios';
import { LOGOUT } from './types';

export default () => async dispatch => {
  axios.defaults.headers.common.Authorization = '';
  localStorage.removeItem('user');
  dispatch(logoutAsync(false));
};
const logoutAsync = user => ({
  type: LOGOUT,
  payload: user
});
