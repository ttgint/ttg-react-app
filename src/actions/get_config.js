import axios from 'axios';
import { GET_CONFIG } from './types';
import { actionAsync } from './Common';

export default params => async dispatch => {
  const res = await axios.get(`/api/config/`, {
    params
  });
  dispatch(actionAsync(GET_CONFIG, res.data));
};
