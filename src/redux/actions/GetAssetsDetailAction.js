import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetAssetsDetailAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getAssetsDetailRequest());
    apiInstance
      .get('GetAllVIAAssetDetails')
      .then(result => {
        dispatch(actions.getAssetsDetailSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getAssetsDetailError(error.response));
        reject();
      });
  });
