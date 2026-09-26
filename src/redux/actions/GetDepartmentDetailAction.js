import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetDepartmentDetailAction = DepartmentId => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getDepartmentDetailRequest());
    apiInstance
      .get(
        `GetAllDepartmentWiseImpContactNumberDetail?DepartmentId=${DepartmentId}`,
      )
      .then(result => {
        dispatch(actions.getDepartmentDetailSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getDepartmentDetailError(error.response.message));
        reject(error.response);
      });
  });
