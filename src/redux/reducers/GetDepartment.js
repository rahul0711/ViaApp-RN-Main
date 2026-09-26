import * as constant from '../../utils/constant';

const initState = {
  department: {},
  loading: false,
  error: {},
};

export const departmentReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_DEPARTMENT_REQUEST:
      return {...state, loading: true};
    case constant.GET_DEPARTMENT_SUCCESS:
      return {...state, department: action.payload, loading: false};
    case constant.GET_DEPARTMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
