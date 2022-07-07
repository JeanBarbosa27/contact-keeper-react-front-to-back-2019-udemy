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
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
  const initialState = {
    errors: null,
    isAuthenticated: null,
    loading: true,
    token: sessionStorage.getItem("contact-keeper-token"),
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    const authToken = sessionStorage["contact-keeper-token"];
    authToken && setAuthToken(authToken);

    try {
      const { data } = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data });
    }
  };

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

  const loginUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post("api/auth", formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data });
    }
  };

  const logoutUser = () => dispatch({ type: LOGOUT });

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        errors: state.errors,
        isAuthenticated: state.isAuthenticated || state.token !== null,
        loading: state.loading,
        token: state.token,
        user: state.user,
        registerUser,
        clearErrors,
        loadUser,
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
