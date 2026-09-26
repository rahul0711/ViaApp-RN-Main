import * as constant from '../../utils/constant';

const initState = {
  expertPanel: {},
  loading: false,
  error: {},
};

export const expertPanelReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_EXPERT_PANEL_REQUEST:
      return {...state, loading: true};
    case constant.GET_EXPERT_PANEL_SUCCESS:
      return {...state, expertPanel: action.payload, loading: false};
    case constant.GET_EXPERT_PANEL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
