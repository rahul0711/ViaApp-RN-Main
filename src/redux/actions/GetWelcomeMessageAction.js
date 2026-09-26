import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetWelcomeMessageAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getWelcomeMessageRequest());
    apiInstance
      .get('GetWelcomeMessage')
      .then(result => {
        dispatch(actions.getWelcomeMessageSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getWelcomeMessageError(error.response));
        reject();
      });
  });
