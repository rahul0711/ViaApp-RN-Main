import * as constant from '../../utils/constant';

const initState = {
  events: {},
  loading: false,
  error: {},
};

export const eventsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_EVENTS_REQUEST:
      return {...state, loading: true};
    case constant.GET_EVENTS_SUCCESS:
      return {...state, events: action.payload, loading: false};
    case constant.GET_EVENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
