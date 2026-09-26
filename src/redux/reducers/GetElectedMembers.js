import * as constant from '../../utils/constant';

const initState = {
  electedMembers: {},
  loading: false,
  error: {},
};

export const electedMembersReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_ELECTED_MEMBERS_REQUEST:
      return {...state, loading: true};
    case constant.GET_ELECTED_MEMBERS_SUCCESS:
      return {...state, electedMembers: action.payload, loading: false};
    case constant.GET_ELECTED_MEMBERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
