import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  FeedbackData: {},
  error: {},
};

export const createFeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.CREATE_FEEDBACK_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        FeedbackData: action.payload,
        fetching: false,
      };
    case constant.CREATE_FEEDBACK_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
