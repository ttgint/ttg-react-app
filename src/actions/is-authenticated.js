import axios from 'axios';
import { IS_AUTHENTICATED } from './types';

let currentUser = localStorage.getItem('user');

if (currentUser) {
  currentUser = JSON.parse(currentUser);
  axios.defaults.headers.common.Authorization = `Bearer ${currentUser.token}`;
}

export default () => dispatch => {
  dispatch(getCurrentUser(currentUser));
};

const getCurrentUser = user => ({
  type: IS_AUTHENTICATED,
  payload: user
});
