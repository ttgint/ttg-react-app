import { CONFIG, GET_CONFIG } from '../actions/types';

let config = localStorage.getItem('config');
if (config) {
  config = JSON.parse(config);
} else {
  config = {
    preload_page: true,
    visibleHelp: false,
    visibleNotification: false,
    theme: 'dark',
    collapsed: false,
    visibleSettings: false
  };
}

export default (state = config, action) => {
  switch (action.type) {
    case CONFIG:
      state = {
        ...state,
        ...action.payload
      };

      localStorage.setItem('config', JSON.stringify(state));
      return state;

    case GET_CONFIG:
      return state;

    default:
      return state;
  }
};
