import * as constant from '../../utils/constant';

const initState = {
  messages: {},
  loading: false,
  error: {},
};

export const welcomeMessageReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_WELCOME_MESSAGE_REQUEST:
      return {...state, loading: true};
    case constant.GET_WELCOME_MESSAGE_SUCCESS:
      return {...state, messages: action.payload, loading: false};
    case constant.GET_WELCOME_MESSAGE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
