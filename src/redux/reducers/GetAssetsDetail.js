import * as constant from '../../utils/constant';

const initState = {
  assetsDetails: {},
  loading: false,
  error: {},
};

export const assetsDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_ASSETS_DETAIL_REQUEST:
      return {...state, loading: true};
    case constant.GET_ASSETS_DETAIL_SUCCESS:
      return {...state, assetsDetails: action.payload, loading: false};
    case constant.GET_ASSETS_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
