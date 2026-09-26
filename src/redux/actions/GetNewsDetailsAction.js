import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetNewsDetailsAction = NewsId => async dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getNewsDetailsRequest());
    apiInstance
      .get(`GetAllIDWiseNewsDetails?NewsId=${NewsId}`)
      .then(result => {
        dispatch(actions.getNewsDetailsSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getNewsDetailsError(error.response.message));
        reject(error.response);
      });
  });
