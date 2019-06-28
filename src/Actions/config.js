import { CONFIG } from './types';
export default data => async dispatch => {
  dispatch(get(data));
};
const get = data => ({
  type: CONFIG,
  payload: data
});
