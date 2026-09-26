import * as constant from '../../utils/constant';

const initState = {
  meetingsDetails: {},
  loading: false,
  error: {},
};

export const meetingsDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_MEETINGS_DETAILS_REQUEST:
      return {...state, loading: true};
    case constant.GET_MEETINGS_DETAILS_SUCCESS:
      return {...state, meetingsDetails: action.payload, loading: false};
    case constant.GET_MEETINGS_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
