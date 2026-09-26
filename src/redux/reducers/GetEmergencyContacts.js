import * as constant from '../../utils/constant';

const initState = {
  emergencyContacts: {},
  loading: false,
  error: {},
};

export const emergencyContactsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_EMERGENCY_CONTACTS_REQUEST:
      return {...state, loading: true};
    case constant.GET_EMERGENCY_CONTACTS_SUCCESS:
      return {...state, emergencyContacts: action.payload, loading: false};
    case constant.GET_EMERGENCY_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
