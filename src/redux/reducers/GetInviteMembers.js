import * as constant from '../../utils/constant';

const initState = {
  inviteMembers: {},
  loading: false,
  error: {},
};

export const inviteMembersReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_INVITE_MEMBERS_REQUEST:
      return {...state, loading: true};
    case constant.GET_INVITE_MEMBERS_SUCCESS:
      return {...state, inviteMembers: action.payload, loading: false};
    case constant.GET_INVITE_MEMBERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
