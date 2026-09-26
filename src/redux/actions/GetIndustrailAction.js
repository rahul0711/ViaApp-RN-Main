import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetIndustrialAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getIndustrialRequest());
    apiInstance
      .get('GetAllIndustrialAssociatationDetailDetials')
      .then(result => {
        dispatch(actions.getIndustrialSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getIndustrialError(error.response));
        reject();
      });
  });
