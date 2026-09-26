import * as constant from '../../utils/constant';

const initState = {
  committe: {},
  loading: false,
  error: {},
};

export const committeReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_COMMITTE_REQUEST:
      return {...state, loading: true};
    case constant.GET_COMMITTE_SUCCESS:
      return {...state, committe: action.payload, loading: false};
    case constant.GET_COMMITTE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
