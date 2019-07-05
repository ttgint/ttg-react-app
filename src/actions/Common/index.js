import { ALERT } from '../types';

export const actionAsync = (action, data) => ({
  type: action,
  payload: data
});

export const error = err => ({
  type: ALERT,
  payload: {
    message: err && err.message ? err.message : err.statusText,
    type: 'err'
  }
});

export const success = (msg, action) => ({
  type: ALERT,
  payload: {
    message: msg || 'Success!',
    action: action || '',
    type: 'success'
  }
});
