import { IS_AUTHENTICATED, LOGOUT } from './types';
import axios from 'axios';
import { baseUrl } from './../env';
import { message } from 'antd';
axios.defaults.baseURL = baseUrl;
let user = localStorage.getItem('user');

if (user && user !== 'undefined') {
  try {
    user = JSON.parse(user);
    axios.defaults.headers.common['token'] = user.user.token;
  } catch (err) {
    localStorage.removeItem('user');
  }
}
export default () => dispatch => {
  axios.interceptors.response.use(
    response => response,
    async error => {
      if (
        (error.response && error.response.status === 403) ||
        (error.response && error.response.status === 406)
      ) {
        axios.defaults.headers.common['token'] = '';
        localStorage.removeItem('user');
        dispatch(logoutAsync(false));
      }
      if (error.response && error.response.status === 400) {
        // console.log(error.response);
        message.error(
          "You had called an action which you don't have access to"
        );
      }
      return Promise.reject(error);
    }
  );
  dispatch(getCurrentUser(user));
};
const getCurrentUser = user => ({
  type: IS_AUTHENTICATED,
  payload: user
});
const logoutAsync = user => ({
  type: LOGOUT,
  payload: user
});
