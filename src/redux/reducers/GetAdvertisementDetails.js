import * as constant from '../../utils/constant';

const initState = {
  advertisementDetails: {},
  loading: false,
  error: {},
};

export const advertisementDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_ADVERTISEMENT_REQUEST:
      return {...state, loading: true};
    case constant.GET_ADVERTISEMENT_SUCCESS:
      return {...state, advertisementDetails: action.payload, loading: false};
    case constant.GET_ADVERTISEMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
