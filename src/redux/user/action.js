export const loginRequest = ({ user, password }) => ({ type: 'LOGIN_REQUEST', user, password });

export const loginSuccess = (token) => ({ type: 'LOGIN_SUCCESS', token });

export const loginFailed = () => ({ type: 'LOGIN_ERROR' });

export const logOut = () => ({ type: 'LOG_OUT' });
