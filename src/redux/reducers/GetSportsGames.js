import * as constant from '../../utils/constant';

const initState = {
  sportsGames: {},
  loading: false,
  error: {},
};

export const sportsGamesReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.GET_SPORTS_GAMES_REQUEST:
      return {...state, loading: true};
    case constant.GET_SPORTS_GAMES_SUCCESS:
      return {...state, sportsGames: action.payload, loading: false};
    case constant.GET_SPORTS_GAMES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
