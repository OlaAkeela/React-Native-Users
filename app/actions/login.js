export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const FORGET_PASSWORD = 'FORGET_PASSWORD';
export const LOGIN_AS_GUEST = 'LOGIN_AS_GUEST';

export const login = userName => ({
  type: LOGIN,
  userName,
});

export const signup = () => ({
  type: SIGNUP,
});

export const forgtPassword = () => ({
  type: FORGET_PASSWORD,
});

export const loginAsGuest = () => ({
  type: LOGIN_AS_GUEST,
});
