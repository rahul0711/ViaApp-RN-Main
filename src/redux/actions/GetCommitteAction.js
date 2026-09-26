import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetCommitteAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getCommitteRequest());
    apiInstance
      .get('/GetCommitteeMasterDetails')
      .then(result => {
        dispatch(actions.getCommitteSuccess(result?.data));
        resolve(result?.data);
      })
      .catch(error => {
        dispatch(actions.getCommitteError(error.response));
        reject();
      });
  });
