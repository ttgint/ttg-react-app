import { GET_CONFIG } from './types';
import { actionAsync } from './Common';

export default () => async dispatch => {
  dispatch(actionAsync(GET_CONFIG, {}));
};
