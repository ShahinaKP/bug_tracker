/*
 * The reducer takes care of state changes in our app through actions
 */

import * as types from '../constants/loginConstants';

// The initial application state
let initialState = {  
    email: '',
    password: '',
    isLoading:false,
    isLoggedIn:false,
    error:null
}

// Takes care of changing the application state
const user = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state, 
        formState: action.loginRequest
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state, 
        ...action.user
      }
    case types.LOGIN_FAILURE:
      return {
        ...state, 
        ...action.user
      }    
    default:
      return state
  }
}


export default user 