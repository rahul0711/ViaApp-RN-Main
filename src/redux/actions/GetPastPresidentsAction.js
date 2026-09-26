import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetPastPresidentAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getPastPresidentsRequest());
    apiInstance
      .get('GetAllPastPresidentDetails')
      .then(result => {
        dispatch(actions.getPastPresidentsSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getPastPresidentsError(error.response));
        reject();
      });
  });
