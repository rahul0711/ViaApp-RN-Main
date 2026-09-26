import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetElectedMembersAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getElectedMembersRequest());
    apiInstance
      .get('GetAllElectedMembersDetails')
      .then(result => {
        dispatch(actions.getElectedMembersSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getElectedMembersError(error.response));
        reject();
      });
  });
