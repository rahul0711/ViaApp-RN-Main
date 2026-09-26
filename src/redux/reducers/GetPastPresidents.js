import * as constant from '../../utils/constant';

const initState = {
  pastPresidents: {},
  loading: false,
  error: {},
};

export const pastPresidentsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_PAST_PRESIDENTS_REQUEST:
      return {...state, loading: true};
    case constant.GET_PAST_PRESIDENTS_SUCCESS:
      return {...state, pastPresidents: action.payload, loading: false};
    case constant.GET_PAST_PRESIDENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
