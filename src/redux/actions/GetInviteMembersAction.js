import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetInviteMembersAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getInviteMembersRequest());
    apiInstance
      .get('GetAllInviteeMemberDetails')
      .then(result => {
        dispatch(actions.getInviteMembersSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getInviteMembersError(error.response));
        reject();
      });
  });
