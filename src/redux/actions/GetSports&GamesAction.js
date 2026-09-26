import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetSportsGamesAction = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getSportsGamesRequest());
    apiInstance
      .get('GetAllSportGameDetail')
      .then(result => {
        dispatch(actions.getSportsGamesSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getSportsGamesError(error.response));
        reject();
      });
  });
