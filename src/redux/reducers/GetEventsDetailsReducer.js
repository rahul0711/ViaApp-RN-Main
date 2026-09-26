import * as constant from '../../utils/constant';

const initState = {
  eventsDetails: {},
  loading: false,
  error: {},
};

export const eventsDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_EVENTS_DETAILS_REQUEST:
      return {...state, loading: true};
    case constant.GET_EVENTS_DETAILS_SUCCESS:
      return {...state, eventsDetails: action.payload, loading: false};
    case constant.GET_EVENTS_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
