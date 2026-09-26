import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetEmergencyContactsAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getEmergencyContactsRequest());
    apiInstance
      .get('GetAllEmergencyContactPersonDetials')
      .then(result => {
        dispatch(actions.getEmergencyContactsSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getEmergencyContactsError(error.response));
        reject();
      });
  });
