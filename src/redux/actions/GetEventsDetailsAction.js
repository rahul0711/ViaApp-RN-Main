import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetEventsDetailsAction = EventId => async dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getEventsDetailsRequest());
    apiInstance
      .get(`GetAllIDWiseEventDetails?EventId=${EventId}`)
      .then(result => {
        dispatch(actions.getEventsDetailsSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getEventsDetailsError(error.response.message));
        reject(error.response);
      });
  });
