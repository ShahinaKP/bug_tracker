/*
 * Actions describe changes of state in your application
 */
import * as types from '../constants/loginConstants';

export function onLoginRequest(data) {
  return (dispatch, getState) => {
    if (data.email && data.password) {
      data.isLoading=false;
      data.isLoggedIn=true;
      data.error=null;
      dispatch(loginSuccess(data));
    }
    else {
      data.isLoading=false;
      data.isLoggedIn=false;
      data.error='invalid user';
      dispatch(loginFailure(data));
    }
  }
}


export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user
  }
}

export function loginFailure(user) {
  return {
    type: types.LOGIN_FAILURE,
    user
  }
}

