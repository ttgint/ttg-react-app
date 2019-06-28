import {
  GET_THEMES,
  DELETE_THEME,  
  CREATE_THEME,
  UPDATE_THEME
} from './../Actions/types';
export default (state = [], action) => {
  switch (action.type) {
    case GET_THEMES:
      state = action.payload;
      return state;

    case CREATE_THEME:
      return state ? [...state, action.payload] : [];

    case UPDATE_THEME:
      if (state) {
        state = state.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      }
      return state ? state : [];

    case DELETE_THEME:
      state = state.filter(item => {
        return item.id !== action.payload;
      });
      return state;

    default:
      return state;
  }
};
