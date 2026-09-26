import * as constant from '../../utils/constant';

const initState = {
  committeDetails: {},
  loading: false,
  error: {},
};

export const committeDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_COMMITTE_DETAILS_REQUEST:
      return {...state, loading: true};
    case constant.GET_COMMITTE_DETAILS_SUCCESS:
      return {...state, committeDetails: action.payload, loading: false};
    case constant.GET_COMMITTE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
