import axios from 'axios';

import { AUTH_ERR, LOGIN } from './types';

export default () => async dispatch => {
  try {
    const res = await axios({
      url: `/api/v1/token`,
      method: 'POST'
    });
    axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
    localStorage.setItem('ttg-identity', JSON.stringify(res.data.token));
    dispatch(loginAsync(res.data));
  } catch (err) {
    dispatch(getAuthErr(err));
  }
};
const loginAsync = user => ({
  type: LOGIN,
  payload: user
});
const getAuthErr = err => ({
  type: AUTH_ERR,
  payload: err
});
