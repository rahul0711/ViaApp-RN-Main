import * as constant from '../../utils/constant';

const initState = {
  Messages: {},
  loading: false,
  error: {},
};

export const MessagesReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_MESSAGES_REQUEST:
      return {...state, loading: true};
    case constant.GET_MESSAGES_SUCCESS:
      return {...state, Messages: action.payload, loading: false};
    case constant.GET_MESSAGES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
