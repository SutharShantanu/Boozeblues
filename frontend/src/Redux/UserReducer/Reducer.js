
import {
    USER_LOADING,
    USER_SUCCESS,
    USER_ERROR,
    USER_LOGOUT,
} from "./ActionType";

const initialState = {
    isLoading: false,
    token: localStorage.getItem("token") ? true : false,
    isAuth: localStorage.getItem("token") ? true : false,
    isError: false,
};

export const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                token: payload,
                isLoading: false,
            };
        case USER_ERROR:
            return {
                ...state,
                isAuth: false,
                token: false,
                isLoading: false,
                isError: true,
            };
        case USER_LOGOUT:
            return {
                ...state,
                isAuth: false,
                token: false,
                isLoading: false,
            };
        default:
            return { ...state };
    }
};


