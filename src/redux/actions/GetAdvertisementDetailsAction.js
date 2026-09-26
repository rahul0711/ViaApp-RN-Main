import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetAdvertisementDetailsAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getAdvertisementRequest());
    apiInstance
      .get('/GetAllAdvertisementDetails')
      .then(result => {
        dispatch(actions.getAdvertisementSuccess(result?.data));
        resolve(result?.data);
      })
      .catch(error => {
        dispatch(actions.getAdvertisementError(error.response));
        reject();
      });
  });
