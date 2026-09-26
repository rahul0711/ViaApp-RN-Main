import * as constant from '../../utils/constant';

const initState = {
  departmentDetail: {},
  loading: false,
  error: {},
};

export const departmentDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_DEPARTMENT_DETAIL_REQUEST:
      return {...state, loading: true};
    case constant.GET_DEPARTMENT_DETAIL_SUCCESS:
      return {...state, departmentDetail: action.payload, loading: false};
    case constant.GET_DEPARTMENT_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
