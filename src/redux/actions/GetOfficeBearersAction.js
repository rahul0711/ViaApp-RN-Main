import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetOfficeBearersAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getOfficeBearersRequest());
    apiInstance
      .get('GetAllOfficeBearsDetails')
      .then(result => {
        dispatch(actions.getOfficeBearersSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getOfficeBearersError(error.response));
        reject();
      });
  });
