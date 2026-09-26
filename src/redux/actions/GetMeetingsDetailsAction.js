import * as actions from './index';
import {apiInstance} from '../../httpclient';

export const GetMeetingsDetailsAction = MeetingsId => async dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getMeetingsDetailsRequest());
    apiInstance
      .get(`GetAllIDWiseMeetingDetails?MeetingId=${MeetingsId}`)
      .then(result => {
        dispatch(actions.getMeetingsDetailsSuccess(result?.data));
        resolve(result?.data?.data);
      })
      .catch(error => {
        dispatch(actions.getMeetingsDetailsError(error.response.message));
        reject(error.response);
      });
  });
