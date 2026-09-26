import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetMeetingsAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getMeetingsRequest());
    apiInstance
      .get('/GetAllMeetingDetails')
      .then(result => {
        dispatch(actions.getMeetingsSuccess(result?.data));
        resolve(result?.data);
      })
      .catch(error => {
        dispatch(actions.getMeetingsError(error.response.message));
        reject(error.response);
      });
  });
