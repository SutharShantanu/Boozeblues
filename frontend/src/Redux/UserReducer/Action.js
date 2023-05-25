import axios from "axios";
import {
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
  USER_LOGOUT,
} from "./ActionType";

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });
    const res = await axios.post("http://localhost:4500/users/login", data);
    const token = res.data;

    dispatch({ type: USER_SUCCESS, payload: token });
  } catch (error) {
    dispatch({ type: USER_ERROR });
  }
};

export const logoutUser = () => {
  return {
    type: USER_LOGOUT,
  };
};

