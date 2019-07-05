import { CONFIG, GET_CONFIG } from '../actions/types';

export default (
  state = {
    preload_page: true,
    show_notification: false,
    theme: 'dark'
  },
  action
) => {
  switch (action.type) {
    case CONFIG:
      state = {
        ...state,
        ...action.payload
      };
      return state;

    case GET_CONFIG:
      state = {
        ...state,
        ...action.payload
      };
      return state;

    default:
      return state;
  }
};
