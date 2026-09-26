import * as constant from '../../utils/constant';

const initState = {
  officeBearers: {},
  loading: false,
  error: {},
};

export const officeBearersReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_OFFICE_BEARERS_REQUEST:
      return {...state, loading: true};
    case constant.GET_OFFICE_BEARERS_SUCCESS:
      return {...state, officeBearers: action.payload, loading: false};
    case constant.GET_OFFICE_BEARERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
