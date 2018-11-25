import { LOGIN, SIGNUP, FORGET_PASSWORD } from '../actions/login';

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
        userID: '111',
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
