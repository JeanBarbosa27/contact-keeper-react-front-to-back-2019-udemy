import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      console.log("user loaded:", action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
      sessionStorage.setItem("contact-keeper-token", action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      sessionStorage.removeItem("contact-keeper-token");

      return {
        ...state,
        isAuthenticated: null,
        loading: false,
        token: null,
        user: null,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default authReducer;
