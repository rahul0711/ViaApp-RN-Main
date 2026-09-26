import * as constant from '../../utils/constant';

const initState = {
  govContacts: {},
  loading: false,
  error: {},
};

export const govContactsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_GOV_CONTACTS_REQUEST:
      return {...state, loading: true};
    case constant.GET_GOV_CONTACTS_SUCCESS:
      return {...state, govContacts: action.payload, loading: false};
    case constant.GET_GOV_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
