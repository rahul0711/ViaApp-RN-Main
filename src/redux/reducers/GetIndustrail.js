import * as constant from '../../utils/constant';

const initState = {
  industrial: {},
  loading: false,
  error: {},
};

export const industrialReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_INDUSTRIAL_REQUEST:
      return {...state, loading: true};
    case constant.GET_INDUSTRIAL_SUCCESS:
      return {...state, industrial: action.payload, loading: false};
    case constant.GET_INDUSTRIAL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
