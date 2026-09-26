import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetDepartmentAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getDepartmentRequest());
    apiInstance
      .get('GetAllImpContactDepartmentMasterDetails')
      .then(result => {
        dispatch(actions.getDepartmentSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getDepartmentError(error.response));
        reject();
      });
  });
