import { combineReducers } from 'redux';
import themes from './themes';
import config from './config';
const rootReducer = combineReducers({
    themes,
    config 
  });
  export default rootReducer;
  