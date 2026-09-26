import * as constant from '../../utils/constant';

const initState = {
  meetings: {},
  loading: false,
  error: {},
};

export const meetingsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_MEETINGS_REQUEST:
      return {...state, loading: true};
    case constant.GET_MEETINGS_SUCCESS:
      return {...state, meetings: action.payload, loading: false};
    case constant.GET_MEETINGS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
