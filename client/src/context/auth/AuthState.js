import { useReducer } from "react";
import axios from "axios";

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

  const registerUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.errors });
    }
  };

  // Login user

  // Logout

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        errors: state.errors,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        token: state.token,
        user: state.user,
        registerUser,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
