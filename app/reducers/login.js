import { LOGIN, SIGNUP, FORGET_PASSWORD, LOGIN_AS_GUEST } from '../actions/login';

const initialState = {
  userID: null,
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userName: action.userName,
      };
    case LOGIN_AS_GUEST:
      return {
        ...state,
        isLoggedIn: false,
        userName: 'Guest',
      };
    case SIGNUP:
      return {
        ...state,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
