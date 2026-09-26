import * as constant from '../../utils/constant';

const initState = {
  directorsOfVgel: {},
  loading: false,
  error: {},
};

export const directorsOfVgelReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_DIRECTORS_VGEL_REQUEST:
      return {...state, loading: true};
    case constant.GET_DIRECTORS_VGEL_SUCCESS:
      return {...state, directorsOfVgel: action.payload, loading: false};
    case constant.GET_DIRECTORS_VGEL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
