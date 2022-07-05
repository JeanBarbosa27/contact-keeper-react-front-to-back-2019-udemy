import { useReducer } from "react";

import AuthContext from "./authContext";
import authReducer from "./authReducer";

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

const AuthState = (props) => {
  const initialState = {
    errors: null,
    isAuthenticated: null,
    loading: true,
    token: sessionStorage.getItem("contact-keeper-token"),
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user

  // Register user

  // Login user

  // Logout

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        errors: state.errors,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        token: state.token,
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
