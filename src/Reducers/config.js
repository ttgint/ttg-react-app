import { CONFIG, GET_CONFIG } from './../Actions/types';
export default (
  state = {
    preload_page: true,
    facility_name: 'TTG',
    show_notification: false
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
