import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetEventsAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getEventsRequest());
    apiInstance
      .get('/GetAllEventDetailsLatest')
      .then(result => {
        dispatch(actions.getEventsSuccess(result?.data));
        resolve(result?.data);
      })
      .catch(error => {
        dispatch(actions.getEventsError(error.response));
        reject();
      });
  });
