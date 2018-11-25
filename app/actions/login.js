export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const FORGET_PASSWORD = 'FORGET_PASSWORD';

export const login = () => ({
  type: LOGIN,
});

export const signup = () => ({
  type: SIGNUP,
});

export const forgtPassword = () => ({
  type: FORGET_PASSWORD,
});
