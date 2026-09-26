import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetDirectorsOfVgelAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getDirectorsOfVgelRequest());
    apiInstance
      .get('GetAllDirectorVGELDetails')
      .then(result => {
        dispatch(actions.getDirectorsOfVgelSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getDirectorsOfVgelError(error.response));
        reject();
      });
  });
