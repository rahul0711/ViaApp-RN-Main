import * as constant from '../../utils/constant';

const initState = {
  news: {},
  loading: false,
  error: {},
};

export const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_NEWS_REQUEST:
      return {...state, loading: true};
    case constant.GET_NEWS_SUCCESS:
      return {...state, news: action.payload, loading: false};
    case constant.GET_NEWS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
