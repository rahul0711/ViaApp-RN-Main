import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetNewsAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getNewsRequest());
    apiInstance
      .get('/GetAllNewsDetailsLatest')
      .then(result => {
        dispatch(actions.getNewsSuccess(result?.data));
        resolve(result?.data);
      })
      .catch(error => {
        dispatch(actions.getNewsError(error.response.message));
        reject(error.response);
      });
  });
