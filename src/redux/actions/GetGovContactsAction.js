import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetGovContactsAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getGovContactsRequest());
    apiInstance
      .get('GetAllImpGoverementContactNoDetials')
      .then(result => {
        dispatch(actions.getGovContactsSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getGovContactsError(error.response));
        reject();
      });
  });
