import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetExpertPanelAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getExpertPanelRequest());
    apiInstance
      .get('GetExpertContactNumberDetail')
      .then(result => {
        dispatch(actions.getExpertPanelSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getExpertPanelError(error.response));
        reject();
      });
  });
