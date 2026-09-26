import * as constant from '../../utils/constant';

const initState = {
  newsDetails: {},
  loading: false,
  error: {},
};

export const newsDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_NEWS_DETAILS_REQUEST:
      return {...state, loading: true};
    case constant.GET_NEWS_DETAILS_SUCCESS:
      return {...state, newsDetails: action.payload, loading: false};
    case constant.GET_NEWS_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
