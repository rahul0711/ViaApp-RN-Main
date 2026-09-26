import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetMessagesAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getMessagesRequest());
    apiInstance
      .get('GetMessageDetails')
      .then(result => {
        dispatch(actions.getMessagesSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getMessagesError(error.response));
        reject();
      });
  });
