import {
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILED,
  LOGOUT,
  REHYDRATE,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATING,
} from '../actions';

const initialState = {
  user: undefined,
  errorLogin: undefined,
  updatingLoading: undefined,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload !== undefined)
        return {...state, user: action.payload.userReducer.user};
    case AUTH_USER_SUCCESS:
      return {...state, user: action.user};
    case AUTH_USER_FAILED:
      return {...state, errorLogin: action.error};
    case LOGOUT:
      return {...state, user: null, errorLogin: null};
    case UPDATE_ACCOUNT_SUCCESS:
      return {...state, user: action.user, updatingLoading: false};
    case UPDATING:
      return {...state, updatingLoading: true};
    default:
      return state;
  }
}
