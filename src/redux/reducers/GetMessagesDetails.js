import * as constant from '../../utils/constant';

const initState = {
  MessagesDetails: {},
  loading: false,
  error: {},
};

export const MessagesDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_MESSAGES_DETAILS_REQUEST:
      return {...state, loading: true};
    case constant.GET_MESSAGES_DETAILS_SUCCESS:
      return {...state, MessagesDetails: action.payload, loading: false};
    case constant.GET_MESSAGES_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
