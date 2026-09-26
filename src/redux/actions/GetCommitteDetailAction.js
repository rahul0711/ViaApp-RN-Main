import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetCommitteDetailsAction = CommitteeId => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getCommitteDetailsRequest());
    apiInstance
      .get(`GetAllCommitteeWiseVIAMembersDetails?CommitteeId=${CommitteeId}`)
      .then(result => {
        dispatch(actions.getCommitteDetailsSuccess(result?.data));
        resolve(result?.data);
      })
      .catch(error => {
        dispatch(actions.getCommitteDetailsError(error.response));
        reject();
      });
  });
