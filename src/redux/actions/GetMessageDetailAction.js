import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetMessagesDetailsAction = MessageId => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getMessagesDetailsRequest());
    apiInstance
      .get(`GetAllIDWiseMessageDetails?MessageId=${MessageId}`)
      .then(result => {
        dispatch(actions.getMessagesDetailsSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getMessagesDetailsError(error.response));
        reject();
      });
  });
